const scriptsData = {
    Taml: {
        vowels: new Map([
            ["a", "அ",], ["ā", "ஆ",],
            ["i", "இ",], ["ī", "ஈ",],
            ["u", "உ",], ["ū", "ஊ",],
            ["e", "எ",], ["ē", "ஏ",], ["ai", "ஐ",],
            ["o", "ஒ",], ["ō", "ஓ",], ["au", "ஔ",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "ா",],
            ["i", "ி",], ["ī", "ீ",],
            ["u", "ு",], ["ū", "ூ",],
            ["e", "ெ",], ["ē", "ே",], ["ai", "ை",],
            ["o", "ொ",], ["ō", "ோ",], ["au", "ௌ",],
            ["", "்",],
        ],),
        misc: new Map([
            ["Ω", "ௐ",], ["₨", "௹",], ["〃", "௸",], ["#", "𑿩",],
            [",", ",",], ["“", "“",], ["”", "”",], ["!", "!",], ["?", "?",], [".", ".",], ["↩", "↩",],
        ],),
        modifiers: new Map([["ḵ", "ஃ",],],),
        accentMarks: new Map([],),
        consonants: new Map([
            ["k", "க",], ["ṅ", "ங",],
            ["c", "ச",], ["ñ", "ஞ",],
            ["ṭ", "ட",], ["ṇ", "ண",],
            ["ṯ", "ற",], ["ṉ", "ன",],
            ["t", "த",], ["n", "ந",],
            ["p", "ப",], ["m", "ம",],
            ["y", "ய",], ["r", "ர",],
            ["ḻ", "ல",], ["v", "வ",],
            ["ṛ", "ழ",], ["ḷ", "ள",],
        ],),
        numbers: new Map([
            [0, "௦",],
            [1, "௧",], [2, "௨",], [3, "௩",], [4, "௪",], [5, "௫",], [6, "௬",], [7, "௭",], [8, "௮",], [9, "௯",],
            [10, "௰",], [100, "௱",], [1000, "௲",],
        ],),
    },
    Gran: {
        vowels: new Map([
            ["a", "𑌅",], ["ā", "𑌆",],
            ["i", "𑌇",], ["ī", "𑌈",],
            ["u", "𑌉",], ["ū", "𑌊",],
            ["r̥", "𑌋",], ["r̥̄", "𑍠",],
            ["l̥", "𑌌",], ["l̥̄", "𑍡",],
            ["ē", "𑌏",], ["ai", "𑌐",],
            ["ō", "𑌓",], ["au", "𑌔",],
            ["Ω", "𑍐",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "𑌾",],
            ["i", "𑌿",], ["ī", "𑍀",],
            ["u", "𑍁",], ["ū", "𑍂",],
            ["r̥", "𑍃",], ["r̥̄", "𑍄",],
            ["l̥", "𑍢",], ["l̥̄", "𑍣",],
            ["ē", "𑍇",], ["ai", "𑍈",],
            ["ō", "𑍋",], ["au", "𑍌",],
            ["", "𑍍",],
        ],),
        misc: new Map([
            ["।", "।",], ["॥", "॥",],
            ["↩", "↩",], ["…", "𑍝",],
        ],),
        modifiers: new Map([
            ["m̐", "𑌁",], ["ṁ", "𑌂",], ["ḥ", "𑌃",],
            ["ẖ", "ᳲ",], ["ḫ", "ᳲ",],
        ],),
        accentMarks: new Map([
            ["", "॒",], ["́", "",], ["̀", "᳴",], ["̏", "॑",],
        ],),
        consonants: new Map([
            ["k", "𑌕",], ["kh", "𑌖",], ["g", "𑌗",], ["gh", "𑌘",], ["ṅ", "𑌙",],
            ["c", "𑌚",], ["ch", "𑌛",], ["j", "𑌜",], ["jh", "𑌝",], ["ñ", "𑌞",],
            ["ṭ", "𑌟",], ["ṭh", "𑌠",], ["ḍ", "𑌡",], ["ḍh", "𑌢",], ["ṇ", "𑌣",],
            ["t", "𑌤",], ["th", "𑌥",], ["d", "𑌦",], ["dh", "𑌧",], ["n", "𑌨",],
            ["p", "𑌪",], ["ph", "𑌫",], ["b", "𑌬",], ["bh", "𑌭",], ["m", "𑌮",],
            ["y", "𑌯",], ["r", "𑌰",], ["l", "𑌲",], ["v", "𑌵",], ["ḷ", "𑌳",],
            ["ś", "𑌶",], ["ṣ", "𑌷",], ["s", "𑌸",], ["h", "𑌹",],
        ],),
        numbers: new Map([
            [0, "௦",],
            [1, "௧",], [2, "௨",], [3, "௩",], [4, "௪",], [5, "௫",], [6, "௬",], [7, "௭",], [8, "௮",], [9, "௯",],
            [10, "௰",], [100, "௱",], [1000, "௲",],
        ],),
    },
    Knda: {
        vowels: new Map([
            ["a", "ಅ",], ["ā", "ಆ",],
            ["i", "ಇ",], ["ī", "ಈ",],
            ["u", "ಉ",], ["ū", "ಊ",],
            ["e", "ಎ",], ["ē", "ಏ",], ["ai", "ಐ",],
            ["o", "ಒ",], ["ō", "ಓ",], ["au", "ಔ",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "ಾ",],
            ["i", "ಿ",], ["ī", "ೀ",],
            ["u", "ು",], ["ū", "ೂ",],
            ["e", "ೆ",], ["ē", "ೇ",], ["ai", "ೈ",],
            ["o", "ೊ",], ["ō", "ೋ",], ["au", "ೌ",],
            ["", "್",],
        ],),
        misc: new Map([
            [",", ",",], ["“", "“",], ["”", "”",], ["!", "!",], ["?", "?",], [".", ".",], ["↩", "↩",],
        ],),
        modifiers: new Map([
            ["ḵ", "ಃ",],
        ],),
        accentMarks: new Map([],),
        consonants: new Map([
            ["k", "ಕ",], ["ṅ", "ಙ",],
            ["c", "ಚ",], ["ñ", "ಞ",],
            ["ṭ", "ಟ",], ["ṇ", "ಣ",],
            ["ṯ", "ಱ",], ["ṉ", "಩",],
            ["t", "ತ",], ["n", "ನ",],
            ["p", "ಪ",], ["m", "ಮ",],
            ["y", "ಯ",], ["r", "ರ",],
            ["ḻ", "ಲ",], ["v", "ವ",],
            ["ṛ", "ೞ",], ["ḷ", "ಳ",],
        ],),
        numbers: new Map([
            [0, "೦",], [1, "೧",], [2, "೨",], [3, "೩",], [4, "೪",],
            [5, "೫",], [6, "೬",], [7, "೭",], [8, "೮",], [9, "೯",],
        ],),
    },
    Mlym: {
        vowels: new Map([
            ["a", "അ",], ["ā", "ആ",],
            ["i", "ഇ",], ["ī", "ഈ",],
            ["u", "ഉ",], ["ū", "ഊ",],
            ["e", "എ",], ["ē", "ഏ",], ["ai", "ഐ",],
            ["o", "ഒ",], ["ō", "ഓ",], ["au", "ഔ",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "ാ",],
            ["i", "ി",], ["ī", "ീ",],
            ["u", "ു",], ["ū", "ൂ",],
            ["e", "െ",], ["ē", "േ",], ["ai", "ൈ",],
            ["o", "ൊ",], ["ō", "ോ",], ["au", "ൌ",],
            ["", "്",],
        ],),
        misc: new Map([
            [",", ",",], ["“", "“",], ["”", "”",], ["!", "!",], ["?", "?",], [".", ".",], ["↩", "↩",],
        ],),
        modifiers: new Map([
            ["ḵ", "ഃ",],
        ],),
        accentMarks: new Map([],),
        consonants: new Map([
            ["k", "ക",], ["ṅ", "ങ",],
            ["c", "ച",], ["ñ", "ഞ",],
            ["ṭ", "ട",], ["ṇ", "ണ",],
            ["ṯ", "റ",], ["ṉ", "ഩ",],
            ["t", "ത",], ["n", "ന",],
            ["p", "പ",], ["m", "മ",],
            ["y", "യ",], ["r", "ര",],
            ["ḻ", "ല",], ["v", "വ",],
            ["ṛ", "ഴ",], ["ḷ", "ള",],
        ],),
        numbers: new Map([
            [0, "൦",],
            [1, "൧",], [2, "൨",], [3, "൩",], [4, "൪",], [5, "൫",], [6, "൬",], [7, "൭",], [8, "൮",], [9, "൯",],
            [10, "൰",], [100, "൱",], [1000, "൲",],
        ],),
    },
    Telu: {
        vowels: new Map([
            ["a", "అ",], ["ā", "ఆ",],
            ["i", "ఇ",], ["ī", "ఈ",],
            ["u", "ఉ",], ["ū", "ఊ",],
            ["e", "ఎ",], ["ē", "ఏ",], ["ai", "ఐ",],
            ["o", "ఒ",], ["ō", "ఓ",], ["au", "ఔ",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "ా",],
            ["i", "ి",], ["ī", "ీ",],
            ["u", "ు",], ["ū", "ూ",],
            ["e", "ె",], ["ē", "ే",], ["ai", "ై",],
            ["o", "ొ",], ["ō", "ో",], ["au", "ౌ",],
            ["", "్",],
        ],),
        misc: new Map([
            [",", ",",], ["“", "“",], ["”", "”",], ["!", "!",], ["?", "?",], [".", ".",], ["↩", "↩",],
        ],),
        modifiers: new Map([
            ["ḵ", "ః",],
        ],),
        accentMarks: new Map([],),
        consonants: new Map([
            ["k", "క",], ["ṅ", "ఙ",],
            ["c", "చ",], ["ñ", "ఞ",],
            ["ṭ", "ట",], ["ṇ", "ణ",],
            ["ṯ", "ఱ",], ["ṉ", "఩",],
            ["t", "త",], ["n", "న",],
            ["p", "ప",], ["m", "మ",],
            ["y", "య",], ["r", "ర",],
            ["ḻ", "ల",], ["v", "వ",],
            ["ṛ", "ఴ",], ["ḷ", "ళ",],
        ],),
        numbers: new Map([
            [0, "౦",], [1, "౧",], [2, "౨",], [3, "౩",], [4, "౪",],
            [5, "౫",], [6, "౬",], [7, "౭",], [8, "౮",], [9, "౯",],
        ],),
    },
    Deva: {
        vowels: new Map([
            ["a", "अ",], ["ā", "आ",],
            ["i", "इ",], ["ī", "ई",],
            ["u", "उ",], ["ū", "ऊ",],
            ["r̥", "ऋ",], ["r̥̄", "ॠ",],
            ["l̥", "ऌ",], ["l̥̄", "ॡ",],
            ["ē", "ए",], ["ai", "ऐ",],
            ["ō", "ओ",], ["au", "औ",],
            ["Ω", "ॐ",],
        ],),
        vowelMarks: new Map([
            ["a", "",], ["ā", "ा",],
            ["i", "ि",], ["ī", "ी",],
            ["u", "ु",], ["ū", "ू",],
            ["r̥", "ृ",], ["r̥̄", "ॄ",],
            ["l̥", "ॢ",], ["l̥̄", "ॣ",],
            ["ē", "े",], ["ai", "ै",],
            ["ō", "ो",], ["au", "ौ",],
            ["", "्",],
        ],),
        misc: new Map([
            ["₨", "₹",], ["।", "।",], ["॥", "॥",],
            ["↩", "↩",], ["…", "३",],
        ],),
        modifiers: new Map([
            ["m̐", "ँ",], ["ṁ", "ं",], ["ḥ", "ः",],
            ["ẖ", "ᳵ",], ["ḫ", "ᳶ",],
        ],),
        accentMarks: new Map([
            ["", "॒",], ["́", "",], ["̀", "॑",], ["̏", "᳚",],
        ],),
        consonants: new Map([
            ["k", "क",], ["kh", "ख",], ["g", "ग",], ["gh", "घ",], ["ṅ", "ङ",],
            ["c", "च",], ["ch", "छ",], ["j", "ज",], ["jh", "झ",], ["ñ", "ञ",],
            ["ṭ", "ट",], ["ṭh", "ठ",], ["ḍ", "ड",], ["ḍh", "ढ",], ["ṇ", "ण",],
            ["t", "त",], ["th", "थ",], ["d", "द",], ["dh", "ध",], ["n", "न",],
            ["p", "प",], ["ph", "फ",], ["b", "ब",], ["bh", "भ",], ["m", "म",],
            ["y", "य",], ["r", "र",], ["l", "ल",], ["v", "व",], ["ḷ", "ळ",],
            ["ś", "श",], ["ṣ", "ष",], ["s", "स",], ["h", "ह",],
        ],),
        numbers: new Map([
            [0, "०",], [1, "१",], [2, "२",], [3, "३",], [4, "४",],
            [5, "५",], [6, "६",], [7, "७",], [8, "८",], [9, "९",],
        ],),
    },
};

const scriptNames = Object.keys(scriptsData,);
const thousandBasedNumberScripts = ["Taml", "Gran", "Mlym",]; // Mlym, Taml and Gran don’t use a strict place‐value system.

// Create a brahmicToLatin reverse‐map Javascript object from the other maps.
scriptNames.forEach(script => {
    const scriptData = scriptsData[script];
    const revArray = Array.from(
        [...scriptData.vowels, ...scriptData.vowelMarks, ...scriptData.consonants, ...scriptData.misc, ...scriptData.numbers, ...scriptData.modifiers, ...scriptData.accentMarks,],
        a => a.reverse(),);
    scriptData.brahmicToLatin = Object.fromEntries(revArray,);
},);

scriptNames.push("Latn",);

const inherentVowel = "a";
const diphthongConsequents = ["i", "u",];
const plosiveConsonants = ["k", "g", "c", "j", "ṭ", "ḍ", "ṯ", "ḏ", "t", "d", "p", "b",];
const aspirateConsonant = "h";
const plutaMark = "…";
const udattaMark = "́";
const separator = ":";
const disjunctor = "|";
const whitespace = "\\s";

const regex = s => new RegExp(s, "gv",);

// Regex pattern that matches any of the elements of the passed‐in array.
const anyOfArray = arr => `[${arr.join("",)}]`;

// Regex pattern that matches any of the elements obtainable from the passed‐in iterable.
const anyOfIterable = it => anyOfArray(Array.from(it,),);

const brahmicToLatin = (otherScript, sourceText, options,) => {
    const scriptData = scriptsData[otherScript];

    // Validate no foreign characters
    (() => {
        const scriptCharacters = [
            ...scriptData.misc.values(),
            ...scriptData.numbers.values(),
            ...scriptData.modifiers.values(),
            ...scriptData.vowelMarks.values(),
            ...scriptData.vowels.values(),
            ...scriptData.consonants.values(),
            ...whitespace,
        ].concat(
            ...options?.vedicAccents ? scriptData.accentMarks.values() : [],
        );

        // Should not use ‘g’ for this regex alone.
        // Seems to result in some sort of combinatorial explosion.
        const invalidRegex = new RegExp(`[^${scriptCharacters.join("",)}]`, "v",);
        const result = sourceText.match(invalidRegex,);
        if (result) {
            throw new Error(`Unknown ${otherScript} character: ${result[0]}.`,);
        }
    })();

    const brahmicToLatinData = scriptData.brahmicToLatin;

    // Misc.
    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.misc.values(),),),
        match => brahmicToLatinData[match],
    );

    // Numbers
    if (thousandBasedNumberScripts.includes(otherScript,)) {
        const southDravidianNumbers = sourceNumber => {
            const thousand = scriptData.numbers.get(1000,);
            const hundred = scriptData.numbers.get(100,);
            const ten = scriptData.numbers.get(10,);
            const one = scriptData.numbers.get(1,);

            // A digit has Unicode category “Nd”, while the symbols for ten, hundred and thousand have Unicode category “No”.
            const digits = Array.from(scriptData.numbers.values(),).filter(x => regex("\\p{Nd}",).test(x,),);

            // Let’s divide up the number into groups of thousands.
            const otherNumbers = Array.from(scriptData.numbers.values(),).filter(x => x !== thousand,);

            // Each group is an optional sub‐thousand number, following by an optional power (expressed in thousands).
            // But while both the constituents are optional, one of them has to exist, hence a positive lookahead.
            const groupRegex = regex(`(?=.)${anyOfArray(otherNumbers,)}*${thousand}*`,);

            return sourceNumber.match(groupRegex,).reduce((ator, group,) => {
                // Process each group.
                const thousands = group.match(regex(`${thousand}*$`,),)[0].length;

                // Invalid input if the thousands groups aren't strictly decreasing in thousands‐power.
                if (thousands >= ator.minThousands) {
                    throw new Error(`Invalid number: ${sourceNumber}.`,);
                }

                // Strip off the thousand symbols.
                group = group.slice(0, group.length - thousands,);

                const anyDigit = anyOfArray(digits,);
                const subThousandNumberRegex = regex(
                    // Hundreds
                    `^(?:(${anyDigit}?)(${hundred}))?` +
                    // Tens
                    `(?:(${anyDigit})?(${ten}))?` +
                    // Units
                    `(${anyDigit}?)$`,
                );

                const components = subThousandNumberRegex.exec(group,);

                if (! components) {
                    // Malformed data, e.g. "௩௪".
                    throw new Error(`Invalid number: ${sourceNumber}.`,);
                }

                if (components[1] === one || components[3] === one) {
                    // The hundreds and tens places in each thousand‐group cannot have an explicit 1.
                    throw new Error(`Invalid number: ${sourceNumber}.`,);
                }

                return {
                    total: ator.total + 1000 ** thousands *
                    (components[0] ?
                            (components[5] ? scriptData.brahmicToLatin[components[5]] : 0) + // Add in any units.
                            (components[4] ? // If there is a tens symbol, …
                                // … add in the tens, treating a missing digit prefix as an implicit 1.
                                10 * (components[3] ? scriptData.brahmicToLatin[components[3]] : 1)
                                : 0) +
                                (components[2] ? // If there is a hundreds symbol, …
                                    // … add in the hundreds, treating a missing digit prefix as 1.
                                    100 * (components[1] ? scriptData.brahmicToLatin[components[1]] : 1)
                                    : 0)
                        : 1), // Nothing in front of the thousand symbols is just the value of the power.
                    minThousands: thousands,
                };
            },
            { total: 0, minThousands: Infinity, },
            ).total;
        };

        sourceText = sourceText.replace(
            regex(`${anyOfIterable(scriptData.numbers.values(),)}+`,),
            match => southDravidianNumbers(match, scriptData,),
        );
    } else {
        sourceText = sourceText.replace(
            regex(anyOfIterable(scriptData.numbers.values(),),),
            match => brahmicToLatinData[match],
        );
    }

    const lettersAndModifiers = [
        ...scriptData.vowels.values(),
        ...scriptData.vowelMarks.values().filter(x => x !== "",),
        ...scriptData.modifiers.values(),
        ...scriptData.consonants.values(),
    ];

    // Pluta‐marker
    if (otherScript === "Deva") {
        sourceText = sourceText.replace(
            regex(`(${lettersAndModifiers.join(disjunctor,)})3`,),
            (_unused, p1,) => p1 + plutaMark,
        );
    }

    // Consonant separator insertion
    sourceText = sourceText.replace(
        regex(`(${anyOfIterable(scriptData.consonants.values(),)})(${scriptData.vowelMarks.get("",)})(${scriptData.consonants.get(aspirateConsonant,)})`,),
        (match, p1, p2, p3,) => {
            if (! plosiveConsonants.includes(scriptData.brahmicToLatin[p1],)) {
                return match;
            }
            return p1 + p2 + separator + p3;
        },
    );

    if (! options?.vedicAccents) {
        // Vowel separator insertion
        sourceText = sourceText.replace(
            regex(`(${anyOfIterable(scriptData.consonants.values(),)}${disjunctor}${scriptData.vowels.get(inherentVowel,)})(${anyOfArray(diphthongConsequents.map(i => scriptData.vowels.get(i,),),)})`,),
            (_unused, p1, p2,) => p1 + separator + p2,
        );
    } else {
        // Vowel separator insertion
        sourceText = sourceText.replace(
            regex(`(${anyOfIterable(scriptData.consonants.values(),)}${disjunctor}${scriptData.vowels.get(inherentVowel,)})(\\p{Mn}?)(${anyOfArray(diphthongConsequents.map(i => scriptData.vowels.get(i,),),)})`,),
            (_unused, p1, p2, p3,) => p1 + p2 + separator + p3,
        );

        // For the udatta accent, unmarked in Brahmic, we need a two‐pass approach. First, we need to add udatta accent‐marks after each consonant with the inherent‐vowel, unless succeeded by a different accent‐mark.
        const marks = Array.from(scriptData.accentMarks.values().filter(x => x !== "",),).concat(Array.from(scriptData.vowelMarks.values().filter(x => x !== "",),),).join("",);
        sourceText = sourceText.replace(
            regex(`(${anyOfIterable(scriptData.consonants.values(),)})($|[^${marks}])`,),
            (_unused, p1, p2,) => p1 + udattaMark + p2,
        );

        // We then need to add udatta accent‐marks after each letter, be it a vowel, a vowel‐marker (other than the vowel‐suppressor) or even a consonant with the inherent‐vowel, again unless succeeded by a different accent‐mark. Why we need to repeat this replacement for consonants with the inherent‐vowel is that some of those consonants could have been captured as the post‐context in the previous replacement, and thus escaped being processed as the pre-context.
        const letters = [
            ...scriptData.vowels.values(),
            ...scriptData.vowelMarks.values().filter(x => x !== "",).filter(x => scriptData.brahmicToLatin[x] !== "",),
            ...scriptData.consonants.values(),
        ];
        sourceText = sourceText.replace(
            regex(`(${anyOfArray(letters,)})($|[^${udattaMark}${marks}])`,),
            (_unused, p1, p2,) => p1 + udattaMark + p2,
        );

        // Other accents
        const accentMarks = Array.from(scriptData.accentMarks.values().filter(x => x !== "",),).join(disjunctor,);
        sourceText = sourceText.replace(
            regex(`(${anyOfArray(lettersAndModifiers,)})(${accentMarks})`,),
            (_unused, p1, p2,) => p1 + scriptData.brahmicToLatin[p2],
        );
    }

    // Consonant–vowel‐marker pairs
    sourceText = sourceText.replace(
        regex(`(${anyOfIterable(scriptData.consonants.values(),)})(${anyOfIterable(scriptData.vowelMarks.values(),)})`,),
        (_unused, p1, p2,) => brahmicToLatinData[p1] + brahmicToLatinData[p2],
    );

    // Consonants without vowel‐markers
    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.consonants.values(),),),
        match => brahmicToLatinData[match] + inherentVowel,
    );

    // Modifiers
    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.modifiers.values(),),),
        match => brahmicToLatinData[match],
    );

    // Visarga alternate for Grantha
    if (otherScript === "Gran") {
        sourceText = sourceText.replace(
            regex(`h([̱̮])(.)`,),
            (match, p1, p2,) => {
                if (p2 === "k") {
                    return "ẖk";
                }
                if (p2 === "p") {
                    return "ḫp";
                }
                throw new Error(`Unknown ${otherScript} character combination: ${match}.`,);
            },
        );
    }

    // Vowels
    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.vowels.values(),),),
        match => brahmicToLatinData[match],
    );

    return sourceText;
};

const latinToBrahmic = (otherScript, sourceText, options,) => {
    const scriptData = scriptsData[otherScript];

    // Validate no foreign characters
    (() => {
        const scriptCharacters = [
            ...scriptData.numbers.keys(),
            ...scriptData.misc.keys(),
            ...scriptData.modifiers.keys(),
            ...scriptData.vowelMarks.keys(),
            ...scriptData.vowels.keys(),
            ...scriptData.consonants.keys(),
            separator,
            ...whitespace,
        ].concat(
            ...options?.vedicAccents ? scriptData.accentMarks.keys() : [],
        );

        // Should not use ‘g’ for this regex alone.
        // Seems to result in some sort of combinatorial explosion.
        const invalidRegex = new RegExp(`[^${scriptCharacters.join("",)}]`, "v",);
        const result = sourceText.match(invalidRegex,);
        if (result) {
            throw new Error(`Unknown ${otherScript} character: ${result[0]}.`,);
        }
    })();

    if (thousandBasedNumberScripts.includes(otherScript,)) {
        const southDravidianNumbers = sourceNumber => {
            // Zero is special, and is in fact not allowed in the traditional system.
            // But modern usage demands it.
            if (sourceNumber === 0) {
                return scriptData.numbers.get(sourceNumber,);
            }

            let xlittedText = "";

            // Let’s process each group of 3 digits at a time.
            for (let mille = 0; sourceNumber > 0; ++mille) {
                const rem = sourceNumber % 1000;
                sourceNumber = Math.floor(sourceNumber / 1000,);

                // Nothing in this group.
                if (rem === 0) {
                    continue;
                }

                // We need mille‐many thousand‐symbols.
                xlittedText = scriptData.numbers.get(1000,).repeat(mille,) + xlittedText;

                if (rem === 1 && mille > 0) {
                    // 1 is implicit, except for the least significant group.
                    continue;
                }

                xlittedText = [1, 10, 100,].reduce((ator, place,) => {
                    // Extract the digit at ‘place’.
                    const digit = Math.floor(rem / place,) % 10;

                    if (digit === 0) {
                        // Zeroes are not explicitly written.
                        return ator;
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
                    if (place !== 1) {
                        ator = scriptData.numbers.get(place,) + ator;
                        if (digit === 1) {
                            return ator;
                        }
                    }

                    return scriptData.numbers.get(digit,) + ator;
                }, "",) + xlittedText;
            }

            return xlittedText;
        };

        sourceText = sourceText.replace(
            regex(`${anyOfIterable(Array(10,).keys(),)}+`,),
            match => southDravidianNumbers(parseInt(match, 10,), scriptData,),);
    } else {
        sourceText = sourceText.replace(
            regex(anyOfIterable(Array(10,).keys(),),),
            match => scriptData.numbers.get(parseInt(match, 10,),),);
    }

    sourceText = sourceText.replace(
        regex(anyOfIterable(scriptData.misc.keys(),),),
        match => scriptData.misc.get(match,),);

    // Handle modifiers separately first to get them out of the way.
    const modifiers = Array.from(scriptData.modifiers.keys(),).join(disjunctor,);
    sourceText = sourceText.replace(
        regex(modifiers,),
        match => scriptData.modifiers.get(match,),);

    const diphthongsAndConstituents = diphthongConsequents.flatMap(s => inherentVowel + s,).concat(diphthongConsequents,).concat(new Array(inherentVowel,),);

    if (! options?.vedicAccents) {
        // Handle separated vowels like ‘a:i’
        sourceText = sourceText.replace(
            regex(`${inherentVowel}${separator}(${anyOfArray(diphthongConsequents,)})`,),
            (_unused, p1,) => inherentVowel + scriptData.vowels.get(p1,),);
    } else {
        const vowels = Array.from(scriptData.vowels.keys(),).sort().reverse().join(disjunctor,);
        const accentMarks = Array.from(scriptData.accentMarks.keys(),).sort().reverse().join(disjunctor,);

        // Handle Vedic accent marks
        sourceText = sourceText.replace(
            regex(`(${vowels})(${accentMarks})`,),
            (_unused, p1, p2,) => p1 + scriptData.accentMarks.get(p2,),);

        // Handle separated vowels like ‘a:i’
        sourceText = sourceText.replace(
            regex(`${inherentVowel}(\\p{Mn}?)${separator}(${anyOfArray(diphthongConsequents,)})`,),
            (_unused, p1, p2,) => inherentVowel + p1 + scriptData.vowels.get(p2,),);
    }

    // Handle separated consonants like ‘b:h’
    sourceText = sourceText.replace(
        regex(`(${anyOfArray(plosiveConsonants,)})${separator}`,),
        (_unused, p1,) => scriptData.consonants.get(p1,) + scriptData.vowelMarks.get("",),);

    // We need to first sweep through and xlit all diphthong non‐consequents.
    // Otherwise “aū” will be xlitted as a diphthong followed by a macron.
    const vowels1 = Array.from(scriptData.vowels.keys(),).filter(x => ! diphthongsAndConstituents.includes(x,),)
        .sort().reverse().join(disjunctor,);

    // Sort + reverse ensures greediness, i.e. ṅ is thought of as one unit and the n isn’t xlitted separately.
    const consonants = Array.from(scriptData.consonants.keys(),).sort().reverse().join(disjunctor,);
    sourceText = sourceText.replace(
        regex(`(${consonants})(${vowels1})`,),
        (_unused, p1, p2,) => scriptData.consonants.get(p1,) + scriptData.vowelMarks.get(p2,),);
    sourceText = sourceText.replace(regex(vowels1,), match => scriptData.vowels.get(match,),);

    // Diphthongs and their constituents are in phase 2.
    const vowels2 = diphthongsAndConstituents.sort().reverse().join(disjunctor,);
    sourceText = sourceText.replace(
        regex(`(${consonants})(${vowels2})`,),
        (_unused, p1, p2,) => scriptData.consonants.get(p1,) + scriptData.vowelMarks.get(p2,),);
    sourceText = sourceText.replace(regex(vowels2,), match => scriptData.vowels.get(match,),);

    // Remaining bare consonants.
    sourceText = sourceText.replace(
        regex(consonants,),
        match => scriptData.consonants.get(match,) + scriptData.vowelMarks.get("",),);

    return sourceText;
};

const transliterate = (srcScript, tgtScript, sourceText, options,) => {
    if (! scriptNames.includes(srcScript,)) {
        throw new Error(`Unsupported or invalid source script: ${srcScript}.`,);
    }
    if (! scriptNames.includes(tgtScript,)) {
        throw new Error(`Unsupported or invalid target script: ${tgtScript}.`,);
    }

    if (srcScript === tgtScript) {
        if (tgtScript === "Latn") {
            return sourceText.normalize("NFD",);
        }

        // Validate no foreign characters
        const scriptData = scriptsData[tgtScript];
        (() => {
            const scriptCharacters = [
                ...scriptData.misc.values(),
                ...scriptData.numbers.values(),
                ...scriptData.modifiers.values(),
                ...scriptData.vowelMarks.values(),
                ...scriptData.vowels.values(),
                ...scriptData.consonants.values(),
                ...whitespace,
            ].concat(
                ...options?.vedicAccents ? scriptData.accentMarks.values() : [],
            );

            // Should not use ‘g’ for this regex alone.
            // Seems to result in some sort of combinatorial explosion.
            const invalidRegex = new RegExp(`[^${scriptCharacters.join("",)}]`, "v",);
            const result = sourceText.match(invalidRegex,);
            if (result) {
                throw new Error(`Unknown ${tgtScript} character: ${result[0]}.`,);
            }
        })();

        return sourceText.normalize("NFC",);
    }

    if (tgtScript === "Latn") {
        return brahmicToLatin(
            srcScript,
            sourceText.normalize("NFC",),
            options,
        ).normalize("NFD",);
    }

    if (srcScript === "Latn") {
        return latinToBrahmic(
            tgtScript,
            sourceText.normalize("NFD",),
            options,
        ).normalize("NFC",);
    }

    // Transliterate from one Brahmic script to another through Latin.
    return latinToBrahmic(
        tgtScript,
        brahmicToLatin(
            srcScript,
            sourceText.normalize("NFC",),
            options,
        ).normalize("NFD",),
        options,
    ).normalize("NFC",);
};

export { transliterate, };
