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
    const ten = data.numbers.get(10);
    const hundred = data.numbers.get(100);
    const thousand = data.numbers.get(1000);

    const convertSmallNumber = function(sourceNumber) {
        let xlittedNumber = 0;
        const hundreds = sourceNumber.indexOf(hundred);
        if (hundreds >= 0) {
            if (hundreds == 0) {
                xlittedNumber += 100;
                sourceNumber = sourceNumber.slice(1);
            } else {
                xlittedNumber += 100 * data.numbers.get(sourceNumber[0]);
                sourceNumber = sourceNumber.slice(2);
            }
        }
        const tens = sourceNumber.indexOf(ten);
        if (tens >= 0) {
            if (tens == 0) {
                xlittedNumber += 10;
                sourceNumber = sourceNumber.slice(1);
            } else {
                xlittedNumber += 10 * data.numbers.get(sourceNumber[0]);
                sourceNumber = sourceNumber.slice(2);
            }
        }

        if (sourceNumber.length > 0) {
            xlittedNumber += data.numbers.get(sourceNumber[0]);
        }
        return xlittedNumber;
    };

    let xlittedNumber = 0;
    const numbersExceptThousand = Array.from(data.numbers.keys()).filter(x => isNaN(parseInt(x, 10))).filter(x => x!=thousand).join(disjunctor);
    const groupRegex = regex(`(?:${numbersExceptThousand})*${thousand}*`);
    sourceNumber.match(groupRegex).reverse().forEach(g => {
        const thousands = g.match(regex(`${thousand}*$`))[0].length;
        if (thousands == 0) {
            xlittedNumber += convertSmallNumber(g);
        } else {
            g = g.slice(0, -thousands);
            const power = 1000 ** thousands;
            if (g == "") {
                xlittedNumber += power;
            }
            xlittedNumber += power * convertSmallNumber(g);
        }
    });
    return xlittedNumber;
}

function brahmiyaToLatn(otherScript, sourceText, xlitNumbers) {
    const data = scriptDataMap.get(otherScript);

    if (xlitNumbers) {
        const numbers = Array.from(data.numbers.keys()).filter(x => isNaN(parseInt(x, 10))).join(disjunctor);
        if (otherScript != "taml" && otherScript != "mlym") {
            return sourceText.replace(regex(numbers), function(match) {
                return data.numbers.get(match);
            });
        }

        return sourceText.replace(regex(`(${numbers})+`), function(match) {
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
        if (c in data.charMap) {
            if (isHalfPlosive && data.charMap[c] == aspirateConsonant) {
                transliteratedText += separator;
            }

            if (isVowelImplicitVowel || shouldEmitImplicitVowel) {
                if (diphthongConsequents.indexOf(data.charMap[c]) >= 0) {
                    transliteratedText += separator;
                }
            }
        } else {
//            throw "Should not come here once numbers are accounted for.";
        }

        isHalfPlosive = isPlosive && data.charMap[c] == suppressedVowel;
        isPlosive = plosiveConsonants.includes(data.charMap[c]);
        isVowelImplicitVowel = data.charMap[c] == implicitVowel;
        isConsonant = consonants.includes(c);

        transliteratedText += c in data.charMap ? data.charMap[c] : c;
    });

    if (isConsonant) {
        transliteratedText += implicitVowel;
    }

    return transliteratedText;
}

function latnToDravidianNumbers(sourceNumber, data) {
    if (sourceNumber < 0) {
        throw new Error("No support for negative numbers.");
    }

    if (sourceNumber == 0) {
        return data.numbers.get(sourceNumber);
    }

    const convertSmallNumber = function(sourceNumber) {
        let xlittedText = "";

        const units = sourceNumber % 10;
        sourceNumber = (sourceNumber - units) / 10;
        if (units > 0) {
            xlittedText = data.numbers.get(units) + xlittedText;
        }

        const tens = sourceNumber % 10;
        sourceNumber = (sourceNumber - tens) / 10;
        if (tens > 0) {
            xlittedText = data.numbers.get(10) + xlittedText;
            if (tens > 1) {
                xlittedText = data.numbers.get(tens) + xlittedText;
            }
        }

        const hundreds = sourceNumber % 10;
        sourceNumber = (sourceNumber - hundreds) / 10;
        if (hundreds > 0) {
            xlittedText = data.numbers.get(100) + xlittedText;
            if (hundreds > 1) {
                xlittedText = data.numbers.get(hundreds) + xlittedText;
            }
        }

        return xlittedText;
    };

    let xlittedText = "", power = 0;
    while (sourceNumber > 0) {
        const rem = sourceNumber % 1000;
        if (rem > 0) {
            xlittedText = data.numbers.get(1000).repeat(power) + xlittedText;
            if (rem > 1 || power == 0) {
                xlittedText = convertSmallNumber(rem, data) + xlittedText;
            }
        }
        sourceNumber = (sourceNumber - rem) / 1000;
        ++power;
    }

    return xlittedText;
}

function latnToBrahmiya(otherScript, sourceText, xlitNumbers) {

    const data = scriptDataMap.get(otherScript);

    if (xlitNumbers) {
        const numbers = Array.from(Array(10).keys()).join(disjunctor);

        if (otherScript != "taml" && otherScript != "mlym") {
            return sourceText.replace(regex(numbers), function(match) {
                return data.numbers.get(parseInt(match, 10));
            });
        }

        return sourceText.replace(regex(`(${numbers})+`), function(match) {
            return latnToDravidianNumbers(parseInt(match, 10), data);
        });
}

    const misc = Array.from(data.misc.keys()).join(disjunctor);
    const modifiers = Array.from(data.modifiers.keys()).join(disjunctor);
    const plosives = plosiveConsonants.join(disjunctor);
    const consonants = Array.from(data.consonants.keys()).sort().reverse().join(disjunctor);

    const diphthongsAndConstituents = diphthongConsequents.map(s => diphthongAntecedent + s).concat(diphthongConsequents).concat(new Array(diphthongAntecedent));
    const vowels1 = Array.from(data.vowels.keys()).filter(x => ! diphthongsAndConstituents.includes(x)).sort().reverse().join(disjunctor);
    const vowels2 = diphthongsAndConstituents.sort().reverse().join(disjunctor);

    if (misc.length) {
        sourceText = sourceText.replace(regex(misc), function(match) {
            return data.misc.get(match);
        });
    }

    sourceText = sourceText.replace(regex(modifiers), function(match) {
        return data.modifiers.get(match);
    });

    sourceText = sourceText.replace(regex(`(${plosives})${separator}`), function(match, p1) {
        return data.consonants.get(p1) + data.vowelMarks.get(suppressedVowel);
    });
    sourceText = sourceText.replace(regex(`${diphthongAntecedent}${separator}(${diphthongConsequents.join(disjunctor)})`), function(match, p1) {
        return implicitVowel + data.vowels.get(p1);
    });

    sourceText = sourceText.replace(regex(`(${consonants})(${vowels1})`), function(match, p1, p2) {
        return data.consonants.get(p1) + data.vowelMarks.get(p2);
    });
    sourceText = sourceText.replace(regex(vowels1), function(match) {
        return data.vowels.get(match);
    });

    sourceText = sourceText.replace(regex(`(${consonants})(${vowels2})`), function(match, p1, p2) {
        return data.consonants.get(p1) + data.vowelMarks.get(p2);
    });
    sourceText = sourceText.replace(regex(vowels2), function(match) {
        return data.vowels.get(match);
    });

    sourceText = sourceText.replace(regex(consonants), function(match) {
        return data.consonants.get(match) + data.vowelMarks.get(suppressedVowel);
    });

    return sourceText;
}

export { brahmiyaToLatn, latnToBrahmiya };
