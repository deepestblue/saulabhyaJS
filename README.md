# SaulabhyaJS

[![GitHub release (latest SemVer including pre‐releases)](https://img.shields.io/github/v/release/deepestblue/SaulabhyaJS?include_prereleases&sort=semver&style=for-the-badge)](https://github.com/deepestblue/SaulabhyaJS/releases) [![Licence: AGPL‐3.0](https://img.shields.io/github/license/deepestblue/SaulabhyaJS?label=LICENCE&style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0.en.html) [![GitHub issues](https://img.shields.io/github/issues/deepestblue/SaulabhyaJS?style=for-the-badge)](https://github.com/deepestblue/SaulabhyaJS/issues)

SaulabhyaJS is a Javascript transliteration library for Sanskrit and Tamil text to and from Brahmic scripts and the ISO‐15919 Latin transliteration scheme.

## Features

SaulabhyaJS Supports the following language/script combinations:

| Language |      Script     | ISO‐15924 name |
|:--------:|:---------------:|:--------------:|
|   Tamil  |      Tamil      |      Taml      |
|   Tamil  |    Malayalam    |      Mlym      |
|   Tamil  |     Kannada     |      Knda      |
|   Tamil  |      Telugu     |      Telu      |
|   Tamil  | ISO‐15919 Latin |      Latn      |
| Sanskrit |     Grantha     |      Gran      |
| Sanskrit |    Devanagari   |      Deva      |
| Sanskrit | ISO‐15919 Latin |      Latn      |

* Supports traditional Tamil/Malayalam numbers (not based on the place value system).
* Supports Yajurvedic accent marks for Sanskrit.
* Supports some commonly used Western punctuation marks (comma, question mark, exclamation mark, double quotes and full stop) for Tamil text.
* Supports some traditional symbols and signs for both Sanskrit and Tamil text. [If you find anything missing, please create an issue.]

## Usage

SaulabhyaJS is available as an ES module. The easiest way to get SaulabhyaJS in the browser is through jsDelivr. Simply

    import { transliterate } from "https://cdn.jsdelivr.net/gh/deepestblue/SaulabhyaJS@latest/dist/saulabhya.min.js";

and use it like:

    const sourceText = "சௌலப்பியம் எனும் இது ஓர் எழுத்து பெயர்ப்புக் கருவி."; // Valid tam text in Tamil script.
    const transliteratedLatinText = transliterate("Taml", "Latn", sourceText,); // The above source text in Latin script (ISO‐15919 transliteration format).
    const transliteratedTeluguText = transliterate("Taml", "Telu", sourceText,); // The above source text in Telugu script.

As above, `transliterate` takes as its 3rd parameter the source text and returns the transliterated text. The first two parameters represent the source and target scripts as [ISO‐15924 names](https://en.wikipedia.org/wiki/ISO_15924).

Optionally, `transliterate` also takes an `options` parameter. The supported options are below:

* a boolean `vedicAccents`, which determines whether Sanskrit text should be interpreted as including Vedic accents, i.e. does the text represent `cls` or `vsn`. Use it as follows:

    const sourceText = "𑍐 𑌶𑌾𑌨𑍍𑌤𑌿॒𑌶𑍍𑌶𑌾𑌨𑍍𑌤𑌿॒𑌶𑍍𑌶𑌾𑌨𑍍𑌤𑌿᳴𑌃 ।"; // Valid vsn text in Grantha script.
    const transliteratedLatinText = transliterate("Gran", "Latn", sourceText, { vedicAccents: true, },),; // The above source text in Latin script (ISO‐15919 transliteration format).
    const transliteratedDevanagariText = transliterate("Gran", "Deva", sourceText,); // The above source text in Devanagari script.

* a boolean `modifiedISO15919ForTam`, which determines whether Tamil text in ISO‐15919 should be the format as defined by ISO, or a modified format the author prefers. In the modified format,
    * `ṯ` is used for the alveolar stop instead of `ṟ`, in parallel to `ṭ` for the retroflex stop and `t` for the dental (and in parallel to `ṉ` for the alveolar nasal).
    * `ṛ` is used for the retroflex approximant instead of `ḻ`, in parallel to `r` (often pronounced as an alveolar approximant), and eschewing any `l` variant, which are used for liquids.
    * `ḻ` is used for the alveolar liquid, to distinguish it from the Indo‐Aryan dental liquid `l` (and in correspondence with the underscore diacritic in other alveolars).

* a string `omInISO15919`, which determines which Latin character is used for Om in ISO‐15919 to map against 𑍐 in Grantha, ௐ in Tamil and ॐ in Devanagari. The default is `Ω` (chosen because it's the symbol for “ohm”). Use the option as follows:

    const transliteratedLatinText = transliterate("Gran", "Latn", "𑍐 …", { omInISO15919: "🕉", },);
    const transliteratedGranthaText = transliterate("Latn", "Gran", "🕉 …", { omInISO15919: "🕉", },);

## Contributing

* Run tests via `npm test`. Set `PUPPETEER_EXECUTABLE_PATH` to your system Chrome as needed.
* Lint with `npm run lint`.
* Coverage: `npm run coverage` generates text summary. Coverage data is stored in `.nyc_output/`.

## History

SaulabhyaJS is a modernised and significantly enhanced JavaScript‐port of [SaulabhyaPerl](https://github.com/deepestblue/SaulabhyaPerl). I originally wrote SaulabhyaPerl circa 2007 as part of an abortive attempt to view music lyrics in the script of my choice.

In 2010, when I started blogging on blogspot, I was able to use [translipi](https://github.com/srikanthsubra/translipi) and its blogspot widget on my blog. Sometime in 2018, it looks like Google quietly removed support for blogspot widgets (breaking my blog). My pull‐request for Grantha support in translipi also has been stale for years now, confirming that translipi is now dead.

So I decided to port my old code to JavaScript. Originally included as part of my blog, it is now split out into its own library.

## Licence

[AGPL‐3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) © Ambarish Sridharanarayanan
