# SaulabhyaJS

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/deepestblue/SaulabhyaJS?include_prereleases&sort=semver&style=for-the-badge)](https://github.com/deepestblue/SaulabhyaJS/releases) [![Licence: AGPL‐3.0](https://img.shields.io/github/license/deepestblue/SaulabhyaJS?label=LICENCE&style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0.en.html) [![GitHub issues](https://img.shields.io/github/issues/deepestblue/SaulabhyaJS?style=for-the-badge)](https://github.com/deepestblue/SaulabhyaJS/issues)

SaulabhyaJS is a Javascript transliteration library for Sanskrit and Tamil text to and from Brahmic scripts and the ISO‐15919 Latin transliteration scheme.

## Usage

Saulabhya is available as an ES2015 module for browsers (Node support is forthcoming). The easiest way to get Saulabhya is through jsdeliver. Simply

    import { transliterate } from "https://cdn.jsdelivr.net/gh/deepestblue/SaulabhyaJS@latest/src/saulabhya.min.js";

and use it like:

    const sourceText = "சௌலப்பியம் எனும் இது ஓர் எழுத்து பெயர்ப்புக் கருவி."; // Valid ta text in Tamil script
    const transliteratedLatinText = transliterate("Taml", "Latn", sourceText); // The above source text in Latin script (ISO‐15919 transliteration format)
    const transliteratedTeluguText = transliterate("Taml", "Telu", sourceText); // The above source text in Telugu script

As above, `transliterate` takes as its 3rd parameter the source text and returns the transliterated text. The first two parameters represent the source and target scripts as [ISO‐15924 names](https://en.wikipedia.org/wiki/ISO_15924).

## Features

* Supports the following language/script combinations:

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
* Supports some commonly used Western punctuation marks (comma, question mark, exclamation mark, double quotes and full stop) for Tamil text.
* Supports some traditional symbols and signs for both Sanskrit and Tamil text. [If you find anything missing, please create an issue.]

## Contributing

* Add test coverage to `saulabhya.test.js`.
* Launch `test/test.html` in a browser to ensure all tests pass.
* Also run `jshint .`

## History

SaulabhyaJS is a modernised and enhanced JavaScript‐port of [SaulabhyaPerl](https://github.com/deepestblue/SaulabhyaPerl). I originally wrote SaulabhyaPerl circa 2007 as part of an abortive attempt to view music lyrics in the script of my choice.

In 2010, when I started blogging on blogspot, I was able to use [translipi](https://github.com/srikanthsubra/translipi) and its blogspot widget on my blog. Sometime in 2018, it looks like Google quietly removed support for blogspot widgets (breaking my blog). My pull‐request for Grantha support in translipi also has been stale for years now, confirming that translipi is now dead.

So I decided to port my old code to JavaScript. Originally included as part of my blog, it is now split out into its own library.

## Licence

[AGPL‐3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) © Ambarish Sridharanarayanan
