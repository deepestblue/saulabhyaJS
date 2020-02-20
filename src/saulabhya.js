import { scriptsData } from "./data.js";

["taml", "gran", "knda", "mlym", "telu", "deva",].forEach(script => {
    const scriptData = scriptsData[script];
    const revArray = Array.from(
        [...scriptData.vowels, ...scriptData.vowelMarks, ...scriptData.consonants, ...scriptData.numbers, ...scriptData.modifiers, ...scriptData.misc,],
        a => a.reverse());
    scriptData.brahmicToLatin = revArray.reduce((ator, val) => Object.assign(ator, {[val[0]] : val[1]}), {});
    scriptData.brahmicToLatin['.'] = '.';
    scriptData.brahmicToLatin['?'] = '?';
});

const implicitVowel = 'a';
const plosiveConsonants = ['k', 'g', 'c', 'j', 'ṭ', 'ḍ', 'ṯ', 'ḏ', 't', 'd', 'p', 'b',];
const suppressedVowel = '';
const aspirateConsonant = 'h';
const separator = ':';

const diphthongAntecedent = 'a';
const diphthongConsequents = ['i', 'u',];

const disjunctor = '|';

const regex = s => new RegExp(s, 'g');

// Regex pattern that matches any of the elements of the passed‐in array.
const anyOfArray = arr => `[${arr.join('')}]`;

// Regex pattern that matches any of the elements obtainable from the passed‐in iterable.
const anyOfIterable = it => anyOfArray(Array.from(it));

function southDravidianToIndicNumbers(sourceNumber, scriptData) {
    const thousand = scriptData.numbers.get(1000);
    const hundred = scriptData.numbers.get(100);
    const ten = scriptData.numbers.get(10);
    const digits = Array.from(scriptData.numbers.values()).filter(x => scriptData.brahmicToLatin[x] < 10);

    // Let's divide up the number into groups of thousands.
    const otherNumbers = Array.from(scriptData.numbers.values()).filter(x => x!=thousand);

    // Each group is an optional sub‐thousand number, following by an optional power (expressed in thousands).
    // But while both the constituents are optional, one of them has to exist, hence a positive lookahead.
    const groupRegex = regex(`(?=.)${anyOfArray(otherNumbers)}*${thousand}*`);

    return sourceNumber.match(groupRegex).reduce((ator, group) => {
        // Process each group.
        const thousands = group.match(regex(`${thousand}*$`))[0].length;
        if (thousands > 0) {
            // Strip off the thousand symbols, unless there are none.
            group = group.slice(0, -thousands);
        }

        const anyDigit = anyOfArray(digits);
        const subThousandNumberRegex =
            regex(`(?:(${anyDigit}?)(${hundred}))?(?:(${anyDigit})?(${ten}))?(${anyDigit}?)`);
        const components = subThousandNumberRegex.exec(group);

        return ator + 1000 ** thousands *
            (components[0] ?
                (components[5] ? scriptData.brahmicToLatin[components[5]] : 0) + // Add in any units.
                (components[4] ? // If there is a tens symbol, …
                    // … add in the tens, treating a missing digit prefix as 1.
                    10 * (components[3] ? scriptData.brahmicToLatin[components[3]] : 1)
                    : 0) +
                (components[2] ? // If there is a hundreds symbol, …
                    // … add in the hundreds, treating a missing digit prefix as 1.
                    100 * (components[1] ? scriptData.brahmicToLatin[components[1]] : 1)
                    : 0)
                : 1); // Nothing in front of the thousand symbols is just the value of the power.
    }, 0);
}

function brahmicToLatin(otherScript, sourceText) {
    const scriptData = scriptsData[otherScript];

    // mlym, taml and gran don't use a strict place‐value system
    if (otherScript != "taml" && otherScript != "mlym" && otherScript != "gran") {
        sourceText = sourceText.replace(
            regex(anyOfIterable(scriptData.numbers.values())),
            match => scriptData.brahmicToLatin[match]);
    } else {
        sourceText = sourceText.replace(
            regex(`${anyOfIterable(scriptData.numbers.values())}+`),
            match => southDravidianToIndicNumbers(match, scriptData));
    }

    const vowelMarks = Array.from(scriptData.vowelMarks.values());
    const consonants = Array.from(scriptData.consonants.values());

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
        if (isHalfPlosive && scriptData.brahmicToLatin[c] == aspirateConsonant) {
            transliteratedText += separator;
        }

        if (isVowelImplicitVowel || shouldEmitImplicitVowel) {
            if (diphthongConsequents.indexOf(scriptData.brahmicToLatin[c]) >= 0) {
                transliteratedText += separator;
            }
        }

        isHalfPlosive = isPlosive && scriptData.brahmicToLatin[c] == suppressedVowel;
        isPlosive = plosiveConsonants.includes(scriptData.brahmicToLatin[c]);
        isVowelImplicitVowel = scriptData.brahmicToLatin[c] == implicitVowel;
        isConsonant = consonants.includes(c);

        if (/\s/u.test(c)) {
            transliteratedText += c;
            return;
        }

        // We've already taken care of numbers first.
        if (scriptData.numbers.get(parseInt(c, 10))) {
            transliteratedText += c;
            return;
        }

        if (! (c in scriptData.brahmicToLatin)) {
            throw new RangeError(`Unknown ${otherScript} character ${c}.`);
        }

        transliteratedText += scriptData.brahmicToLatin[c];
    });

    if (isConsonant) {
        transliteratedText += implicitVowel;
    }

    return transliteratedText;
}

function indicToSouthDravidianNumbers(sourceNumber, scriptData) {
    // Zero is special, and is in fact not allowed in the traditional system.
    // But modern usage demands it.
    if (sourceNumber == 0) {
        return scriptData.numbers.get(sourceNumber);
    }

    let xlittedText = "";

    // Let's process each group of 3 digits at a time.
    for (let mille = 0; sourceNumber > 0; ++mille) {
        let rem = sourceNumber % 1000;
        sourceNumber = (sourceNumber - rem) / 1000;

        // Nothing in this group.
        if (rem == 0) {
            continue;
        }

        // We need mille‐many thousand‐symbols.
        xlittedText = scriptData.numbers.get(1000).repeat(mille) + xlittedText;

        if (rem == 1 && mille > 0) {
            // 1 is implicit, except for the least significant group.
            continue;
        }

        // JSHint doesn't like functions that close on loop‐scoped variables,
        // but this seems to be the cleanest way to implement the algorithm.
        /* jshint -W083 */
        [1, 10, 100,].forEach(place => {
            const digit = rem % 10;
            rem = (rem - digit) / 10;

            if (digit == 0) {
                // Zeroes are not explicitly written.
                return;
            }

            /*
                Below is a table of what needs to be written out in each case.
                ╔════════════╦═════════════╦════════════════════════╗
                ║            ║ Units place ║ Tens or Hundreds place ║
                ╠════════════╬═════════════╬════════════════════════╣
                ║ Digit = 1  ║ Digit       ║ Place                  ║
                ╠════════════╬═════════════╬════════════════════════╣
                ║ Digit ≠ 1  ║ Digit       ║ Digit + Place          ║
                ╚════════════╩═════════════╩════════════════════════╝
            */
            if (place != 1) {
                xlittedText = scriptData.numbers.get(place) + xlittedText;
                if (digit == 1) {
                    return;
                }
            }

            xlittedText = scriptData.numbers.get(digit) + xlittedText;
        });
        /* jshint +W083 */
    }

    return xlittedText;
}

function latinToBrahmic(otherScript, sourceText) {
    const scriptData = scriptsData[otherScript];

    // Validate no foreign characters
    (() => {
        // Need to handle these specially, as they do bad stuff in regexes.
        const splCharacters = "\\.?\\s";
        const scriptCharacters = [
            ...scriptData.numbers.keys(), ...scriptData.misc.keys(), ...scriptData.modifiers.keys(),
            ...scriptData.vowelMarks.keys(), ...scriptData.vowels.keys(), ...scriptData.consonants.keys(),
            separator, ...splCharacters,
        ];

        // Should not use 'g' for this regex alone.
        // Seems to result in some sort of combinatorial explosion.
        const invalidRegex = new RegExp(`[^${scriptCharacters.join('')}]`);
        const result = sourceText.match(invalidRegex);
        if (result) {
            throw new RangeError(`Unknown ${otherScript} character ${result[0]}.`);
        }
    })();

    // mlym, taml and gran don't use a strict place‐value system
    if (otherScript != "taml" && otherScript != "mlym" && otherScript != "gran") {
        sourceText = sourceText.replace(
            regex(anyOfIterable(Array(10).keys())),
            match => scriptData.numbers.get(parseInt(match, 10)));
    } else {
        sourceText = sourceText.replace(
            regex(`${anyOfIterable(Array(10).keys())}+`),
            match => indicToSouthDravidianNumbers(parseInt(match, 10), scriptData));
    }

    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.misc.keys())),
        match => scriptData.misc.get(match));

    // Handle modifiers separately first to get them out of the way.
    const modifiers = Array.from(scriptData.modifiers.keys()).join(disjunctor);
    sourceText = sourceText.replace(
        regex(modifiers),
        match => scriptData.modifiers.get(match));

    // Handle separated consonants like 'b:h'
    sourceText = sourceText.replace(
        regex(`(${anyOfArray(plosiveConsonants)})${separator}`),
        (match, p1) => scriptData.consonants.get(p1) + scriptData.vowelMarks.get(suppressedVowel));

    // Handle separated vowels like 'a:i'
    const diphthongsAndConstituents = diphthongConsequents.map(s => diphthongAntecedent + s).
        concat(diphthongConsequents).concat(new Array(diphthongAntecedent));
    sourceText = sourceText.replace(
        regex(`${diphthongAntecedent}${separator}(${anyOfArray(diphthongConsequents)})`),
        (match, p1) => implicitVowel + scriptData.vowels.get(p1));

    // We need to first sweep through and xlit all diphthong non‐consequents.
    // Otherwise "aū" will be xlitted as a diphthong followed by a macron.
    const vowels1 = Array.from(scriptData.vowels.keys()).filter(x => ! diphthongsAndConstituents.includes(x))
        .sort().reverse().join(disjunctor);
    // Sort + reverse ensures greediness, i.e. ṅ is thought of as one unit and the n isn't xlitted separately.
    const consonants = Array.from(scriptData.consonants.keys()).sort().reverse().join(disjunctor);
    sourceText = sourceText.replace(
        regex(`(${consonants})(${vowels1})`),
        (match, p1, p2) => scriptData.consonants.get(p1) + scriptData.vowelMarks.get(p2));
    sourceText = sourceText.replace(regex(vowels1), match => scriptData.vowels.get(match));

    // Diphthongs and their constituents are in phase 2.
    const vowels2 = diphthongsAndConstituents.sort().reverse().join(disjunctor);
    sourceText = sourceText.replace(
        regex(`(${consonants})(${vowels2})`),
        (match, p1, p2) => scriptData.consonants.get(p1) + scriptData.vowelMarks.get(p2));
    sourceText = sourceText.replace(regex(vowels2), match => scriptData.vowels.get(match));

    // Remaining bare consonants.
    sourceText = sourceText.replace(
        regex(consonants),
        match => scriptData.consonants.get(match) + scriptData.vowelMarks.get(suppressedVowel));

    return sourceText;
}

export { brahmicToLatin, latinToBrahmic };
