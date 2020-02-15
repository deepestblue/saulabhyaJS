import { scriptDataMap } from "./script_data.mjs";

const implicitVowel = 'a';
const plosiveConsonants = ['k', 'g', 'c', 'j', 'ṭ', 'ḍ', 'ṯ', 'ḏ', 't', 'd', 'p', 'b',];
const suppressedVowel = '';
const aspirateConsonant = 'h';
const separator = ':';

const diphthongAntecedent = 'a';
const diphthongConsequents = ['i', 'u',];

const disjunctor = '|';

const regex = s => new RegExp(s, 'g');

function dravidianToLatinNumbers(sourceNumber, data) {
    const convertSmallNumber = function(sourceNumber) {
        // TODO: Use regex?
        let xlittedNumber = 0;
        const hundreds = sourceNumber.indexOf(data.numbers.get(100));
        if (hundreds >= 0) {
            if (hundreds == 0) {
                xlittedNumber += 100;
                sourceNumber = sourceNumber.slice(1);
            } else {
                xlittedNumber += 100 * data.charMap[sourceNumber[0]];
                sourceNumber = sourceNumber.slice(2);
            }
        }
        const tens = sourceNumber.indexOf(data.numbers.get(10));
        if (tens >= 0) {
            if (tens == 0) {
                xlittedNumber += 10;
                sourceNumber = sourceNumber.slice(1);
            } else {
                xlittedNumber += 10 * data.charMap[sourceNumber[0]];
                sourceNumber = sourceNumber.slice(2);
            }
        }

        if (sourceNumber.length > 0) {
            xlittedNumber += data.charMap[sourceNumber[0]];
        }
        return xlittedNumber;
    };

    let xlittedNumber = 0;

    // Let's divide up the number into groups of thousands.
    const thousand = data.numbers.get(1000);
    const otherNumbers = Array.from(data.numbers.values()).filter(x => isNaN(parseInt(x, 10))).filter(x => x!=thousand).join('');

    // Each group is an optional sub‐thousand number, following by an optional power (expressed in thousands).
    // But while both the constituents are optional, one of them has to exist, hence the positive lookahead.
    const groupRegex = regex(`(?=.)[${otherNumbers}]*${thousand}*`);

    // From the least significant group to the most.
    sourceNumber.match(groupRegex).reverse().forEach(group => {
        const thousands = group.match(regex(`${thousand}*$`))[0].length;
        if (thousands > 0) {
            // Strip off the thousand symbols, unless there are none.
            group = group.slice(0, -thousands);
        }
        const power = 1000 ** thousands;
        if (group == "") {
            // Nothing in front of the thousand symbols is just the value of the power
            xlittedNumber += power;
            return;
        }
        xlittedNumber += power * convertSmallNumber(group);
    });
    return xlittedNumber;
}

function brahmiyaToLatn(otherScript, sourceText) {
    const data = scriptDataMap.get(otherScript);

    const numbers = Array.from(data.numbers.values()).filter(x => isNaN(parseInt(x, 10))).join(disjunctor);
    // mlym, taml and gran don't use a strict place‐value system
    if (otherScript != "taml" && otherScript != "mlym" && otherScript != "gran") {
        sourceText = sourceText.replace(regex(numbers), function(match) {
            return data.charMap[match];
        });
    } else {
        sourceText = sourceText.replace(regex(`(${numbers})+`), function(match) {
            return dravidianToLatinNumbers(match, data);
        });
    }

    const vowelMarks = Array.from(data.vowelMarks.values());
    const consonants = Array.from(data.consonants.values());

    let isConsonant = false;
    let isVowelImplicitVowel = false;
    let isPlosive = false;
    let isHalfPlosive = false;

    let transliteratedText = "";
    [...sourceText].forEach(c => {
        let shouldEmitImplicitVowel = isConsonant &&
            ! vowelMarks.includes(c);
        if (shouldEmitImplicitVowel) {
            transliteratedText += implicitVowel;
        }
        if (isHalfPlosive && data.charMap[c] == aspirateConsonant) {
            transliteratedText += separator;
        }

        if (isVowelImplicitVowel || shouldEmitImplicitVowel) {
            if (diphthongConsequents.indexOf(data.charMap[c]) >= 0) {
                transliteratedText += separator;
            }
        }

        isHalfPlosive = isPlosive && data.charMap[c] == suppressedVowel;
        isPlosive = plosiveConsonants.includes(data.charMap[c]);
        isVowelImplicitVowel = data.charMap[c] == implicitVowel;
        isConsonant = consonants.includes(c);

        if (/\s/u.test(c)) {
            transliteratedText += c;
            return;
        }

        // We've already taken care of numbers first.
        if (data.numbers.get(parseInt(c, 10))) {
            transliteratedText += c;
            return;
        }

        if (! (c in data.charMap)) {
            throw new RangeError(`Unknown ${otherScript} character ${c}.`);
        }

        transliteratedText += data.charMap[c];
    });

    if (isConsonant) {
        transliteratedText += implicitVowel;
    }

    return transliteratedText;
}

function indicToSouthDravidianNumbers(sourceNumber, data) {
    if (sourceNumber < 0) {
        throw new Error("No support for negative numbers.");
    }

    if (sourceNumber == 0) {
        return data.numbers.get(sourceNumber);
    }

    let xlittedText = "";

    for (let mille = 0; sourceNumber > 0; ++mille) {
        let rem = sourceNumber % 1000;
        sourceNumber = (sourceNumber - rem) / 1000;

        if (rem == 0) {
            continue;
        }

        xlittedText = data.numbers.get(1000).repeat(mille) + xlittedText;

        if (rem == 1 && mille > 0) {
            // 1 is implicit, unless there are no thousand symbols.
            continue;
        }

        /* jshint -W083 */
        [1, 10, 100].forEach(function(place) {
            const digit = rem % 10;
            rem = (rem - digit) / 10;

            if (digit == 0) {
                // Nothing to do if zero digit.
                return;
            }

            /*
            ╔════════════╦═════════════╦════════════════════════╗
            ║            ║ Units place ║ Tens or Hundreds place ║
            ╠════════════╬═════════════╬════════════════════════╣
            ║ Digit = 1  ║ Digit       ║ Place                  ║
            ╠════════════╬═════════════╬════════════════════════╣
            ║ Digit ≠ 1  ║ Digit       ║ Digit + Place          ║
            ╚════════════╩═════════════╩════════════════════════╝
            */

            if (place != 1) {
                xlittedText = data.numbers.get(place) + xlittedText;
                if (digit == 1) {
                    return;
                }
            }

            xlittedText = data.numbers.get(digit) + xlittedText;
        });
        /* jshint +W083 */
    }

    return xlittedText;
}

function latnToBrahmiya(otherScript, sourceText) {
    const data = scriptDataMap.get(otherScript);

    // Validate no foreign characters
    (function() {
        // Need to handle these specially, as they do bad stuff in regexes.
        const splCharacters = "\\.?\\s";
        const scriptCharacters = [
            ...data.numbers.keys(), ...data.misc.keys(), ...data.modifiers.keys(),
            ...data.vowelMarks.keys(), ...data.vowels.keys(), ...data.consonants.keys(),
            separator, ...splCharacters,
        ];

        const invalidRegex = new RegExp(`[^${scriptCharacters.join('')}]`);
        const result = sourceText.match(invalidRegex);
        if (result) {
            throw new RangeError(`Unknown ${otherScript} character ${result[0]}.`);
        }
    })();

    const numbers = Array.from(Array(10).keys()).join('');
    // mlym, taml and gran don't use a strict place‐value system
    if (otherScript != "taml" && otherScript != "mlym" && otherScript != "gran") {
        sourceText = sourceText.replace(regex(`[${numbers}]`), function(match) {
            return data.numbers.get(parseInt(match, 10));
        });
    } else {
        sourceText = sourceText.replace(regex(`[${numbers}]+`), function(match) {
            return indicToSouthDravidianNumbers(parseInt(match, 10), data);
        });
    }

    const misc = Array.from(data.misc.keys()).join(disjunctor);
    // Many scripts have no misc. section. A empty regex always matches, which is undesirable.
    if (misc.length) {
        sourceText = sourceText.replace(regex(misc), function(match) {
            return data.misc.get(match);
        });
    }

    // Handle modifiers separately first to get them out of the way.
    const modifiers = Array.from(data.modifiers.keys()).join(disjunctor);
    sourceText = sourceText.replace(regex(modifiers), function(match) {
        return data.modifiers.get(match);
    });

    // Handle separated consonants like 'b:h'
    const plosives = plosiveConsonants.join(disjunctor);
    sourceText = sourceText.replace(regex(`(${plosives})${separator}`), function(match, p1) {
        return data.consonants.get(p1) + data.vowelMarks.get(suppressedVowel);
    });

    // Handle separated vowels like 'a:i'
    const diphthongsAndConstituents = diphthongConsequents.map(s => diphthongAntecedent + s).concat(diphthongConsequents).concat(new Array(diphthongAntecedent));
    sourceText = sourceText.replace(regex(`${diphthongAntecedent}${separator}(${diphthongConsequents.join(disjunctor)})`), function(match, p1) {
        return implicitVowel + data.vowels.get(p1);
    });

    // We need to first sweep through and xlit all diphthong non‐consequents. Otherwise "aū" will be xlitted as a diphthong followed by a macron.
    const vowels1 = Array.from(data.vowels.keys()).filter(x => ! diphthongsAndConstituents.includes(x)).sort().reverse().join(disjunctor);
    // Sort + reverse ensures greediness, i.e. ṅ is thought of as one unit and the n isn't xlitted separately.
    const consonants = Array.from(data.consonants.keys()).sort().reverse().join(disjunctor);
    sourceText = sourceText.replace(regex(`(${consonants})(${vowels1})`), function(match, p1, p2) {
        return data.consonants.get(p1) + data.vowelMarks.get(p2);
    });
    sourceText = sourceText.replace(regex(vowels1), function(match) {
        return data.vowels.get(match);
    });

    // Diphthongs and their constituents are in phase 2.
    const vowels2 = diphthongsAndConstituents.sort().reverse().join(disjunctor);
    sourceText = sourceText.replace(regex(`(${consonants})(${vowels2})`), function(match, p1, p2) {
        return data.consonants.get(p1) + data.vowelMarks.get(p2);
    });
    sourceText = sourceText.replace(regex(vowels2), function(match) {
        return data.vowels.get(match);
    });

    // Remaining bare consonants.
    sourceText = sourceText.replace(regex(consonants), function(match) {
        return data.consonants.get(match) + data.vowelMarks.get(suppressedVowel);
    });

    return sourceText;
}

export { brahmiyaToLatn, latnToBrahmiya };
