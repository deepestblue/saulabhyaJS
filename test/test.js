import { transliterate, } from "../src/saulabhya.js";

QUnit.config.maxDepth = -1;
QUnit.config.noglobals = true;

QUnit.module("Tam", () => {
    QUnit.module("characters", () => {
        const scripts = ["Taml", "Telu", "Knda", "Mlym",];
        const data = {
            Taml: [
                "அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ ஃ",
                "க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ",
                "க் ங் ச் ஞ் ட் ண் ற் ன் த் ந் ப் ம் ய் ர் ல் வ் ழ் ள்",
                "க ங ச ஞ ட ண ற ன த ந ப ம ய ர ல வ ழ ள",
                "அஅக்க்",
                "க்க",
                "லஅ",
                "ஙஞ்டோ",
                "அஊ",
                "இஓஐஅஓனிறீனௌளஈஅ",
                "க்\u200cக க்\u200dக க\u200cக க\u200dக க\u200cஇ க\u200dஇ",
                "க௧",
                "௨ங",
                "௦",
                "௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯",
                "௰ ௱",
                "௱௰௧ ௱௪௰௧ ௨௱௰௩ ௯௱௭௰௧ ௯௱௮௰௫",
                "௲",
                "௨௲௰௩",
                "௰௲",
                "௰௧௲",
                "௨௰௲௩",
                "௲௲",
                "௰௲௲",
                "௰௧௲௲௱௰௧௲௱௰௧",
                "௨௰௲௲௰௩",
                "௨௰௩௲௲௬௱௫௰௲௫௱௬௰௬",
                "௱௨௰௩௲௲௲௪௱௫௰௬௲௲௭௱௮௰௯௲௨௱௩௰௪",
            ],
            Telu: [
                "అ ఆ ఇ ఈ ఉ ఊ ఎ ఏ ఐ ఒ ఓ ఔ ః",
                "క కా కి కీ కు కూ కె కే కై కొ కో కౌ",
                "క్ ఙ్ చ్ ఞ్ ట్ ణ్ ఱ్ ఩్ త్ న్ ప్ మ్ య్ ర్ ల్ వ్ ఴ్ ళ్",
                "క ఙ చ ఞ ట ణ ఱ ఩ త న ప మ య ర ల వ ఴ ళ",
                "అఅక్క్",
                "క్క",
                "లఅ",
                "ఙఞ్టో",
                "అఊ",
                "ఇఓఐఅఓ఩ిఱీ఩ౌళఈఅ",
                "క్\u200cక క్\u200dక క\u200cక క\u200dక క\u200cఇ క\u200dఇ",
                "క౧",
                "౨ఙ",
                "౦",
                "౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯",
                "౧౦ ౧౦౦",
                "౧౧౧ ౧౪౧ ౨౧౩ ౯౭౧ ౯౮౫",
                "౧౦౦౦",
                "౨౦౧౩",
                "౧౦౦౦౦",
                "౧౧౦౦౦",
                "౨౦౦౦౩",
                "౧౦౦౦౦౦౦",
                "౧౦౦౦౦౦౦౦",
                "౧౧౧౧౧౧౧౧",
                "౨౦౦౦౦౦౧౩",
                "౨౩౬౫౦౫౬౬",
                "౧౨౩౪౫౬౭౮౯౨౩౪",
            ],
            Knda: [
                "ಅ ಆ ಇ ಈ ಉ ಊ ಎ ಏ ಐ ಒ ಓ ಔ ಃ",
                "ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೆ ಕೇ ಕೈ ಕೊ ಕೋ ಕೌ",
                "ಕ್ ಙ್ ಚ್ ಞ್ ಟ್ ಣ್ ಱ್ ಩್ ತ್ ನ್ ಪ್ ಮ್ ಯ್ ರ್ ಲ್ ವ್ ೞ್ ಳ್",
                "ಕ ಙ ಚ ಞ ಟ ಣ ಱ ಩ ತ ನ ಪ ಮ ಯ ರ ಲ ವ ೞ ಳ",
                "ಅಅಕ್ಕ್",
                "ಕ್ಕ",
                "ಲಅ",
                "ಙಞ್ಟೋ",
                "ಅಊ",
                "ಇಓಐಅಓ಩ಿಱೀ಩ೌಳಈಅ",
                "ಕ್\u200cಕ ಕ್\u200dಕ ಕ\u200cಕ ಕ\u200dಕ ಕ\u200cಇ ಕ\u200dಇ",
                "ಕ೧",
                "೨ಙ",
                "೦",
                "೧ ೨ ೩ ೪ ೫ ೬ ೭ ೮ ೯",
                "೧೦ ೧೦೦",
                "೧೧೧ ೧೪೧ ೨೧೩ ೯೭೧ ೯೮೫",
                "೧೦೦೦",
                "೨೦೧೩",
                "೧೦೦೦೦",
                "೧೧೦೦೦",
                "೨೦೦೦೩",
                "೧೦೦೦೦೦೦",
                "೧೦೦೦೦೦೦೦",
                "೧೧೧೧೧೧೧೧",
                "೨೦೦೦೦೦೧೩",
                "೨೩೬೫೦೫೬೬",
                "೧೨೩೪೫೬೭೮೯೨೩೪",
            ],
            Mlym: [
                "അ ആ ഇ ഈ ഉ ഊ എ ഏ ഐ ഒ ഓ ഔ ഃ",
                "ക കാ കി കീ കു കൂ കെ കേ കൈ കൊ കോ കൌ",
                "ക് ങ് ച് ഞ് ട് ണ് റ് ഩ് ത് ന് പ് മ് യ് ര് ല് വ് ഴ് ള്",
                "ക ങ ച ഞ ട ണ റ ഩ ത ന പ മ യ ര ല വ ഴ ള",
                "അഅക്ക്",
                "ക്ക",
                "ലഅ",
                "ങഞ്ടോ",
                "അഊ",
                "ഇഓഐഅഓഩിറീഩൌളഈഅ",
                "ക്\u200cക ക്\u200dക ക\u200cക ക\u200dക ക\u200cഇ ക\u200dഇ",
                "ക൧",
                "൨ങ",
                "൦",
                "൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯",
                "൰ ൱",
                "൱൰൧ ൱൪൰൧ ൨൱൰൩ ൯൱൭൰൧ ൯൱൮൰൫",
                "൲",
                "൨൲൰൩",
                "൰൲",
                "൰൧൲",
                "൨൰൲൩",
                "൲൲",
                "൰൲൲",
                "൰൧൲൲൱൰൧൲൱൰൧",
                "൨൰൲൲൰൩",
                "൨൰൩൲൲൬൱൫൰൲൫൱൬൰൬",
                "൱൨൰൩൲൲൲൪൱൫൰൬൲൲൭൱൮൰൯൲൨൱൩൰൪",
            ],
            LatnISO15919: [
                "a ā i ī u ū e ē ai o ō au ḵ",
                "ka kā ki kī ku kū ke kē kai ko kō kau",
                "k ṅ c ñ ṭ ṇ ṟ ṉ t n p m y r l v ḻ ḷ",
                "ka ṅa ca ña ṭa ṇa ṟa ṉa ta na pa ma ya ra la va ḻa ḷa",
                "aakk",
                "kka",
                "laa",
                "ṅañṭō",
                "aū",
                "iōaiaōṉiṟīṉauḷaīa",
                "k\u200cka k\u200dka ka\u200cka ka\u200dka ka\u200ci ka\u200di",
                "ka1",
                "2ṅa",
                "0",
                "1 2 3 4 5 6 7 8 9",
                "10 100",
                "111 141 213 971 985",
                "1000",
                "2013",
                "10000",
                "11000",
                "20003",
                "1000000",
                "10000000",
                "11111111",
                "20000013",
                "23650566",
                "123456789234",
            ],
            LatnISO15919Modified: [
                "a ā i ī u ū e ē ai o ō au ḵ",
                "ka kā ki kī ku kū ke kē kai ko kō kau",
                "k ṅ c ñ ṭ ṇ ṯ ṉ t n p m y r ḻ v ṛ ḷ",
                "ka ṅa ca ña ṭa ṇa ṯa ṉa ta na pa ma ya ra ḻa va ṛa ḷa",
                "aakk",
                "kka",
                "ḻaa",
                "ṅañṭō",
                "aū",
                "iōaiaōṉiṯīṉauḷaīa",
                "k\u200cka k\u200dka ka\u200cka ka\u200dka ka\u200ci ka\u200di",
                "ka1",
                "2ṅa",
                "0",
                "1 2 3 4 5 6 7 8 9",
                "10 100",
                "111 141 213 971 985",
                "1000",
                "2013",
                "10000",
                "11000",
                "20003",
                "1000000",
                "10000000",
                "11111111",
                "20000013",
                "23650566",
                "123456789234",
            ],
            LatnISO15919NoDiphthongs: [
                "a ā i ī u ū e ē ai o ō au ḵ",
                "ka kā ki kī ku kū ke kē kai ko kō kau",
                "k ṅ c ñ ṭ ṇ ṟ ṉ t n p m y r l v ḻ ḷ",
                "ka ṅa ca ña ṭa ṇa ṟa ṉa ta na pa ma ya ra la va ḻa ḷa",
                "aakk",
                "kka",
                "laa",
                "ṅañṭō",
                "aū",
                "iōaiaōṉiṟīṉauḷaīa",
                "k\u200cka k\u200dka ka\u200cka ka\u200dka ka\u200ci ka\u200di",
                "ka1",
                "2ṅa",
                "0",
                "1 2 3 4 5 6 7 8 9",
                "10 100",
                "111 141 213 971 985",
                "1000",
                "2013",
                "10000",
                "11000",
                "20003",
                "1000000",
                "10000000",
                "11111111",
                "20000013",
                "23650566",
                "123456789234",
            ],
        };
        scripts.forEach(script => {
            QUnit.module(`${script} → LatnISO15919`, () => {
                [...Array(data[script].length,).keys(),].forEach(i => {
                    QUnit.test(data[script][i], t => {
                        t.deepEqual(
                            transliterate(script, "Latn", data[script][i],),
                            data.LatnISO15919[i],);
                    },);
                },);
            },);
            QUnit.module(`LatnISO15919 → ${script}`, () => {
                [...Array(data.LatnISO15919.length,).keys(),].forEach(i => {
                    QUnit.test(data.LatnISO15919[i], t => {
                        t.deepEqual(
                            transliterate("Latn", script, data.LatnISO15919[i],),
                            data[script][i],);
                    },);
                },);
            },);
            QUnit.module(`${script} → LatnISO15919Modified`, () => {
                [...Array(data[script].length,).keys(),].forEach(i => {
                    QUnit.test(data[script][i], t => {
                        t.deepEqual(
                            transliterate(script, "Latn", data[script][i], { modifiedISO15919ForTam: true, },),
                            data.LatnISO15919Modified[i],);
                    },);
                },);
            },);
            QUnit.module(`LatnISO15919Modified → ${script}`, () => {
                [...Array(data.LatnISO15919Modified.length,).keys(),].forEach(i => {
                    QUnit.test(data.LatnISO15919Modified[i], t => {
                        t.deepEqual(
                            transliterate("Latn", script, data.LatnISO15919Modified[i], { modifiedISO15919ForTam: true, },),
                            data[script][i],);
                    },);
                },);
            },);
            const noDiphthongIndices = data.LatnISO15919NoDiphthongs
                .map((latnText, i,) => ({ latnText, i, }),)
                .filter(({ latnText, },) => ! latnText.includes("ai",) && ! latnText.includes("au",),)
                .map(({ i, },) => i,);
            QUnit.module(`${script} → LatnISO15919NoDiphthongs`, () => {
                noDiphthongIndices.forEach(i => {
                    QUnit.test(data[script][i], t => {
                        t.deepEqual(
                            transliterate(script, "Latn", data[script][i], { enableDiphthongsInTamil: false, },),
                            data.LatnISO15919NoDiphthongs[i],);
                    },);
                },);
            },);
            QUnit.module(`LatnISO15919NoDiphthongs → ${script}`, () => {
                noDiphthongIndices.forEach(i => {
                    QUnit.test(data.LatnISO15919NoDiphthongs[i], t => {
                        t.deepEqual(
                            transliterate("Latn", script, data.LatnISO15919NoDiphthongs[i], { enableDiphthongsInTamil: false, },),
                            data[script][i],);
                    },);
                },);
            },);
            const hiatusWithoutDiphthongs = {
                Taml: [
                    ["அஇ", "ai",],
                    ["கஇ", "kai",],
                    ["அஉ", "au",],
                    ["கஉ", "kau",],
                ],
                Telu: [
                    ["అఇ", "ai",],
                    ["కఇ", "kai",],
                    ["అఉ", "au",],
                    ["కఉ", "kau",],
                ],
                Knda: [
                    ["ಅಇ", "ai",],
                    ["ಕಇ", "kai",],
                    ["ಅಉ", "au",],
                    ["ಕಉ", "kau",],
                ],
                Mlym: [
                    ["അഇ", "ai",],
                    ["കഇ", "kai",],
                    ["അഉ", "au",],
                    ["കഉ", "kau",],
                ],
            };
            QUnit.module(`${script} → LatnISO15919NoDiphthongs hiatus`, () => {
                hiatusWithoutDiphthongs[script].forEach(([brahmic, latn,],) => {
                    QUnit.test(brahmic, t => {
                        t.deepEqual(
                            transliterate(script, "Latn", brahmic, { enableDiphthongsInTamil: false, },),
                            latn,);
                    },);
                },);
            },);
            QUnit.module(`LatnISO15919NoDiphthongs hiatus → ${script}`, () => {
                hiatusWithoutDiphthongs[script].forEach(([brahmic, latn,],) => {
                    QUnit.test(latn, t => {
                        t.deepEqual(
                            transliterate("Latn", script, latn, { enableDiphthongsInTamil: false, },),
                            brahmic,);
                    },);
                },);
            },);
        },);
        QUnit.module("ௐ", () => {
            QUnit.test("Taml → Latn", t => {
                t.deepEqual(
                    transliterate("Taml", "Latn", "ௐ", { omInISO15919: "🕉", },),
                    "🕉",);
            },);
            QUnit.test("Latn → Taml", t => {
                t.deepEqual(
                    transliterate("Latn", "Taml", "🕉", { omInISO15919: "🕉", },),
                    "ௐ",);
            },);
        },);
    },);

    QUnit.module("documents", () => {
        const textWithPunctuationAndSpacing = {
            Taml: `
மனிதப் பிறவியினர் சகலரும் சுதந்திரமாகவே பிறக்கின்றனர். அவர்கள் மதிப்பிலும் உரிமைகளிலும் சமமானவர்கள். அவர்கள் நியாயத்தையும் மனசாட்சியையும் இயற்பண்பாகப் பெற்றவர்கள். அவர்கள் ஒருவருடனொருவர் சகோதர உணர்வுப் பாங்கில் நடந்துகொள்ளல் வேண்டும்.
        `,
            Knda: `
ಮ಩ಿತಪ್ ಪಿಱವಿಯಿ಩ರ್ ಚಕಲರುಮ್ ಚುತನ್ತಿರಮಾಕವೇ ಪಿಱಕ್ಕಿ಩್ಱ಩ರ್. ಅವರ್ಕಳ್ ಮತಿಪ್ಪಿಲುಮ್ ಉರಿಮೈಕಳಿಲುಮ್ ಚಮಮಾ಩ವರ್ಕಳ್. ಅವರ್ಕಳ್ ನಿಯಾಯತ್ತೈಯುಮ್ ಮ಩ಚಾಟ್ಚಿಯೈಯುಮ್ ಇಯಱ್ಪಣ್ಪಾಕಪ್ ಪೆಱ್ಱವರ್ಕಳ್. ಅವರ್ಕಳ್ ಒರುವರುಟ಩ೊರುವರ್ ಚಕೋತರ ಉಣರ್ವುಪ್ ಪಾಙ್ಕಿಲ್ ನಟನ್ತುಕೊಳ್ಳಲ್ ವೇಣ್ಟುಮ್.
        `,
            Telu: `
మ఩ితప్ పిఱవియి఩ర్ చకలరుమ్ చుతన్తిరమాకవే పిఱక్కి఩్ఱ఩ర్. అవర్కళ్ మతిప్పిలుమ్ ఉరిమైకళిలుమ్ చమమా఩వర్కళ్. అవర్కళ్ నియాయత్తైయుమ్ మ఩చాట్చియైయుమ్ ఇయఱ్పణ్పాకప్ పెఱ్ఱవర్కళ్. అవర్కళ్ ఒరువరుట఩ొరువర్ చకోతర ఉణర్వుప్ పాఙ్కిల్ నటన్తుకొళ్ళల్ వేణ్టుమ్.
        `,
            Mlym: `
മഩിതപ് പിറവിയിഩര് ചകലരുമ് ചുതന്തിരമാകവേ പിറക്കിഩ്റഩര്. അവര്കള് മതിപ്പിലുമ് ഉരിമൈകളിലുമ് ചമമാഩവര്കള്. അവര്കള് നിയായത്തൈയുമ് മഩചാട്ചിയൈയുമ് ഇയറ്പണ്പാകപ് പെറ്റവര്കള്. അവര്കള് ഒരുവരുടഩൊരുവര് ചകോതര ഉണര്വുപ് പാങ്കില് നടന്തുകൊള്ളല് വേണ്ടുമ്.
        `,
            LatnISO15919: `
maṉitap piṟaviyiṉar cakalarum cutantiramākavē piṟakkiṉṟaṉar. avarkaḷ matippilum urimaikaḷilum camamāṉavarkaḷ. avarkaḷ niyāyattaiyum maṉacāṭciyaiyum iyaṟpaṇpākap peṟṟavarkaḷ. avarkaḷ oruvaruṭaṉoruvar cakōtara uṇarvup pāṅkil naṭantukoḷḷal vēṇṭum.
        `,
            LatnISO15919Modified: `
maṉitap piṯaviyiṉar cakaḻarum cutantiramākavē piṯakkiṉṯaṉar. avarkaḷ matippiḻum urimaikaḷiḻum camamāṉavarkaḷ. avarkaḷ niyāyattaiyum maṉacāṭciyaiyum iyaṯpaṇpākap peṯṯavarkaḷ. avarkaḷ oruvaruṭaṉoruvar cakōtara uṇarvup pāṅkiḻ naṭantukoḷḷaḻ vēṇṭum.
        `, };
        const textWithoutDiphthongs = {
            Taml: "அஅக்க் ஙஞ்டோ அஊ",
            LatnISO15919NoDiphthongs: "aakk ṅañṭō aū",
        };
        QUnit.test("Taml → LatnISO15919", t => {
            t.deepEqual(
                transliterate("Taml", "Latn", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.LatnISO15919,);
        },);
        QUnit.test("LatnISO15919 → Taml", t => {
            t.deepEqual(
                transliterate("Latn", "Taml", textWithPunctuationAndSpacing.LatnISO15919,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml → Knda", t => {
            t.deepEqual(
                transliterate("Taml", "Knda", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Knda,);
        },);
        QUnit.test("Knda → Taml", t => {
            t.deepEqual(
                transliterate("Knda", "Taml", textWithPunctuationAndSpacing.Knda,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml → Telu", t => {
            t.deepEqual(
                transliterate("Taml", "Telu", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Telu,);
        },);
        QUnit.test("Telu → Taml", t => {
            t.deepEqual(
                transliterate("Telu", "Taml", textWithPunctuationAndSpacing.Telu,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml → Mlym", t => {
            t.deepEqual(
                transliterate("Taml", "Mlym", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Mlym,);
        },);
        QUnit.test("Mlym → Taml", t => {
            t.deepEqual(
                transliterate("Mlym", "Taml", textWithPunctuationAndSpacing.Mlym,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml → LatnISO15919NoDiphthongs", t => {
            t.deepEqual(
                transliterate("Taml", "Latn", textWithoutDiphthongs.Taml, { enableDiphthongsInTamil: false, },),
                textWithoutDiphthongs.LatnISO15919NoDiphthongs,);
        },);
        QUnit.test("LatnISO15919NoDiphthongs → Taml", t => {
            t.deepEqual(
                transliterate("Latn", "Taml", textWithoutDiphthongs.LatnISO15919NoDiphthongs, { enableDiphthongsInTamil: false, },),
                textWithoutDiphthongs.Taml,);
        },);
    },);

    QUnit.module("errors", () => {
        QUnit.test("Taml → Latn", t => {
            const invalidTamTamlText = "இடயினம்: ய் ர் ல் வ் ழ் ள்";
            t.throws(
                () => transliterate("Taml", "Latn", invalidTamTamlText,),
                err => err instanceof Error &&
                    /^Unknown Taml character : in “இடயினம்:”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Taml → Taml", t => {
            const invalidTamTamlText = "இடயினம்: ய் ர் ல் வ் ழ் ள்";
            t.throws(
                () => transliterate("Taml", "Taml", invalidTamTamlText,),
                err => err instanceof Error &&
                    /^Unknown Taml character : in “இடயினம்:”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 1", t => {
            const invalidTamLatnText = "tamiḻ eḻuttu muṟaymay olippiyal aṭippaṭayilāṉatu;";
            t.throws(
                () => transliterate("Latn", "Taml", invalidTamLatnText,),
                err => err instanceof Error &&
                    /^Unknown Latn character ; in “aṭippaṭayilāṉatu;”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 2", t => {
            const invalidTamLatnText = "tamiṛ eṛuttu muṯaymay oḻippiyaḻ aṭippaṭayiḻāṉatu";
            t.throws(
                () => transliterate("Latn", "Taml", invalidTamLatnText,),
                err => err instanceof Error &&
                    /^Unknown Latn character ̣ in “tamiṛ”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 3", t => {
            const invalidTamLatnText = "tamiḻ eḻuttu muṟaymay olippiyal aṭippaṭayilāṉatu";
            t.throws(
                () => transliterate("Latn", "Taml", invalidTamLatnText, { modifiedISO15919ForTam: true, },),
                err => err instanceof Error &&
                    /^Unknown Latn character ̱ in “muṟ”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 4", t => {
            t.throws(
                () => transliterate("Latn", "Taml", "Ω", { omInISO15919: "🕉", },),
                err => err instanceof Error &&
                    /^Unknown Latn character Ω in “Ω”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Taml → Latn 5", t => {
            t.throws(
                () => transliterate("Taml", "Latn", "ஐ", { enableDiphthongsInTamil: false, },),
                err => err instanceof Error &&
                    /^Unknown Taml character ஐ in “ஐ”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Taml → Latn 6", t => {
            t.throws(
                () => transliterate("Taml", "Latn", "கை", { enableDiphthongsInTamil: false, },),
                err => err instanceof Error &&
                    /^Unknown Taml character ை in “கை”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 5", t => {
            t.throws(
                () => transliterate("Latn", "Taml", "a:i", { enableDiphthongsInTamil: false, },),
                err => err instanceof Error &&
                    /^Unknown Latn character : in “a:”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Taml 6", t => {
            t.throws(
                () => transliterate("Latn", "Taml", "ka:i", { enableDiphthongsInTamil: false, },),
                err => err instanceof Error &&
                    /^Unknown Latn character : in “ka:”\.$/v.test(err.message,),
            );
        },);
        // We cannot create a similar Latn → Latn test because without a Brahmic script we do not know what characters are valid.

        QUnit.test.each("invalid numbers", [
            "௨௩",
            "௰௰",
            "௰௱",
            "௧௱",
            "௩௲௨௰௭௲௲௱௯௰௯",
        ], (t, invalidNumber,) => {
            t.throws(
                () => transliterate("Taml", "Latn", invalidNumber,),
                err => err instanceof Error &&
                    new RegExp(`^Invalid number: ${invalidNumber}.$`, "v",).test(err.message,),
            );
        },);
    },);
},);

QUnit.module("Cls", () => {
    QUnit.module("characters", () => {
        const scripts = ["Gran", "Deva",];
        const data = {
            Gran: [
                "𑌅 𑌆 𑌇 𑌈 𑌉 𑌊 𑌋 𑍠 𑌌 𑍡 𑌏 𑌐 𑌓 𑌔 𑌅𑌂 𑌅𑌁 𑌅𑌃",
                "𑌕 𑌕𑌾 𑌕𑌿 𑌕𑍀 𑌕𑍁 𑌕𑍂 𑌕𑍃 𑌕𑍄 𑌕𑍢 𑌕𑍣 𑌕𑍇 𑌕𑍈 𑌕𑍋 𑌕𑍌 𑌕𑌂 𑌕𑌁 𑌕𑌃",
                "𑌕𑍍 𑌖𑍍 𑌗𑍍 𑌘𑍍 𑌙𑍍 𑌚𑍍 𑌛𑍍 𑌜𑍍 𑌝𑍍 𑌞𑍍 𑌟𑍍 𑌠𑍍 𑌡𑍍 𑌢𑍍 𑌣𑍍 𑌤𑍍 𑌥𑍍 𑌦𑍍 𑌧𑍍 𑌨𑍍 𑌪𑍍 𑌫𑍍 𑌬𑍍 𑌭𑍍 𑌮𑍍 𑌯𑍍 𑌰𑍍 𑌲𑍍 𑌳𑍍 𑌵𑍍 𑌶𑍍 𑌷𑍍 𑌸𑍍 𑌹𑍍",
                "𑌕 𑌖 𑌗 𑌘 𑌙 𑌚 𑌛 𑌜 𑌝 𑌞 𑌟 𑌠 𑌡 𑌢 𑌣 𑌤 𑌥 𑌦 𑌧 𑌨 𑌪 𑌫 𑌬 𑌭 𑌮 𑌯 𑌰 𑌲 𑌳 𑌵 𑌶 𑌷 𑌸 𑌹",
                "𑌕𑌾 𑌖𑌾 𑌗𑌾 𑌘𑌾 𑌙𑌾 𑌚𑌾 𑌛𑌾 𑌜𑌾 𑌝𑌾 𑌞𑌾 𑌟𑌾 𑌠𑌾 𑌡𑌾 𑌢𑌾 𑌣𑌾 𑌤𑌾 𑌥𑌾 𑌦𑌾 𑌧𑌾 𑌨𑌾 𑌪𑌾 𑌫𑌾 𑌬𑌾 𑌭𑌾 𑌮𑌾 𑌯𑌾 𑌰𑌾 𑌲𑌾 𑌳𑌾 𑌵𑌾 𑌶𑌾 𑌷𑌾 𑌸𑌾 𑌹𑌾",
                "𑌅𑌅𑌕𑍍𑌕𑍍",
                "𑌕𑍍𑌕",
                "𑌲𑌅",
                "𑌙𑌞𑍍𑌟𑍋",
                "𑌅𑌊",
                "𑌇𑌓𑌐𑌅𑌓𑌨𑌿𑌤𑍀𑌨𑍌𑌳𑌈𑌅",
                "𑌪𑌯𑌓𑌷𑌧𑍀",
                "𑌅𑌰𑍍𑌶𑌉𑌪𑌦𑍍𑌰𑌵𑌃",
                "𑌕𑌿𑌨𑍍𑌹𑍍𑌨𑍁𑌤𑍇",
                "𑌵𑌾𑌗𑍍𑌹𑌰𑌿𑌃",
                "𑌦𑍇𑌵𑌦𑌤𑍍𑌤𑍝",
                "𑌆𑍝",
                "𑌓𑍝",
                "𑌹𑌾𑍝",
                "𑌲𑌕𑍍𑌷𑍍𑌮𑌿𑍝",
                "𑌲𑌕𑍍𑌷𑍍𑌮𑍀𑍝",
                "𑌸𑍁𑌮𑌙𑍍𑌗𑌲𑌾𑌁𑍝",
                "𑌦𑍁ᳲ𑌖𑌮𑍍",
                "𑌸𑍁𑌨𑍍𑌦𑌰𑍀ᳲ 𑌕𑍃𑌤𑍀𑌃",
                "𑌮𑌨ᳲ𑌪𑍍𑌰𑌯𑌤𑍍𑌨𑌃",
                "𑌵ᳲ 𑌪𑌿𑌤𑌰𑌃",
                "𑌕𑍍\u200c𑌕 𑌕𑍍\u200d𑌕 𑌕\u200c𑌕 𑌕\u200d𑌕 𑌕\u200c𑌇 𑌕\u200d𑌇",
                "𑌦𑍁ᳲ\u200c𑌖𑌮𑍍 𑌦𑍁ᳲ\u200d𑌖𑌮𑍍",
                "𑌮𑌨ᳲ\u200c𑌪𑍍𑌰𑌯𑌤𑍍𑌨𑌃 𑌮𑌨ᳲ\u200d𑌪𑍍𑌰𑌯𑌤𑍍𑌨𑌃",
                "௦",
                "௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯",
                "௰ ௱",
                "௱௰௧ ௱௪௰௧ ௨௱௰௩ ௯௱௭௰௧ ௯௱௮௰௫",
                "௲",
                "௨௲௰௩",
                "௰௲",
                "௰௧௲",
                "௨௰௲௩",
                "௲௲",
                "௰௲௲",
                "௰௧௲௲௱௰௧௲௱௰௧",
                "௨௰௲௲௰௩",
                "௨௰௩௲௲௬௱௫௰௲௫௱௬௰௬",
                "௱௨௰௩௲௲௲௪௱௫௰௬௲௲௭௱௮௰௯௲௨௱௩௰௪",
            ],
            Deva: [
                "अ आ इ ई उ ऊ ऋ ॠ ऌ ॡ ए ऐ ओ औ अं अँ अः",
                "क का कि की कु कू कृ कॄ कॢ कॣ के कै को कौ कं कँ कः",
                "क् ख् ग् घ् ङ् च् छ् ज् झ् ञ् ट् ठ् ड् ढ् ण् त् थ् द् ध् न् प् फ् ब् भ् म् य् र् ल् ळ् व् श् ष् स् ह्",
                "क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल ळ व श ष स ह",
                "का खा गा घा ङा चा छा जा झा ञा टा ठा डा ढा णा ता था दा धा ना पा फा बा भा मा या रा ला ळा वा शा षा सा हा",
                "अअक्क्",
                "क्क",
                "लअ",
                "ङञ्टो",
                "अऊ",
                "इओऐअओनितीनौळईअ",
                "पयओषधी",
                "अर्शउपद्रवः",
                "किन्ह्नुते",
                "वाग्हरिः",
                "देवदत्त३",
                "आ३",
                "ओ३",
                "हा३",
                "लक्ष्मि३",
                "लक्ष्मी३",
                "सुमङ्गलाँ३",
                "दुᳵखम्",
                "सुन्दरीᳵ कृतीः",
                "मनᳶप्रयत्नः",
                "वᳶ पितरः",
                "क्\u200cक क्\u200dक क\u200cक क\u200dक क\u200cइ क\u200dइ",
                "दुᳵ\u200cखम् दुᳵ\u200dखम्",
                "मनᳶ\u200cप्रयत्नः मनᳶ\u200dप्रयत्नः",
                "०",
                "१ २ ३ ४ ५ ६ ७ ८ ९",
                "१० १००",
                "१११ १४१ २१३ ९७१ ९८५",
                "१०००",
                "२०१३",
                "१००००",
                "११०००",
                "२०००३",
                "१००००००",
                "१०००००००",
                "११११११११",
                "२०००००१३",
                "२३६५०५६६",
                "१२३४५६७८९२३४",
            ],
            Latn: [
                "a ā i ī u ū r̥ r̥̄ l̥ l̥̄ ē ai ō au aṁ am̐ aḥ",
                "ka kā ki kī ku kū kr̥ kr̥̄ kl̥ kl̥̄ kē kai kō kau kaṁ kam̐ kaḥ",
                "k kh g gh ṅ c ch j jh ñ ṭ ṭh ḍ ḍh ṇ t th d dh n p ph b bh m y r l ḷ v ś ṣ s h",
                "ka kha ga gha ṅa ca cha ja jha ña ṭa ṭha ḍa ḍha ṇa ta tha da dha na pa pha ba bha ma ya ra la ḷa va śa ṣa sa ha",
                "kā khā gā ghā ṅā cā chā jā jhā ñā ṭā ṭhā ḍā ḍhā ṇā tā thā dā dhā nā pā phā bā bhā mā yā rā lā ḷā vā śā ṣā sā hā",
                "aakk",
                "kka",
                "laa",
                "ṅañṭō",
                "aū",
                "iōaiaōnitīnauḷaīa",
                "payaōṣadhī",
                "arśa:upadravaḥ",
                "kinhnutē",
                "vāg:hariḥ",
                "dēvadatta…",
                "ā…",
                "ō…",
                "hā…",
                "lakṣmi…",
                "lakṣmī…",
                "sumaṅgalām̐…",
                "duẖkham",
                "sundarīẖ kr̥tīḥ",
                "manaḫprayatnaḥ",
                "vaḫ pitaraḥ",
                "k\u200cka k\u200dka ka\u200cka ka\u200dka ka\u200ci ka\u200di",
                "duẖ\u200ckham duẖ\u200dkham",
                "manaḫ\u200cprayatnaḥ manaḫ\u200dprayatnaḥ",
                "0",
                "1 2 3 4 5 6 7 8 9",
                "10 100",
                "111 141 213 971 985",
                "1000",
                "2013",
                "10000",
                "11000",
                "20003",
                "1000000",
                "10000000",
                "11111111",
                "20000013",
                "23650566",
                "123456789234",
            ],
        };
        scripts.forEach(script => {
            QUnit.module(`${script} → Latn`, () => {
                [...Array(data[script].length,).keys(),].forEach(i => {
                    QUnit.test(data[script][i], t => {
                        t.deepEqual(
                            transliterate(script, "Latn", data[script][i],),
                            data.Latn[i],);
                    },);
                },);
            },);
            QUnit.module(`Latn → ${script}`, () => {
                [...Array(data.Latn.length,).keys(),].forEach(i => {
                    QUnit.test(data.Latn[i], t => {
                        t.deepEqual(
                            transliterate("Latn", script, data.Latn[i],),
                            data[script][i],);
                    },);
                },);
            },);
        },);

        QUnit.module("🕉", () => {
            const omData = { Gran: "𑍐", Deva: "ॐ", };
            scripts.forEach(script => {
                QUnit.test(`${script} → Latn`, t => {
                    t.deepEqual(
                        transliterate(script, "Latn", omData[script], { omInISO15919: "🕉", },),
                        "🕉",);
                },);
                QUnit.test(`Latn → ${script}`, t => {
                    t.deepEqual(
                        transliterate("Latn", script, "🕉", { omInISO15919: "🕉", },),
                        omData[script],);
                },);
            },);
        },);
    },);

    QUnit.module("documents", () => {
        const textWithPunctuationAndSpacing = {
            Gran: `
𑌸𑌰𑍍𑌵𑍇 𑌮𑌾𑌨𑌵𑌾𑌃 𑌜𑌨𑍍𑌮𑌨𑌾 𑌸𑍍𑌵𑌤𑌨𑍍𑌤𑍍𑌰𑌾𑌃 𑌵𑍈𑌯𑌕𑍍𑌤𑌿𑌕𑌗𑍌𑌰𑌵𑍇𑌣 𑌅𑌧𑌿𑌕𑌾𑌰𑍇𑌣 𑌚 𑌤𑍁𑌲𑍍𑌯𑌾𑌃 𑌏𑌵 । 𑌸𑌰𑍍𑌵𑍇𑌷𑌾𑌂 𑌵𑌿𑌵𑍇𑌕𑌃 𑌆𑌤𑍍𑌮𑌸𑌾𑌕𑍍𑌷𑍀 𑌚 𑌵𑌰𑍍𑌤𑌤𑍇 । 𑌸𑌰𑍍𑌵𑍇 𑌪𑌰𑌸𑍍𑌪𑌰𑌂 𑌭𑍍𑌰𑌾𑌤𑍃𑌭𑌾𑌵𑍇𑌨 𑌵𑍍𑌯𑌵𑌹𑌰𑍇𑌯𑍁𑌃 ।

𑌸𑌰𑍍𑌵𑍇 𑌮𑌾𑌨𑌵𑌾𑌃 𑌸𑍍𑌵𑌤𑌨𑍍𑌤𑍍𑌰𑌾𑌃 𑌸𑌮𑍁𑌤𑍍𑌪𑌨𑍍𑌨𑌾𑌃 𑌵𑌰𑍍𑌤𑌨𑍍𑌤𑍇 𑌅𑌪𑌿 𑌚 𑌗𑍌𑌰𑌵𑌦𑍃𑌶𑌾 𑌅𑌧𑌿𑌕𑌾𑌰𑌦𑍃𑌶𑌾 𑌚 𑌸𑌮𑌾𑌨𑌾𑌃 𑌏𑌵 𑌵𑌰𑍍𑌤𑌨𑍍𑌤𑍇 । 𑌏𑌤𑍇 𑌸𑌰𑍍𑌵𑍇 𑌚𑍇𑌤𑌨𑌾𑌤𑌰𑍍𑌕𑌶𑌕𑍍𑌤𑌿𑌭𑍍𑌯𑌾𑌂 𑌸𑍁𑌸𑌮𑍍𑌪𑌨𑍍𑌨𑌾𑌃 𑌸𑌨𑍍𑌤𑌿 । 𑌅𑌪𑌿 𑌚 𑌸𑌰𑍍𑌵𑍇𑌪𑌿 𑌬𑌨𑍍𑌧𑍁𑌤𑍍𑌵𑌭𑌾𑌵𑌨𑌯𑌾 𑌪𑌰𑌸𑍍𑌪𑌰𑌂 𑌵𑍍𑌯𑌵𑌹𑌰𑌨𑍍𑌤𑍁 ।
        `,
            Deva: `
सर्वे मानवाः जन्मना स्वतन्त्राः वैयक्तिकगौरवेण अधिकारेण च तुल्याः एव । सर्वेषां विवेकः आत्मसाक्षी च वर्तते । सर्वे परस्परं भ्रातृभावेन व्यवहरेयुः ।

सर्वे मानवाः स्वतन्त्राः समुत्पन्नाः वर्तन्ते अपि च गौरवदृशा अधिकारदृशा च समानाः एव वर्तन्ते । एते सर्वे चेतनातर्कशक्तिभ्यां सुसम्पन्नाः सन्ति । अपि च सर्वेपि बन्धुत्वभावनया परस्परं व्यवहरन्तु ।
        `,
            Latn: `
sarvē mānavāḥ janmanā svatantrāḥ vaiyaktikagauravēṇa adhikārēṇa ca tulyāḥ ēva । sarvēṣāṁ vivēkaḥ ātmasākṣī ca vartatē । sarvē parasparaṁ bhrātr̥bhāvēna vyavaharēyuḥ ।

sarvē mānavāḥ svatantrāḥ samutpannāḥ vartantē api ca gauravadr̥śā adhikāradr̥śā ca samānāḥ ēva vartantē । ētē sarvē cētanātarkaśaktibhyāṁ susampannāḥ santi । api ca sarvēpi bandhutvabhāvanayā parasparaṁ vyavaharantu ।
        `, };

        QUnit.test("Gran → Latn", t => {
            t.deepEqual(
                transliterate("Gran", "Latn", textWithPunctuationAndSpacing.Gran,),
                textWithPunctuationAndSpacing.Latn,);
        },);
        QUnit.test("Latn → Gran", t => {
            t.deepEqual(
                transliterate("Latn", "Gran", textWithPunctuationAndSpacing.Latn,),
                textWithPunctuationAndSpacing.Gran,);
        },);
        QUnit.test("Gran → Deva", t => {
            t.deepEqual(
                transliterate("Gran", "Deva", textWithPunctuationAndSpacing.Gran,),
                textWithPunctuationAndSpacing.Deva,);
        },);
        QUnit.test("Deva → Gran", t => {
            t.deepEqual(
                transliterate("Deva", "Gran", textWithPunctuationAndSpacing.Deva,),
                textWithPunctuationAndSpacing.Gran,);
        },);
    },);

    QUnit.module("errors", () => {
        QUnit.test("Gran → Latn", t => {
            const invalidClsGranText = "𑌊𑌷𑍍𑌮𑌾𑌣𑌃; 𑌶 𑌷 𑌸 𑌹 𑌃";
            t.throws(
                () => transliterate("Gran", "Latn", invalidClsGranText,),
                err => err instanceof Error &&
                    /^Unknown Gran character ; in “𑌊𑌷𑍍𑌮𑌾𑌣𑌃;”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Gran → Gran", t => {
            const invalidClsGranText = "𑌊𑌷𑍍𑌮𑌾𑌣𑌃; 𑌶 𑌷 𑌸 𑌹 𑌃";
            t.throws(
                () => transliterate("Gran", "Latn", invalidClsGranText,),
                err => err instanceof Error &&
                    /^Unknown Gran character ; in “𑌊𑌷𑍍𑌮𑌾𑌣𑌃;”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Gran", t => {
            const invalidClsLatnText = "ūṣmāṇaḥ; śa ṣa sa ha ḥ";
            t.throws(
                () => transliterate("Latn", "Gran", invalidClsLatnText,),
                err => err instanceof Error &&
                    /^Unknown Latn character ; in “ūṣmāṇaḥ;”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Gran after long text", t => {
            t.throws(
                () => transliterate("Latn", "Gran", `${"bha".repeat(100,)}X`,),
                err => err instanceof Error &&
                    new RegExp(`^Unknown Latn character X in “${"bha".repeat(100,)}X”\\.$`, "v",).test(err.message,),
            );
        },);
        QUnit.test("Latn → Gran after ambiguous split", t => {
            t.throws(
                () => transliterate("Latn", "Gran", "aūX",),
                err => err instanceof Error &&
                    /^Unknown Latn character X in “aūX”\.$/v.test(err.message,),
            );
        },);
        // We cannot create a similar Latn → Latn test because without a Brahmic script we do not know what characters are valid.

        QUnit.test("Gran → Latn char combos", t => {
            const invalidClsGranCombo = "ᳲ𑌤";
            t.throws(
                () => transliterate("Gran", "Latn", invalidClsGranCombo,),
                err => err instanceof Error &&
                    /^Unknown Gran character combination: .+\.$/v.test(err.message,),
            );
        },);

        QUnit.test.each("join control between a consonant and its vowel mark", [
            ["Latn", "𑌕\u200c𑌾",],
            ["Deva", "𑌕\u200d𑌾",],
        ], (t, [targetScript, text,],) => {
            t.throws(
                () => transliterate("Gran", targetScript, text,),
                err => err instanceof Error &&
                    /^Unknown Gran character combination: 𑌾\.$/v.test(err.message,),
            );
        },);

        QUnit.test("Gran → Latn Vsn", t => {
            const invalidVsnGranText = "𑍐 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃 𑌶𑌾𑌨𑍍𑌤𑌿᳴𑌃 ॥";
            t.throws(
                () => transliterate("Gran", "Latn", invalidVsnGranText,),
                err => err instanceof Error &&
                    /^Unknown Gran character ॒ in “𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Gran → Gran Vsn", t => {
            const invalidVsnGranText = "𑍐 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃 𑌶𑌾𑌨𑍍𑌤𑌿᳴𑌃 ॥";
            t.throws(
                () => transliterate("Gran", "Latn", invalidVsnGranText,),
                err => err instanceof Error &&
                    /^Unknown Gran character ॒ in “𑌶𑌾𑌨𑍍𑌤𑌿॒𑌃”\.$/v.test(err.message,),
            );
        },);
        QUnit.test("Latn → Gran Vsn", t => {
            const invalidVsnLatnText = "Ώ śā́ntiḥ śā́ntiḥ śā́ntìḥ ॥";
            t.throws(
                () => transliterate("Latn", "Gran", invalidVsnLatnText,),
                err => err instanceof Error &&
                    /^Unknown Latn character ́ in “Ώ”\.$/v.test(err.message,),
            );
        },);
        // We cannot create a similar Latn → Latn test because without a Brahmic script we do not know what characters are valid.
    },);
},);

QUnit.module("Vsn", () => {
    QUnit.module("yajurveda", () => {
        QUnit.module("characters", () => {
            const scripts = ["Gran", "Deva",];
            const data = {
                Gran: [
                    "𑍐॒", "𑍐", "𑍐᳴", "𑍐॑",
                    "𑌅॒", "𑌅", "𑌅᳴", "𑌅॑",
                    "𑌆॒", "𑌆", "𑌆᳴", "𑌆॑",
                    "𑌔॒", "𑌔", "𑌔᳴", "𑌔॑",
                    "𑌅॒𑌇॒", "𑌅॒𑌇", "𑌅॒𑌇᳴", "𑌅॒𑌇॑",
                    "𑌅𑌇॒", "𑌅𑌇", "𑌅𑌇᳴", "𑌅𑌇॑",
                    "𑌅᳴𑌇॒", "𑌅᳴𑌇", "𑌅᳴𑌇᳴", "𑌅᳴𑌇॑",
                    "𑌅॑𑌇॒", "𑌅॑𑌇", "𑌅॑𑌇᳴", "𑌅॑𑌇॑",
                    "𑌕॒", "𑌕", "𑌕᳴", "𑌕॑",
                    "𑌕𑌾॒", "𑌕𑌾", "𑌕𑌾᳴", "𑌕𑌾॑",
                    "𑌕𑍍𑌕॒", "𑌕𑍍𑌕", "𑌕𑍍𑌕᳴", "𑌕𑍍𑌕॑",
                    "𑌤𑌵", "𑌸𑍋𑌮", "𑌲𑌤𑌾", "𑌮𑌾𑌤𑌾",
                    "𑌮𑌦𑌨", "𑌪𑌾𑌵𑌨", "𑌤𑌦𑍇𑌵", "𑌰𑌚𑌨𑌾",
                    "𑌵𑌾𑌰𑌾𑌹", "𑌸𑌾𑌧𑌨𑌾", "𑌶𑌲𑌾𑌕𑌾", "𑌵𑌾𑌰𑌾𑌹𑍀",
                    "𑌕𑍍\u200c𑌕॒", "𑌕𑍍\u200c𑌕", "𑌕𑍍\u200c𑌕᳴", "𑌕𑍍\u200c𑌕॑",
                ],
                Deva: [
                    "ॐ॒", "ॐ", "ॐ॑", "ॐ᳚",
                    "अ॒", "अ", "अ॑", "अ᳚",
                    "आ॒", "आ", "आ॑", "आ᳚",
                    "औ॒", "औ", "औ॑", "औ᳚",
                    "अ॒इ॒", "अ॒इ", "अ॒इ॑", "अ॒इ᳚",
                    "अइ॒", "अइ", "अइ॑", "अइ᳚",
                    "अ॑इ॒", "अ॑इ", "अ॑इ॑", "अ॑इ᳚",
                    "अ᳚इ॒", "अ᳚इ", "अ᳚इ॑", "अ᳚इ᳚",
                    "क॒", "क", "क॑", "क᳚",
                    "का॒", "का", "का॑", "का᳚",
                    "क्क॒", "क्क", "क्क॑", "क्क᳚",
                    "तव", "सोम", "लता", "माता",
                    "मदन", "पावन", "तदेव", "रचना",
                    "वाराह", "साधना", "शलाका", "वाराही",
                    "क्\u200cक॒", "क्\u200cक", "क्\u200cक॑", "क्\u200cक᳚",
                ],
                Latn: [
                    "Ω", "Ώ", "Ὼ", "Ω̏",
                    "a", "á", "à", "ȁ",
                    "ā", "ā́", "ā̀", "ā̏",
                    "au", "aú", "aù", "aȕ",
                    "a:i", "a:í", "a:ì", "a:ȉ",
                    "á:i", "á:í", "á:ì", "á:ȉ",
                    "à:i", "à:í", "à:ì", "à:ȉ",
                    "ȁ:i", "ȁ:í", "ȁ:ì", "ȁ:ȉ",
                    "ka", "ká", "kà", "kȁ",
                    "kā", "kā́", "kā̀", "kā̏",
                    "kka", "kká", "kkà", "kkȁ",
                    "tává", "sṓmá", "látā́", "mā́tā́",
                    "mádáná", "pā́váná", "tádḗvá", "rácánā́",
                    "vā́rā́há", "sā́dhánā́", "śálā́kā́", "vā́rā́hī́",
                    "k\u200cka", "k\u200cká", "k\u200ckà", "k\u200ckȁ",
                ],
            };
            scripts.forEach(script => {
                QUnit.module(`${script} → Latn`, () => {
                    [...Array(data[script].length,).keys(),].forEach(i => {
                        QUnit.test(data[script][i], t => {
                            t.deepEqual(
                                transliterate(script, "Latn", data[script][i], { vedicAccents: "yajurveda", },),
                                data.Latn[i],);
                        },);
                    },);
                },);
                QUnit.module(`Latn → ${script}`, () => {
                    [...Array(data.Latn.length,).keys(),].forEach(i => {
                        QUnit.test(data.Latn[i], t => {
                            t.deepEqual(
                                transliterate("Latn", script, data.Latn[i], { vedicAccents: "yajurveda", },),
                                data[script][i],);
                        },);
                    },);
                },);
            },);

            QUnit.module("🕉", () => {
                const omLatn = ["🕉", "🕉́", "🕉̀", "🕉̏",];
                scripts.forEach(script => {
                    QUnit.module(`${script} → Latn`, () => {
                        [...Array(omLatn.length,).keys(),].forEach(i => {
                            QUnit.test(data[script][i], t => {
                                t.deepEqual(
                                    transliterate(script, "Latn", data[script][i], { omInISO15919: "🕉", vedicAccents: "yajurveda", },),
                                    omLatn[i],);
                            },);
                        },);
                    },);
                    QUnit.module(`Latn → ${script}`, () => {
                        [...Array(omLatn.length,).keys(),].forEach(i => {
                            QUnit.test(omLatn[i], t => {
                                t.deepEqual(
                                    transliterate("Latn", script, omLatn[i], { omInISO15919: "🕉", vedicAccents: "yajurveda", },),
                                    data[script][i],);
                            },);
                        },);
                    },);
                },);
            },);
        },);

        QUnit.module("documents", () => {
            const textWithPunctuationAndSpacing = {
                Gran: `
𑍐 𑌤𑌚𑍍𑌛॒𑌯𑍍𑌁𑌯𑍋𑌰𑌾𑌵𑍃᳴𑌣𑍀𑌮𑌹𑍇 । 𑌗𑌾॒𑌤𑍁𑌯𑍍𑌁𑌯॒𑌜𑍍𑌞𑌾𑌯᳴ । 𑌗𑌾॒𑌤𑍁𑌯𑍍𑌁𑌯॒𑌜𑍍𑌞𑌪᳴𑌤𑌯𑍇 । 𑌦𑍈𑌵𑍀॑ 𑌸𑍍𑌵॒𑌸𑍍𑌤𑌿𑌰᳴𑌸𑍍𑌤𑍁 𑌨𑌃 । 𑌸𑍍𑌵॒𑌸𑍍𑌤𑌿𑌰𑍍𑌮𑌾𑌨𑍁᳴𑌷𑍇𑌭𑍍𑌯𑌃 । 𑌊॒𑌰𑍍𑌧𑍍𑌵𑌞𑍍𑌜𑌿᳴𑌗𑌾𑌤𑍁 𑌭𑍇𑌷॒𑌜𑌮𑍍 । 𑌶𑌨𑍍𑌨𑍋᳴ 𑌅𑌸𑍍𑌤𑍁 𑌦𑍍𑌵𑌿॒𑌪𑌦𑍇॑ । 𑌶𑌞𑍍𑌚𑌤𑍁᳴𑌷𑍍𑌪𑌦𑍇 ॥ 𑍐 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌶𑍍𑌶𑌾𑌨𑍍𑌤𑌿॒𑌶𑍍𑌶𑌾𑌨𑍍𑌤𑌿᳴𑌃 ॥
𑌪𑍁𑌰𑍁᳴𑌷 𑌏॒𑌵𑍇𑌦𑍞 𑌸𑌰𑍍𑌵𑌮𑍍॑ । 𑌅𑌤𑍋॒ 𑌜𑍍𑌯𑌾𑌯𑌾𑍟᳴𑌶𑍍𑌚॒ 𑌪𑍂𑌰𑍁᳴𑌷𑌃 ।
        `,
                Deva: `
ॐ तच्छ॒य्ँयोरावृ॑णीमहे । गा॒तुय्ँय॒ज्ञाय॑ । गा॒तुय्ँय॒ज्ञप॑तये । दैवी᳚ स्व॒स्तिर॑स्तु नः । स्व॒स्तिर्मानु॑षेभ्यः । ऊ॒र्ध्वञ्जि॑गातु भेष॒जम् । शन्नो॑ अस्तु द्वि॒पदे᳚ । शञ्चतु॑ष्पदे ॥ ॐ शान्ति॒श्शान्ति॒श्शान्ति॑ः ॥
पुरु॑ष ए॒वेदꣳ सर्वम्᳚ । अतो॒ ज्यायाꣴ॑श्च॒ पूरु॑षः ।
        `,
                Latn: `
Ώ tácchaym̐yṓrā́vr̥̀ṇī́máhḗ । gātúym̐yajñā́yà । gātúym̐yajñápàtáyḗ । daívī̏ svastíràstú náḥ । svastírmā́nùṣḗbhyáḥ । ūrdhváñjìgā́tú bhḗṣajám । śánnṑ ástú dvipádē̏ । śáñcátùṣpádḗ ॥ Ώ śā́ntiśśā́ntiśśā́ntìḥ ॥
púrùṣá ēvḗdágͫ sárvám̏ । átō jyā́yā́gͫ̄̀śca pū́rùṣáḥ ।
        `, };

            QUnit.test("Gran → Latn", t => {
                t.deepEqual(
                    transliterate("Gran", "Latn", textWithPunctuationAndSpacing.Gran, { vedicAccents: "yajurveda", },),
                    textWithPunctuationAndSpacing.Latn,);
            },);
            QUnit.test("Latn → Gran", t => {
                t.deepEqual(
                    transliterate("Latn", "Gran", textWithPunctuationAndSpacing.Latn, { vedicAccents: "yajurveda", },),
                    textWithPunctuationAndSpacing.Gran,);
            },);
            QUnit.test("Gran → Deva", t => {
                t.deepEqual(
                    transliterate("Gran", "Deva", textWithPunctuationAndSpacing.Gran, { vedicAccents: "yajurveda", },),
                    textWithPunctuationAndSpacing.Deva,);
            },);
            QUnit.test("Deva → Gran", t => {
                t.deepEqual(
                    transliterate("Deva", "Gran", textWithPunctuationAndSpacing.Deva, { vedicAccents: "yajurveda", },),
                    textWithPunctuationAndSpacing.Gran,);
            },);
        },);

        QUnit.module("errors", () => {
            QUnit.test("a Samavedic mark is rejected", t => {
                t.throws(
                    () => transliterate("Gran", "Latn", "𑌅𑍨", { vedicAccents: "yajurveda", },),
                    err => err instanceof Error && /^Unknown Gran character/v.test(err.message,),
                );
            },);
            QUnit.test("join control between a letter and its accent mark", t => {
                t.throws(
                    () => transliterate("Gran", "Latn", "𑌕\u200c॒", { vedicAccents: "yajurveda", },),
                    err => err instanceof Error &&
                        /^Unknown Gran character combination: ॒\.$/v.test(err.message,),
                );
            },);
        },);
    },);

    QUnit.module("samaveda", () => {
        const options = { vedicAccents: "samaveda", };

        QUnit.module("characters", () => {
            QUnit.test("a word with no marks stays unmarked", t => {
                t.deepEqual(transliterate("Gran", "Latn", "𑌸𑌤𑍍𑌸𑌿", options,), "satsi",);
                t.deepEqual(transliterate("Latn", "Gran", "satsi", options,), "𑌸𑌤𑍍𑌸𑌿",);
            },);
        },);

        QUnit.module("documents", () => {
            const text = {
                Gran: "𑌅𑍨𑌗𑍍𑌨𑍩 𑌆𑍧 𑌯𑌾𑍨𑌹𑌿 𑌵𑍀𑍩𑌤𑍧𑌯𑍇𑍨 𑌗𑍃𑌣𑌾𑍩𑌨𑍋𑍨 𑌹𑍩𑌵𑍍𑌯𑍧𑌦𑌾𑍨𑌤𑌯𑍇 । 𑌨𑌿𑍧 𑌹𑍋𑌤𑌾𑍨𑍦 𑌸𑌤𑍍𑌸𑌿 𑌬𑍩𑌰𑍍𑌹𑌿𑍧𑌷𑌿𑍨 ॥",
                Deva: "अ꣢ग्न꣣ आ꣡ या꣢हि वी꣣त꣡ये꣢ गृणा꣣नो꣢ ह꣣व्य꣡दा꣢तये । नि꣡ होता꣢꣠ सत्सि ब꣣र्हि꣡षि꣢ ॥",
                Latn: "a²gna³ ā¹ yā²hi vī³ta¹yē² gr̥ṇā³nō² ha³vya¹dā²tayē । ni¹ hōtā²⁰ satsi ba³rhi¹ṣi² ॥",
            };
            [["Gran", "Latn",], ["Latn", "Gran",], ["Gran", "Deva",], ["Deva", "Gran",], ["Deva", "Latn",], ["Latn", "Deva",],].forEach(([src, tgt,],) => {
                QUnit.test(`${src} → ${tgt}`, t => {
                    t.deepEqual(transliterate(src, tgt, text[src], options,), text[tgt],);
                },);
            },);
        },);

        QUnit.module("errors", () => {
            QUnit.test("a Yajurvedic mark is rejected", t => {
                t.throws(
                    () => transliterate("Gran", "Latn", "𑌅॒", options,),
                    err => err instanceof Error && /^Unknown Gran character/v.test(err.message,),
                );
            },);
        },);
    },);
},);

QUnit.module("API", () => {
    QUnit.module("identity", () => {
        QUnit.test("Taml → Taml", t => {
            const trivialTestText = "தமிழிலிருந்து தமிழ் எளிது.";
            t.deepEqual(
                transliterate("Taml", "Taml", trivialTestText,),
                trivialTestText,);
        },);
        QUnit.test("Latn → Latn", t => {
            const trivialTestText = "tamiṛiliruntu tamiṛ eḷitu.";
            t.deepEqual(
                transliterate("Latn", "Latn", trivialTestText,),
                trivialTestText,);
        },);
    },);

    QUnit.module("unsupported script", () => {
        const unsupportedScriptName = "sinh";
        QUnit.test("source", t => {
            t.throws(
                () => transliterate(unsupportedScriptName, "Latn", "",),
                err => err instanceof Error &&
                    new RegExp(`^Unsupported or invalid source script: ${unsupportedScriptName}.$`, "v",).test(err.message,),
            );
        },);
        QUnit.test("target", t => {
            t.throws(
                () => transliterate("Latn", unsupportedScriptName, "",),
                err => err instanceof Error &&
                    new RegExp(`^Unsupported or invalid target script: ${unsupportedScriptName}.$`, "v",).test(err.message,),
            );
        },);
    },);

    QUnit.module("unsupported vedicAccents value", () => {
        QUnit.test("atharvaveda", t => {
            t.throws(
                () => transliterate("Gran", "Latn", "𑌅", { vedicAccents: "atharvaveda", },),
                err => err instanceof Error && /^Unsupported or invalid vedicAccents value: atharvaveda\.$/v.test(err.message,),
            );
        },);
    },);

    QUnit.module("alternating an option’s values", () => {
        // Each entry is a set of options and a pair of texts they map to each other.
        const data = {
            vedicAccents: {
                script: "Gran",
                calls: [
                    [{}, "hi", "𑌹𑌿",],
                    [{ vedicAccents: "yajurveda", }, "hi", "𑌹𑌿॒",],
                    [{ vedicAccents: "samaveda", }, "hi¹", "𑌹𑌿𑍧",],
                ],
            },
            omInISO15919: {
                script: "Gran",
                calls: [
                    [{}, "Ω", "𑍐",],
                    [{ omInISO15919: "🕉", }, "🕉", "𑍐",],
                    [{ omInISO15919: "☉", }, "☉", "𑍐",],
                ],
            },
            modifiedISO15919ForTam: {
                script: "Taml",
                calls: [
                    [{}, "ḻa", "ழ",],
                    [{ modifiedISO15919ForTam: false, }, "ḻa", "ழ",],
                    [{ modifiedISO15919ForTam: true, }, "ṛa", "ழ",],
                ],
            },
            enableDiphthongsInTamil: {
                script: "Taml",
                calls: [
                    [{}, "kai", "கை",],
                    [{ enableDiphthongsInTamil: true, }, "kai", "கை",],
                    [{ enableDiphthongsInTamil: false, }, "kai", "கஇ",],
                ],
            },
        };

        Object.entries(data,).forEach(([option, { script, calls, },],) => {
            QUnit.test(option, t => {
                [...calls, ...calls,].forEach(([options, latin, brahmic,],) => {
                    t.deepEqual(transliterate("Latn", script, latin, options,), brahmic,);
                    t.deepEqual(transliterate(script, "Latn", brahmic, options,), latin,);
                },);
            },);
        },);
    },);
},);
