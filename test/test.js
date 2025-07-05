import { transliterate, } from "../src/saulabhya.js";

QUnit.config.maxDepth = -1;
QUnit.config.noglobals = true;

QUnit.module("Taml unit tests", () => {
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
            "க௧",
            "௨ங",
        ],
        Latn: [
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
            "ka1",
            "2ṅa",
        ],
    };
    QUnit.module("To Latin", () => {
        [...Array(data.Taml.length,).keys(),].forEach(i => {
            QUnit.test(data.Taml[i], t => {
                t.deepEqual(
                    transliterate("Taml", "Latn", data.Taml[i],),
                    data.Latn[i],);
            },);
        },);
    },);
    QUnit.module("From Latin", () => {
        [...Array(data.Latn.length,).keys(),].forEach(i => {
            QUnit.test(data.Latn[i], t => {
                t.deepEqual(
                    transliterate("Latn", "Taml", data.Latn[i],),
                    data.Taml[i],);
            },);
        },);
    },);
},);

QUnit.module("Telu unit tests", () => {
    const data = {
        Telu: [
            "అ ఆ ఇ ఈ ఉ ఊ ఎ ఏ ఐ ఒ ఓ ఔ",
            "క కా కి కీ కు కూ కె కే కై కొ కో కౌ",
            "క్ ఙ్ చ్ ఞ్ ట్ ణ్ ఱ్ ఩్ త్ న్ ప్ మ్ య్ ర్ ల్ వ్ ఴ్ ళ్",
            "క ఙ చ ఞ ట ణ ఱ ఩ త న ప మ య ర ల వ ఴ ళ",
        ],
        Latn: [
            "a ā i ī u ū e ē ai o ō au",
            "ka kā ki kī ku kū ke kē kai ko kō kau",
            "k ṅ c ñ ṭ ṇ ṯ ṉ t n p m y r ḻ v ṛ ḷ",
            "ka ṅa ca ña ṭa ṇa ṯa ṉa ta na pa ma ya ra ḻa va ṛa ḷa",
        ],
    };
    QUnit.module("To Latin", () => {
        [...Array(data.Telu.length,).keys(),].forEach(i => {
            QUnit.test(data.Telu[i], t => {
                t.deepEqual(
                    transliterate("Telu", "Latn", data.Telu[i],),
                    data.Latn[i],);
            },);
        },);
    },);
    QUnit.module("From Latin", () => {
        [...Array(data.Latn.length,).keys(),].forEach(i => {
            QUnit.test(data.Latn[i], t => {
                t.deepEqual(
                    transliterate("Latn", "Telu", data.Latn[i],),
                    data.Telu[i],);
            },);
        },);
    },);
},);

QUnit.module("Knda unit tests", () => {
    const data = {
        Knda: [
            "ಅ ಆ ಇ ಈ ಉ ಊ ಎ ಏ ಐ ಒ ಓ ಔ",
            "ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೆ ಕೇ ಕೈ ಕೊ ಕೋ ಕೌ",
            "ಕ್ ಙ್ ಚ್ ಞ್ ಟ್ ಣ್ ಱ್ ಴್ ತ್ ನ್ ಪ್ ಮ್ ಯ್ ರ್ ಲ್ ವ್ ೞ್ ಳ್",
            "ಕ ಙ ಚ ಞ ಟ ಣ ಱ ಴ ತ ನ ಪ ಮ ಯ ರ ಲ ವ ೞ ಳ",
        ],
        Latn: [
            "a ā i ī u ū e ē ai o ō au",
            "ka kā ki kī ku kū ke kē kai ko kō kau",
            "k ṅ c ñ ṭ ṇ ṯ ṉ t n p m y r ḻ v ṛ ḷ",
            "ka ṅa ca ña ṭa ṇa ṯa ṉa ta na pa ma ya ra ḻa va ṛa ḷa",
        ],
    };
    QUnit.module("To Latin", () => {
        [...Array(data.Knda.length,).keys(),].forEach(i => {
            QUnit.test(data.Knda[i], t => {
                t.deepEqual(
                    transliterate("Knda", "Latn", data.Knda[i],),
                    data.Latn[i],);
            },);
        },);
    },);
    QUnit.module("From Latin", () => {
        [...Array(data.Latn.length,).keys(),].forEach(i => {
            QUnit.test(data.Latn[i], t => {
                t.deepEqual(
                    transliterate("Latn", "Knda", data.Latn[i],),
                    data.Knda[i],);
            },);
        },);
    },);
},);

QUnit.module("Gran unit tests", () => {
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
            "𑌅𑌗𑍍𑌃",
            "𑌬𑍍𑌹𑌣𑍍𑌹𑌪𑌇𑌚𑍍𑌹𑌉𑌅𑌇𑌅𑌓",
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
            "agḥ",
            "b:haṇhapa:ic:ha:ua:iaō",
        ],
    };
    QUnit.module("To Latin", () => {
        [...Array(data.Gran.length,).keys(),].forEach(i => {
            QUnit.test(data.Gran[i], t => {
                t.deepEqual(
                    transliterate("Gran", "Latn", data.Gran[i],),
                    data.Latn[i],);
            },);
        },);
    },);
    QUnit.module("From Latin", () => {
        [...Array(data.Latn.length,).keys(),].forEach(i => {
            QUnit.test(data.Latn[i], t => {
                t.deepEqual(
                    transliterate("Latn", "Gran", data.Latn[i],),
                    data.Gran[i],);
            },);
        },);
    },);
},);

QUnit.module("Deva unit tests", () => {
    const data = {
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
            "अग्ः",
            "ब्हण्हपइच्हउअइअओ",
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
            "agḥ",
            "b:haṇhapa:ic:ha:ua:iaō",
        ],
    };
    QUnit.module("To Latin", () => {
        [...Array(data.Deva.length,).keys(),].forEach(i => {
            QUnit.test(data.Deva[i], t => {
                t.deepEqual(
                    transliterate("Deva", "Latn", data.Deva[i],),
                    data.Latn[i],);
            },);
        },);
    },);
    QUnit.module("From Latin", () => {
        [...Array(data.Latn.length,).keys(),].forEach(i => {
            QUnit.test(data.Latn[i], t => {
                t.deepEqual(
                    transliterate("Latn", "Deva", data.Latn[i],),
                    data.Deva[i],);
            },);
        },);
    },);
},);

QUnit.module("Numbers", () => {
    const data = {
        Taml: [
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
        Deva: [
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
    [...Array(data.Latn.length,).keys(),].forEach(i => {
        QUnit.test(`தமிழ் ${data.Taml[i]}`, t => {
            t.deepEqual(
                transliterate("Taml", "Latn", data.Taml[i],),
                data.Latn[i],);
        },);
        QUnit.test(`${data.Latn[i]} → தமிழ்`, t => {
            t.deepEqual(
                transliterate("Latn", "Taml", data.Latn[i],),
                data.Taml[i],);
        },);
        QUnit.test(`తెలుగు ${data.Telu[i]}`, t => {
            t.deepEqual(
                transliterate("Telu", "Latn", data.Telu[i],),
                data.Latn[i],);
        },);
        QUnit.test(`${data.Latn[i]} → తెలుగు`, t => {
            t.deepEqual(
                transliterate("Latn", "Telu", data.Latn[i],),
                data.Telu[i],);
        },);
        QUnit.test(`देवनागरी ${data.Deva[i]}`, t => {
            t.deepEqual(
                transliterate("Deva", "Latn", data.Deva[i],),
                data.Latn[i],);
        },);
        QUnit.test(`${data.Latn[i]} → देवनागरी`, t => {
            t.deepEqual(
                transliterate("Latn", "Deva", data.Latn[i],),
                data.Deva[i],);
        },);
    },);
},);

QUnit.module("Integration tests", () => {
    QUnit.module("Trivial transliteration", () => {
        QUnit.test("Transliterate from Taml to Taml", t => {
            const trivialTestText = "தமிழிலிருந்து தமிழ் எளிது.";
            t.deepEqual(
                transliterate("Taml", "Taml", trivialTestText,),
                trivialTestText,);
        },);
    },);
    QUnit.module("ta", () => {
        const textWithPunctuationAndSpacing = {
            Taml: `
மனிதப் பிறவியினர் சகலரும் சுதந்திரமாகவே பிறக்கின்ழனர். அவர்கள் மதிப்பிலும் உரிமைகளிலும் சமமானவர்கள். அவர்கள் நியாயத்தையும் மனசாட்சியையும் இயற்பண்பாகப் பெற்றவர்கள். அவர்கள் ஒருவருடனொருவர் சகோதர உணர்வுப் பாங்கில் நடந்துகொள்ளல் வேண்டும்.

௨௱௩வது மனிதன்.

சந்தடியென்று மறந்தாயோ! இங்கில்லையோ! எதற்கு தயை வராதுடா? இராமச்சந்திரா!
        `,
            Knda: `
ಮ಴ಿತಪ್ ಪಿಱವಿಯಿ಴ರ್ ಚಕಲರುಮ್ ಚುತನ್ತಿರಮಾಕವೇ ಪಿಱಕ್ಕಿ಴್ೞ಴ರ್. ಅವರ್ಕಳ್ ಮತಿಪ್ಪಿಲುಮ್ ಉರಿಮೈಕಳಿಲುಮ್ ಚಮಮಾ಴ವರ್ಕಳ್. ಅವರ್ಕಳ್ ನಿಯಾಯತ್ತೈಯುಮ್ ಮ಴ಚಾಟ್ಚಿಯೈಯುಮ್ ಇಯಱ್ಪಣ್ಪಾಕಪ್ ಪೆಱ್ಱವರ್ಕಳ್. ಅವರ್ಕಳ್ ಒರುವರುಟ಴ೊರುವರ್ ಚಕೋತರ ಉಣರ್ವುಪ್ ಪಾಙ್ಕಿಲ್ ನಟನ್ತುಕೊಳ್ಳಲ್ ವೇಣ್ಟುಮ್.

೨೦೩ವತು ಮ಴ಿತ಴್.

ಚನ್ತಟಿಯೆ಴್ಱು ಮಱನ್ತಾಯೋ! ಇಙ್ಕಿಲ್ಲೈಯೋ! ಎತಱ್ಕು ತಯೈ ವರಾತುಟಾ? ಇರಾಮಚ್ಚನ್ತಿರಾ!
        `,
            Telu: `
మ఩ితప్ పిఱవియి఩ర్ చకలరుమ్ చుతన్తిరమాకవే పిఱక్కి఩్ఴ఩ర్. అవర్కళ్ మతిప్పిలుమ్ ఉరిమైకళిలుమ్ చమమా఩వర్కళ్. అవర్కళ్ నియాయత్తైయుమ్ మ఩చాట్చియైయుమ్ ఇయఱ్పణ్పాకప్ పెఱ్ఱవర్కళ్. అవర్కళ్ ఒరువరుట఩ొరువర్ చకోతర ఉణర్వుప్ పాఙ్కిల్ నటన్తుకొళ్ళల్ వేణ్టుమ్.

౨౦౩వతు మ఩ిత఩్.

చన్తటియె఩్ఱు మఱన్తాయో! ఇఙ్కిల్లైయో! ఎతఱ్కు తయై వరాతుటా? ఇరామచ్చన్తిరా!
        `,
            Mlym: `
മഩിതപ് പിറവിയിഩര് ചകലരുമ് ചുതന്തിരമാകവേ പിറക്കിഩ്ഴഩര്. അവര്കള് മതിപ്പിലുമ് ഉരിമൈകളിലുമ് ചമമാഩവര്കള്. അവര്കള് നിയായത്തൈയുമ് മഩചാട്ചിയൈയുമ് ഇയറ്പണ്പാകപ് പെറ്റവര്കള്. അവര്കള് ഒരുവരുടഩൊരുവര് ചകോതര ഉണര്വുപ് പാങ്കില് നടന്തുകൊള്ളല് വേണ്ടുമ്.

൨൱൩വതു മഩിതഩ്.

ചന്തടിയെഩ്റു മറന്തായോ! ഇങ്കില്ലൈയോ! എതറ്കു തയൈ വരാതുടാ? ഇരാമച്ചന്തിരാ!
        `,
            Latn: `
maṉitap piṯaviyiṉar cakaḻarum cutantiramākavē piṯakkiṉṛaṉar. avarkaḷ matippiḻum urimaikaḷiḻum camamāṉavarkaḷ. avarkaḷ niyāyattaiyum maṉacāṭciyaiyum iyaṯpaṇpākap peṯṯavarkaḷ. avarkaḷ oruvaruṭaṉoruvar cakōtara uṇarvup pāṅkiḻ naṭantukoḷḷaḻ vēṇṭum.

203vatu maṉitaṉ.

cantaṭiyeṉṯu maṯantāyō! iṅkiḻḻaiyō! etaṯku tayai varātuṭā? irāmaccantirā!
        `, };
        QUnit.test("Taml to Latn: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Taml", "Latn", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Latn,);
        },);
        QUnit.test("Latn to Taml: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Latn", "Taml", textWithPunctuationAndSpacing.Latn,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml to Knda: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Taml", "Knda", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Knda,);
        },);
        QUnit.test("Knda to Taml: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Knda", "Taml", textWithPunctuationAndSpacing.Knda,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml to Telu: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Taml", "Telu", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Telu,);
        },);
        QUnit.test("Telu to Taml: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Telu", "Taml", textWithPunctuationAndSpacing.Telu,),
                textWithPunctuationAndSpacing.Taml,);
        },);
        QUnit.test("Taml to Mlym: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Taml", "Mlym", textWithPunctuationAndSpacing.Taml,),
                textWithPunctuationAndSpacing.Mlym,);
        },);
        QUnit.test("Mlym to Taml: ta text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Mlym", "Taml", textWithPunctuationAndSpacing.Mlym,),
                textWithPunctuationAndSpacing.Taml,);
        },);
    },);

    QUnit.module("sa", () => {
        const textWithPunctuationAndSpacing = {
            Gran: `
𑌲𑍇𑌖𑍇𑌷𑍁 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌾𑌦𑌿𑌤𑌰𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌃 𑌪𑍍𑌰𑌾𑌦𑍇𑌶𑌿𑌕𑌭𑌾𑌷𑌾𑌃 𑌪𑍍𑌰𑌾𑌨𑍍𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌃 𑌇𑌤𑍍𑌯𑌭𑌿𑌧𑍀𑌯𑌨𑍍𑌤𑍇 । 𑌇𑌤𑍍𑌥𑌂𑌪𑍍𑌰𑌯𑍋𑌗𑍇𑌣 𑌲𑍇𑌖𑌕𑌸𑍍𑌯𑍋𑌦𑍍𑌦𑍇𑌶𑌾𑌸𑍍𑌤𑍍𑌰𑌯𑍋 𑌭𑌾𑌸𑌨𑍍𑌤𑍇 । 𑌪𑍍𑌰𑌥𑌮𑍋 𑌯𑌤𑍍 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌭𑌾𑌷𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌾𑌨𑌾𑌂 𑌭𑌾𑌰𑌤𑌦𑍇𑌶𑌸𑍍𑌯 𑌚 𑌰𑌾𑌷𑍍𑌟𑍍𑌰𑌭𑌾𑌷𑌾 𑌪𑍂𑌰𑍍𑌵𑌮𑌾𑌸𑍀𑌤𑍍 𑌸𑌾𑌮𑍍𑌪𑍍𑌰𑌤𑌂 𑌵𑌰𑍍𑌤𑌤𑍇 𑌶𑍍𑌵𑍋 𑌵𑌾 𑌭𑌵𑍇𑌤𑍍 । 𑌅𑌨𑍍𑌯 𑌉𑌦𑍍𑌦𑍇𑌶𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌾𑌦𑍍 𑌇𑌤𑌰𑌾𑌸𑌾𑌂 𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑍍 𑌅𑌧𑌿𑌕𑌾𑌰𑌃 𑌸𑍍𑌵𑌸𑍍𑌵𑌪𑍍𑌰𑌦𑍇𑌶𑍇𑌷𑍍𑌵𑍇𑌵𑍇𑌤𑌿 । 𑌤𑍃𑌤𑍀𑌯 𑌉𑌦𑍍𑌦𑍇𑌶𑌾𑌸𑍍𑌤𑍁 𑌉𑌕𑍍𑌤𑌾𑌭𑍍𑌯𑌾𑌂 𑌕𑌾𑌰𑌣𑌾𑌭𑍍𑌯𑌾𑌂 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌭𑌾𑌷𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌸𑍁 𑌸𑌰𑍍𑌵𑌪𑍍𑌰𑌥𑌮𑌾 𑌚𑍇𑌤𑌿 ।

௪௰௫𑌤𑌮𑌸𑍍𑌯 𑌅𑌹𑍋𑌬𑌿𑌲𑌮𑌠𑌾𑌧𑍀𑌶𑌸𑍍𑌯 𑌧𑍍𑌯𑌾𑌨𑌶𑍍𑌲𑍋𑌕𑌃
𑌕𑌟𑌾𑌕𑍍𑌷𑌃 𑌅𑌸𑍍𑌯 𑌅𑌸𑍍𑌤𑍀𑌤𑌿 𑌇𑌨𑍍𑌨𑌨𑍍𑌤𑌂 𑌕𑌟𑌾𑌕𑍍𑌷𑍀 । 𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌 𑌨 𑌙𑌿𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌 𑌇𑌤𑍍𑌯𑌨𑍇𑌨 𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌨𑍍 । 𑌦𑍇𑌵𑍍𑌯𑌾𑌃 𑌸𑍍𑌤𑍍𑌰𑍀𑌤𑍍𑌵𑌾𑌤𑍍 𑌋𑌨𑍍𑌨𑍇𑌭𑍍𑌯𑍋 𑌙𑍀𑌪𑍍 𑌇𑌤𑍍𑌯𑌤𑌃 𑌣𑌤𑍍𑌵𑌾𑌚𑍍𑌚 𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌣𑍀 𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌 𑌏𑌙𑍍𑌹𑍍𑌰𑌸𑍍𑌵𑌾𑌤𑍍𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍇𑌃 𑌇𑌤𑌿 𑌹𑍍𑌰𑌸𑍍𑌵𑍇𑌕𑌾𑌰𑍋 𑌵𑌿𑌹𑌿𑌤𑌃 𑌤𑌤𑌃 𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌣𑌿 𑌇𑌤𑌿 𑌵𑌾𑌚𑍍𑌯𑌮𑍍 । 𑌤𑌥𑍈𑌵 𑌸𑌾𑌕𑍍𑌷𑌿𑌣𑌿 । ↩

𑌅𑌥𑌾𑌨𑍍𑌯𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑌧𑌿𑌕𑌾𑌰𑌃 𑌸𑍍𑌵𑌪𑍍𑌰𑌦𑍇𑌷𑍍𑌵𑍇𑌵𑍋𑌤 𑌨𑍇𑌤𑌿 । 𑌐𑌤𑌿𑌹𑌾𑌸𑌿𑌕𑌭𑌾𑌷𑌾𑌶𑌾𑌸𑍍𑌤𑍍𑌰𑍇 𑌨𑌿𑌪𑍁𑌣𑌾 𑌮𑌨𑍍𑌵𑌤𑍇 𑌯𑌤𑍍 𑌪𑍍𑌰𑌥𑌮𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌯𑌾 𑌕𑌯𑌾𑌚𑌿𑌦𑍇𑌵 𑌦𑌾𑌕𑍍𑌷𑌿𑌣𑌾𑌤𑍍𑌯𑍇 𑌪𑍁𑌰𑌾 𑌵𑍍𑌯𑌾𑌹𑍍𑌰𑌿𑌯𑌤𑍇 𑌸𑍍𑌮 𑌤𑌸𑍍𑌯𑌾𑌶𑍍𑌚𑌚𑍍𑌛𑌾𑌯𑌾 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌮𑌪𑌿 𑌪𑌤𑌿𑌤𑌾 । 𑌮𑍀𑌨𑌕𑍁𑌟𑍁𑌮𑍍𑌬𑌨𑍀𑌰𑌾𑌦𑌯𑌃 𑌶𑌬𑍍𑌦𑌾𑌃 𑌪𑍍𑌰𑌥𑌮𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌾𑌤𑍍 𑌸𑌙𑍍𑌗𑍃𑌹𑍀𑌤𑌾 𑌇𑌤𑌿 𑌸𑍍𑌪𑌷𑍍𑌟𑌂 𑌯𑌤𑍋 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌸𑍁 𑌤𑌚𑍍𑌛𑌬𑍍𑌦𑍈𑌃 𑌸𑌮𑍍𑌬𑌦𑍍𑌧𑌾𑌨𑍀𑌤𑌰𑌾𑌣𑌿 𑌪𑌦𑌾𑌨𑍍𑌯𑌪𑌿 𑌪𑍍𑌰𑌯𑍁𑌜𑍍𑌯𑌨𑍍𑌤𑍇 𑌯𑍇𑌷𑌾𑌂 𑌵𑍍𑌯𑌵𑌹𑌾𑌰𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑍇 𑌨𑌾𑌸𑍍𑌤𑌿 । 𑌪𑍁𑌨𑌶𑍍𑌚 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌸𑍁 𑌕𑌤𑌿𑌪𑌯𑌾𑌸𑍁 𑌦𑌨𑍍𑌤𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌵𑌿𑌹𑌾𑌯 𑌵𑌾𑌯𑍁𑌕𑍋𑌶𑍀𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑍍𑌯𑌪𑌿 𑌪𑍍𑌰𑌸𑌿𑌦𑍍𑌧𑌾𑌨𑌿 । 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌸𑌮𑍍𑌬𑌦𑍍𑌧𑍇𑌷𑍁 𑌭𑌾𑌷𑌾𑌨𑍍𑌤𑌰𑍇𑌷𑍁 𑌯𑌵𑌨𑌾𑌦𑌿𑌷𑍁 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌾𑌮𑌪𑍍𑌯𑌭𑌾𑌵𑌾𑌤𑍍 𑌤𑌾𑌨𑌿 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌨𑌨𑍁 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌭𑍍𑌯𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌂 𑌪𑍍𑌰𑌵𑌿𑌷𑍍𑌟𑌾𑌨𑌿 𑌸𑍍𑌯𑍁𑌃 । 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑌧𑌿𑌕𑌾𑌰 𑌆𑌭𑌾𑌰𑌤𑌮𑌥𑌵𑌾 𑌨𑍍𑌯𑍂𑌨𑌾𑌤𑌿𑌨𑍍𑌯𑍂𑌨𑌮𑌾𑌦𑌾𑌕𑍍𑌷𑌿𑌣𑌾𑌤𑍍𑌯𑌂 𑌵𑌰𑍍𑌤𑌤𑍇 𑌇𑌤𑌿 𑌸𑌾𑌰𑌃 ।
        `,
            Deva: `
लेखेषु संस्कृतादितरा भारतीयभाषाः प्रादेशिकभाषाः प्रान्तीयभाषाः इत्यभिधीयन्ते । इत्थंप्रयोगेण लेखकस्योद्देशास्त्रयो भासन्ते । प्रथमो यत् संस्कृतभाषा भारतीयानां भारतदेशस्य च राष्ट्रभाषा पूर्वमासीत् साम्प्रतं वर्तते श्वो वा भवेत् । अन्य उद्देशः संस्कृताद् इतरासां भाषाणाम् अधिकारः स्वस्वप्रदेशेष्वेवेति । तृतीय उद्देशास्तु उक्ताभ्यां कारणाभ्यां संस्कृतभाषा भारतीयभाषासु सर्वप्रथमा चेति ।

४५तमस्य अहोबिलमठाधीशस्य ध्यानश्लोकः
कटाक्षः अस्य अस्तीति इन्नन्तं कटाक्षी । सम्बुद्धौ न ङिसम्बुद्धौ इत्यनेन कटाक्षिन् । देव्याः स्त्रीत्वात् ऋन्नेभ्यो ङीप् इत्यतः णत्वाच्च कटाक्षिणी सम्बुद्धौ एङ्ह्रस्वात्सम्बुद्धेः इति ह्रस्वेकारो विहितः ततः कटाक्षिणि इति वाच्यम् । तथैव साक्षिणि । ↩

अथान्यभाषाणामधिकारः स्वप्रदेष्वेवोत नेति । ऐतिहासिकभाषाशास्त्रे निपुणा मन्वते यत् प्रथमद्रामिडभाषया कयाचिदेव दाक्षिणात्ये पुरा व्याह्रियते स्म तस्याश्चच्छाया संस्कृतमपि पतिता । मीनकुटुम्बनीरादयः शब्दाः प्रथमद्रामिडात् सङ्गृहीता इति स्पष्टं यतो द्रामिडभाषासु तच्छब्दैः सम्बद्धानीतराणि पदान्यपि प्रयुज्यन्ते येषां व्यवहारः संस्कृते नास्ति । पुनश्च द्रामिडभाषासु कतिपयासु दन्त्याक्षराणि मूर्धन्याक्षराणि विहाय वायुकोशीयाक्षराण्यपि प्रसिद्धानि । संस्कृतसम्बद्धेषु भाषान्तरेषु यवनादिषु मूर्धन्याक्षराणामप्यभावात् तानि मूर्धन्याक्षराणि ननु द्रामिडभाषाभ्यः संस्कृतं प्रविष्टानि स्युः । द्रामिडभाषाणामधिकार आभारतमथवा न्यूनातिन्यूनमादाक्षिणात्यं वर्तते इति सारः ।
        `,
            Latn: `
lēkhēṣu saṁskr̥tāditarā bhāratīyabhāṣāḥ prādēśikabhāṣāḥ prāntīyabhāṣāḥ ityabhidhīyantē । itthaṁprayōgēṇa lēkhakasyōddēśāstrayō bhāsantē । prathamō yat saṁskr̥tabhāṣā bhāratīyānāṁ bhāratadēśasya ca rāṣṭrabhāṣā pūrvamāsīt sāmprataṁ vartatē śvō vā bhavēt । anya uddēśaḥ saṁskr̥tād itarāsāṁ bhāṣāṇām adhikāraḥ svasvapradēśēṣvēvēti । tr̥tīya uddēśāstu uktābhyāṁ kāraṇābhyāṁ saṁskr̥tabhāṣā bhāratīyabhāṣāsu sarvaprathamā cēti ।

45tamasya ahōbilamaṭhādhīśasya dhyānaślōkaḥ
kaṭākṣaḥ asya astīti innantaṁ kaṭākṣī । sambuddhau na ṅisambuddhau ityanēna kaṭākṣin । dēvyāḥ strītvāt r̥nnēbhyō ṅīp ityataḥ ṇatvācca kaṭākṣiṇī sambuddhau ēṅhrasvātsambuddhēḥ iti hrasvēkārō vihitaḥ tataḥ kaṭākṣiṇi iti vācyam । tathaiva sākṣiṇi । ↩

athānyabhāṣāṇāmadhikāraḥ svapradēṣvēvōta nēti । aitihāsikabhāṣāśāstrē nipuṇā manvatē yat prathamadrāmiḍabhāṣayā kayācidēva dākṣiṇātyē purā vyāhriyatē sma tasyāścacchāyā saṁskr̥tamapi patitā । mīnakuṭumbanīrādayaḥ śabdāḥ prathamadrāmiḍāt saṅgr̥hītā iti spaṣṭaṁ yatō drāmiḍabhāṣāsu tacchabdaiḥ sambaddhānītarāṇi padānyapi prayujyantē yēṣāṁ vyavahāraḥ saṁskr̥tē nāsti । punaśca drāmiḍabhāṣāsu katipayāsu dantyākṣarāṇi mūrdhanyākṣarāṇi vihāya vāyukōśīyākṣarāṇyapi prasiddhāni । saṁskr̥tasambaddhēṣu bhāṣāntarēṣu yavanādiṣu mūrdhanyākṣarāṇāmapyabhāvāt tāni mūrdhanyākṣarāṇi nanu drāmiḍabhāṣābhyaḥ saṁskr̥taṁ praviṣṭāni syuḥ । drāmiḍabhāṣāṇāmadhikāra ābhāratamathavā nyūnātinyūnamādākṣiṇātyaṁ vartatē iti sāraḥ ।
        `, };

        QUnit.test("Gran to Latn: sa text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Gran", "Latn", textWithPunctuationAndSpacing.Gran,),
                textWithPunctuationAndSpacing.Latn,);
        },);
        QUnit.test("Latn to Gran: sa text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Latn", "Gran", textWithPunctuationAndSpacing.Latn,),
                textWithPunctuationAndSpacing.Gran,);
        },);
        QUnit.test("Gran to Deva: sa text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Gran", "Deva", textWithPunctuationAndSpacing.Gran,),
                textWithPunctuationAndSpacing.Deva,);
        },);
        QUnit.test("Deva to Gran: sa text with punctuation, spacing, etc.", t => {
            t.deepEqual(
                transliterate("Deva", "Gran", textWithPunctuationAndSpacing.Deva,),
                textWithPunctuationAndSpacing.Gran,);
        },);
    },);
},);

QUnit.module("Invalid inputs", () => {
    QUnit.test("Invalid Ta text in Taml", t => {
        const invalidTaTamlText = "குறிப்பாக, இவ்விதிமுறை பெயர்களுக்கும் பொருந்தும்: இராமநாதபுரத்தைச் சேர்ந்தவர் இராமநாதபுரத்துச் சீனிவாச அய்யங்கார்.";
        t.throws(
            () => transliterate("Taml", "Latn", invalidTaTamlText,),
            err => err instanceof Error &&
                /^Unknown Taml character: .\.$/v.test(err.message,),
        );
    },);
    QUnit.test("Invalid Ta text in Latn", t => {
        const invalidTaLatnText = "குறிப்பாக, இவ்விதிமுறை பெயர்களுக்கும் பொருந்தும்: இராமநாதபுரத்தைச் சேர்ந்தவர் இராமநாதபுரத்துச் சீனிவாச அய்யங்கார்.";
        t.throws(
            () => transliterate("Latn", "Taml", invalidTaLatnText,),
            err => err instanceof Error &&
                /^Unknown Taml character: .\.$/v.test(err.message,),
        );
    },);

    QUnit.test.each("Invalid Tamil number", [
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

    const unsupportedScriptName = "sinh";
    QUnit.test("Unsupported source script", t => {
        t.throws(
            () => transliterate(unsupportedScriptName, "Latn", "",),
            err => err instanceof Error &&
                new RegExp(`^Unsupported or invalid source script: ${unsupportedScriptName}.$`, "v",).test(err.message,),
        );
    },);
    QUnit.test("Unsupported target script", t => {
        t.throws(
            () => transliterate("Latn", unsupportedScriptName, "",),
            err => err instanceof Error &&
                new RegExp(`^Unsupported or invalid target script: ${unsupportedScriptName}.$`, "v",).test(err.message,),
        );
    },);
},);
