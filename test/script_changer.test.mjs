/* global QUnit:false */

import { brahmiyaToLatn, latnToBrahmiya } from "http://localhost:8000/src/script_changer.mjs";

const tamlData = {
    taml : [
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
    ],
    latn : [
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
    ],
};

QUnit.module("தமிழ் → Latin");
[...Array(tamlData.taml.length).keys()].forEach(function(i) {
    QUnit.test(tamlData.taml[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("taml", tamlData.taml[i], false),
            tamlData.latn[i]);
    });
});

QUnit.module("Latin → தமிழ்");
[...Array(tamlData.latn.length).keys()].forEach(function(i) {
    QUnit.test(tamlData.latn[i], function(assert) {
        assert.deepEqual(
            latnToBrahmiya("taml", tamlData.latn[i], false),
            tamlData.taml[i]);
    });
});

const teluData = {
    telu : [
        "అ ఆ ఇ ఈ ఉ ఊ ఎ ఏ ఐ ఒ ఓ ఔ",
        "క కా కి కీ కు కూ కె కే కై కొ కో కౌ",
        "క్ ఙ్ చ్ ఞ్ ట్ ణ్ ఱ్ ఩్ త్ న్ ప్ మ్ య్ ర్ ల్ వ్ ఴ్ ళ్",
        "క ఙ చ ఞ ట ణ ఱ ఩ త న ప మ య ర ల వ ఴ ళ",
    ],
    latn : [
        "a ā i ī u ū e ē ai o ō au",
        "ka kā ki kī ku kū ke kē kai ko kō kau",
        "k ṅ c ñ ṭ ṇ ṯ ṉ t n p m y r ḻ v ṛ ḷ",
        "ka ṅa ca ña ṭa ṇa ṯa ṉa ta na pa ma ya ra ḻa va ṛa ḷa",
    ],
};

QUnit.module("తెలుగు → Latin");
[...Array(teluData.telu.length).keys()].forEach(function(i) {
    QUnit.test(teluData.telu[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("telu", teluData.telu[i], false),
            teluData.latn[i]);
    });
});

QUnit.module("Latin → తెలుగు");
[...Array(teluData.latn.length).keys()].forEach(function(i) {
    QUnit.test(teluData.latn[i], function(assert) {
        assert.deepEqual(
            latnToBrahmiya("telu", teluData.latn[i], false),
            teluData.telu[i]);
    });
});

const devaData = {
    deva : [
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
    latn : [
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

QUnit.module("देवनागरी → Latin");
[...Array(devaData.deva.length).keys()].forEach(function(i) {
    QUnit.test(devaData.deva[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("deva", devaData.deva[i], false),
            devaData.latn[i]);
    });
});

QUnit.module("Latin → देवनागरी");
[...Array(devaData.latn.length).keys()].forEach(function(i) {
    QUnit.test(devaData.latn[i], function(assert) {
        assert.deepEqual(
            latnToBrahmiya("deva", devaData.latn[i], false),
            devaData.deva[i]);
    });
});

QUnit.module("Numbers");
const numData = {
    taml : [
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
    telu : [
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
    deva : [
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
    latn : [
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

[...Array(numData.latn.length).keys()].forEach(function(i) {
    QUnit.test("தமிழ் " + numData.taml[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("taml", numData.taml[i], true),
            numData.latn[i]);
        });
    QUnit.test(numData.latn[i] + " → தமிழ்", function(assert) {
            assert.deepEqual(
            latnToBrahmiya("taml", numData.latn[i], true),
            numData.taml[i]);
        });
    QUnit.test("తెలుగు " + numData.telu[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("telu", numData.telu[i], true),
            numData.latn[i]);
        });
    QUnit.test(numData.latn[i] + " → తెలుగు", function(assert) {
        assert.deepEqual(
            latnToBrahmiya("telu", numData.latn[i], true),
            numData.telu[i]);
        });
    QUnit.test("देवनागरी " + numData.deva[i], function(assert) {
        assert.deepEqual(
            brahmiyaToLatn("deva", numData.deva[i], true),
            numData.latn[i]);
        });
    QUnit.test(numData.latn[i] + " → देवनागरी", function(assert) {
        assert.deepEqual(
            latnToBrahmiya("deva", numData.latn[i], true),
            numData.deva[i]);
    });
});

QUnit.module("Integration");
const tamilTextWithPunctuationAndSpacing = {
    taml : `பெரும்பாலும் மகரத்தில் முடியும் சொற்களுக்கு அத்துச்சாரியை வரும். மரத்தை நோக்கினேன். பழத்தினது சுவை. ஆயிரத்தில் ஒருவன். மகரத்தில் முடியும்.

இலக்கணம் பயிலும்பொழுது எட்டு வேற்றுமையுருபுகள், அதாவது ஐ ஆல் ஓடு உடன் முதலியன, பயின்றேன். சில ஆண்டாக வடமொழி கற்கிறேன். வடமொழியிலும் வேற்றுமையுருபுகள் உள்ளன. மொழியை விளக்க இலக்கணம் எனில், வடமொழியில் பெயர்ச்சொற்களை விளக்க வேற்றுமையுருபுகள் இன்றியமையாதவை. உரையிலோ செய்யுளிலோ பெயர்ச்சொல்லது முடிவில் வரும் பிற்சேர்க்கைகள் எட்டே. அவ்வெட்டது மூலம் பெயர்ச்சொல் எல்லாமே எட்டாக வேறுபடும். இப்பிற்சேர்க்கைதான் வேறுபாட்டது உருபகளென கருதப்படுகின்றன.

குறிப்பாக, இவ்விதிமுறை பெயர்களுக்கும் பொருந்தும். இராமநாதபுரத்தைச் சேர்ந்தவர் “இராமநாதபுரத்துச் சீனிவாச அய்யங்கார்”. மகாராசபுரத்தில் பிறந்தவர் “மகாராசபுரத்து விசுவநாத அய்யர்”. கும்பகோணத்தில் வாழ்ந்தவர் “கும்பகோணத்து இராசமாணிக்கம் பிள்ளை”. மாம்பலத்தில் வசிக்கும் தாத்தா “மாம்பலத்துத் தாத்தா”. பல்லாவரத்தில் வாழும் மாமன் “பல்லாவரத்து மாமன்”.

சந்தடியென்று மறந்தாயோ! இங்கில்லையோ! எதற்கு தயை வராதுடா? இராமச்சந்திரா!
`,
    latn : `perumpāḻum makarattiḻ muṭiyum coṯkaḷukku attuccāriyai varum. marattai nōkkiṉēṉ. paṛattiṉatu cuvai. āyirattiḻ oruvaṉ. makarattiḻ muṭiyum.

iḻakkaṇam payiḻumpoṛutu eṭṭu vēṯṯumaiyurupukaḷ, atāvatu ai āḻ ōṭu uṭaṉ mutaḻiyaṉa, payiṉṯēṉ. ciḻa āṇṭāka vaṭamoṛi kaṯkiṯēṉ. vaṭamoṛiyiḻum vēṯṯumaiyurupukaḷ uḷḷaṉa. moṛiyai viḷakka iḻakkaṇam eṉiḻ, vaṭamoṛiyiḻ peyarccoṯkaḷai viḷakka vēṯṯumaiyurupukaḷ iṉṯiyamaiyātavai. uraiyiḻō ceyyuḷiḻō peyarccoḻḻatu muṭiviḻ varum piṯcērkkaikaḷ eṭṭē. avveṭṭatu mūḻam peyarccoḻ eḻḻāmē eṭṭāka vēṯupaṭum. ippiṯcērkkaitāṉ vēṯupāṭṭatu urupakaḷeṉa karutappaṭukiṉṯaṉa.

kuṯippāka, ivvitimuṯai peyarkaḷukkum poruntum. irāmanātapurattaic cērntavar “irāmanātapurattuc cīṉivāca ayyaṅkār”. makārācapurattiḻ piṯantavar “makārācapurattu vicuvanāta ayyar”. kumpakōṇattiḻ vāṛntavar “kumpakōṇattu irācamāṇikkam piḷḷai”. māmpaḻattiḻ vacikkum tāttā “māmpaḻattut tāttā”. paḻḻāvarattiḻ vāṛum māmaṉ “paḻḻāvarattu māmaṉ”.

cantaṭiyeṉṯu maṯantāyō! iṅkiḻḻaiyō! etaṯku tayai varātuṭā? irāmaccantirā!
`,};
QUnit.test("To Latin: தமிழ் text with punctuation, spacing, etc.", function(assert) {
    assert.deepEqual(
        brahmiyaToLatn("taml", tamilTextWithPunctuationAndSpacing.taml, false),
            tamilTextWithPunctuationAndSpacing.latn);
    });
QUnit.test("From Latin: தமிழ் text with punctuation, spacing, etc.", function(assert) {
    assert.deepEqual(
        latnToBrahmiya("taml", tamilTextWithPunctuationAndSpacing.latn, false),
            tamilTextWithPunctuationAndSpacing.taml);
    });

const granthaTextWithPunctuationAndSpacing = {
    gran : `𑌲𑍇𑌖𑍇𑌷𑍁 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌾𑌦𑌿𑌤𑌰𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌃 “𑌪𑍍𑌰𑌾𑌦𑍇𑌶𑌿𑌕𑌭𑌾𑌷𑌾𑌃” “𑌪𑍍𑌰𑌾𑌨𑍍𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌃” 𑌇𑌤𑍍𑌯𑌭𑌿𑌧𑍀𑌯𑌨𑍍𑌤𑍇 । 𑌇𑌤𑍍𑌥𑌂𑌪𑍍𑌰𑌯𑍋𑌗𑍇𑌣 𑌲𑍇𑌖𑌕𑌸𑍍𑌯𑍋𑌦𑍍𑌦𑍇𑌶𑌾𑌸𑍍𑌤𑍍𑌰𑌯𑍋 𑌭𑌾𑌸𑌨𑍍𑌤𑍇 । 𑌪𑍍𑌰𑌥𑌮𑍋 𑌯𑌤𑍍 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌭𑌾𑌷𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌾𑌨𑌾𑌂 𑌭𑌾𑌰𑌤𑌦𑍇𑌶𑌸𑍍𑌯 𑌚 𑌰𑌾𑌷𑍍𑌟𑍍𑌰𑌭𑌾𑌷𑌾 𑌪𑍂𑌰𑍍𑌵𑌮𑌾𑌸𑍀𑌤𑍍 𑌸𑌾𑌮𑍍𑌪𑍍𑌰𑌤𑌂 𑌵𑌰𑍍𑌤𑌤𑍇 𑌶𑍍𑌵𑍋 𑌵𑌾 𑌭𑌵𑍇𑌤𑍍 । 𑌅𑌨𑍍𑌯 𑌉𑌦𑍍𑌦𑍇𑌶𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌾𑌦𑍍 𑌇𑌤𑌰𑌾𑌸𑌾𑌂 𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑍍 𑌅𑌧𑌿𑌕𑌾𑌰𑌃 𑌸𑍍𑌵𑌸𑍍𑌵𑌪𑍍𑌰𑌦𑍇𑌶𑍇𑌷𑍍𑌵𑍇𑌵𑍇𑌤𑌿 । 𑌤𑍃𑌤𑍀𑌯 𑌉𑌦𑍍𑌦𑍇𑌶𑌾𑌸𑍍𑌤𑍁 𑌉𑌕𑍍𑌤𑌾𑌭𑍍𑌯𑌾𑌂 𑌕𑌾𑌰𑌣𑌾𑌭𑍍𑌯𑌾𑌂 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌭𑌾𑌷𑌾 𑌭𑌾𑌰𑌤𑍀𑌯𑌭𑌾𑌷𑌾𑌸𑍁 𑌸𑌰𑍍𑌵𑌪𑍍𑌰𑌥𑌮𑌾 𑌚𑍇𑌤𑌿 ।

    𑌕𑌟𑌾𑌕𑍍𑌷𑌃 𑌅𑌸𑍍𑌯 𑌅𑌸𑍍𑌤𑍀𑌤𑌿 𑌇𑌨𑍍𑌨𑌨𑍍𑌤𑌂 “𑌕𑌟𑌾𑌕𑍍𑌷𑍀” । 𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌 “𑌨 𑌙𑌿𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌” 𑌇𑌤𑍍𑌯𑌨𑍇𑌨 “𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌨𑍍” । 𑌦𑍇𑌵𑍍𑌯𑌾𑌃 𑌸𑍍𑌤𑍍𑌰𑍀𑌤𑍍𑌵𑌾𑌤𑍍 “𑌋𑌨𑍍𑌨𑍇𑌭𑍍𑌯𑍋 𑌙𑍀𑌪𑍍” 𑌇𑌤𑍍𑌯𑌤𑌃 𑌣𑌤𑍍𑌵𑌾𑌚𑍍𑌚 “𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌣𑍀”, 𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍌 “𑌏𑌙𑍍𑌹𑍍𑌰𑌸𑍍𑌵𑌾𑌤𑍍𑌸𑌮𑍍𑌬𑍁𑌦𑍍𑌧𑍇𑌃” 𑌇𑌤𑌿 𑌹𑍍𑌰𑌸𑍍𑌵𑍇𑌕𑌾𑌰𑍋 𑌵𑌿𑌹𑌿𑌤𑌃, 𑌤𑌤𑌃 “𑌕𑌟𑌾𑌕𑍍𑌷𑌿𑌣𑌿” 𑌇𑌤𑌿 𑌵𑌾𑌚𑍍𑌯𑌮𑍍 । 𑌤𑌥𑍈𑌵 “𑌸𑌾𑌕𑍍𑌷𑌿𑌣𑌿” । ↩

    𑌅𑌥𑌾𑌨𑍍𑌯𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑌧𑌿𑌕𑌾𑌰𑌃 𑌸𑍍𑌵𑌪𑍍𑌰𑌦𑍇𑌷𑍍𑌵𑍇𑌵𑍋𑌤 𑌨𑍇𑌤𑌿 । 𑌐𑌤𑌿𑌹𑌾𑌸𑌿𑌕𑌭𑌾𑌷𑌾𑌶𑌾𑌸𑍍𑌤𑍍𑌰𑍇 𑌨𑌿𑌪𑍁𑌣𑌾 𑌮𑌨𑍍𑌵𑌤𑍇 𑌯𑌤𑍍 𑌪𑍍𑌰𑌥𑌮𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌯𑌾 𑌕𑌯𑌾𑌚𑌿𑌦𑍇𑌵 𑌦𑌾𑌕𑍍𑌷𑌿𑌣𑌾𑌤𑍍𑌯𑍇 𑌪𑍁𑌰𑌾 𑌵𑍍𑌯𑌾𑌹𑍍𑌰𑌿𑌯𑌤𑍇 𑌸𑍍𑌮 𑌤𑌸𑍍𑌯𑌾𑌶𑍍𑌚𑌚𑍍𑌛𑌾𑌯𑌾 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌮𑌪𑌿 𑌪𑌤𑌿𑌤𑌾 । “𑌮𑍀𑌨” “𑌕𑍁𑌟𑍁𑌮𑍍𑌬” “𑌨𑍀𑌰” 𑌇𑌤𑍍𑌯𑌾𑌦𑌯𑌃 𑌶𑌬𑍍𑌦𑌾𑌃 𑌪𑍍𑌰𑌥𑌮𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌾𑌤𑍍 𑌸𑌙𑍍𑌗𑍃𑌹𑍀𑌤𑌾 𑌇𑌤𑌿 𑌸𑍍𑌪𑌷𑍍𑌟𑌂 𑌯𑌤𑍋 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌸𑍁 𑌤𑌚𑍍𑌛𑌬𑍍𑌦𑍈𑌃 𑌸𑌮𑍍𑌬𑌦𑍍𑌧𑌾𑌨𑍀𑌤𑌰𑌾𑌣𑌿 𑌪𑌦𑌾𑌨𑍍𑌯𑌪𑌿 𑌪𑍍𑌰𑌯𑍁𑌜𑍍𑌯𑌨𑍍𑌤𑍇 𑌯𑍇𑌷𑌾𑌂 𑌵𑍍𑌯𑌵𑌹𑌾𑌰𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑍇 𑌨𑌾𑌸𑍍𑌤𑌿 । 𑌪𑍁𑌨𑌶𑍍𑌚 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌸𑍁 𑌕𑌤𑌿𑌪𑌯𑌾𑌸𑍁 𑌦𑌨𑍍𑌤𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌵𑌿𑌹𑌾𑌯 𑌵𑌾𑌯𑍁𑌕𑍋𑌶𑍀𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑍍𑌯𑌪𑌿 𑌪𑍍𑌰𑌸𑌿𑌦𑍍𑌧𑌾𑌨𑌿 । 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌸𑌮𑍍𑌬𑌦𑍍𑌧𑍇𑌷𑍁 𑌭𑌾𑌷𑌾𑌨𑍍𑌤𑌰𑍇𑌷𑍁 𑌯𑌵𑌨𑌾𑌦𑌿𑌷𑍁 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌾𑌮𑌪𑍍𑌯𑌭𑌾𑌵𑌾𑌤𑍍 𑌤𑌾𑌨𑌿 𑌮𑍂𑌰𑍍𑌧𑌨𑍍𑌯𑌾𑌕𑍍𑌷𑌰𑌾𑌣𑌿 𑌨𑌨𑍁 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌭𑍍𑌯𑌃 𑌸𑌂𑌸𑍍𑌕𑍃𑌤𑌂 𑌪𑍍𑌰𑌵𑌿𑌷𑍍𑌟𑌾𑌨𑌿 𑌸𑍍𑌯𑍁𑌃 । 𑌦𑍍𑌰𑌾𑌮𑌿𑌡𑌭𑌾𑌷𑌾𑌣𑌾𑌮𑌧𑌿𑌕𑌾𑌰 𑌆𑌭𑌾𑌰𑌤𑌮𑌥𑌵𑌾 𑌨𑍍𑌯𑍂𑌨𑌾𑌤𑌿𑌨𑍍𑌯𑍂𑌨𑌮𑌾𑌦𑌾𑌕𑍍𑌷𑌿𑌣𑌾𑌤𑍍𑌯𑌂 𑌵𑌰𑍍𑌤𑌤𑍇 𑌇𑌤𑌿 𑌸𑌾𑌰𑌃 ।
`,
    latn : `lēkhēṣu saṁskr̥tāditarā bhāratīyabhāṣāḥ “prādēśikabhāṣāḥ” “prāntīyabhāṣāḥ” ityabhidhīyantē । itthaṁprayōgēṇa lēkhakasyōddēśāstrayō bhāsantē । prathamō yat saṁskr̥tabhāṣā bhāratīyānāṁ bhāratadēśasya ca rāṣṭrabhāṣā pūrvamāsīt sāmprataṁ vartatē śvō vā bhavēt । anya uddēśaḥ saṁskr̥tād itarāsāṁ bhāṣāṇām adhikāraḥ svasvapradēśēṣvēvēti । tr̥tīya uddēśāstu uktābhyāṁ kāraṇābhyāṁ saṁskr̥tabhāṣā bhāratīyabhāṣāsu sarvaprathamā cēti ।

    kaṭākṣaḥ asya astīti innantaṁ “kaṭākṣī” । sambuddhau “na ṅisambuddhau” ityanēna “kaṭākṣin” । dēvyāḥ strītvāt “r̥nnēbhyō ṅīp” ityataḥ ṇatvācca “kaṭākṣiṇī”, sambuddhau “ēṅhrasvātsambuddhēḥ” iti hrasvēkārō vihitaḥ, tataḥ “kaṭākṣiṇi” iti vācyam । tathaiva “sākṣiṇi” । ↩

    athānyabhāṣāṇāmadhikāraḥ svapradēṣvēvōta nēti । aitihāsikabhāṣāśāstrē nipuṇā manvatē yat prathamadrāmiḍabhāṣayā kayācidēva dākṣiṇātyē purā vyāhriyatē sma tasyāścacchāyā saṁskr̥tamapi patitā । “mīna” “kuṭumba” “nīra” ityādayaḥ śabdāḥ prathamadrāmiḍāt saṅgr̥hītā iti spaṣṭaṁ yatō drāmiḍabhāṣāsu tacchabdaiḥ sambaddhānītarāṇi padānyapi prayujyantē yēṣāṁ vyavahāraḥ saṁskr̥tē nāsti । punaśca drāmiḍabhāṣāsu katipayāsu dantyākṣarāṇi mūrdhanyākṣarāṇi vihāya vāyukōśīyākṣarāṇyapi prasiddhāni । saṁskr̥tasambaddhēṣu bhāṣāntarēṣu yavanādiṣu mūrdhanyākṣarāṇāmapyabhāvāt tāni mūrdhanyākṣarāṇi nanu drāmiḍabhāṣābhyaḥ saṁskr̥taṁ praviṣṭāni syuḥ । drāmiḍabhāṣāṇāmadhikāra ābhāratamathavā nyūnātinyūnamādākṣiṇātyaṁ vartatē iti sāraḥ ।
`,};

QUnit.test("To Latin: 𑌗𑍍𑌰𑌨𑍍𑌥 text with punctuation, spacing, etc.", function(assert) {
    assert.deepEqual(
        brahmiyaToLatn("gran", granthaTextWithPunctuationAndSpacing.gran, false),
            granthaTextWithPunctuationAndSpacing.latn);
    });
QUnit.test("From Latin: 𑌗𑍍𑌰𑌨𑍍𑌥 text with punctuation, spacing, etc.", function(assert) {
    assert.deepEqual(
        latnToBrahmiya("gran", granthaTextWithPunctuationAndSpacing.latn, false),
            granthaTextWithPunctuationAndSpacing.gran);
    });
