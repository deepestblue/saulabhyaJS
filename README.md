# SaulabhyaJS

[![License: AGPL-3.0](https://img.shields.io/github/license/deepestblue/SaulabhyaJS?label=LICENCE&style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0.en.html)

SaulabhyaJS is a Javascript transliteration library for Sanskrit and Tamil text to and from Brahmic scripts and the ISO‐15919 Latin transliteration scheme.

## Features

* Telugu, Tamil, Malayalam, Kannada and Latin (ISO‐15919) scripts for Tamil text.
* Grantha, Devanagari and Latin (ISO‐15919) scripts for Sanskrit text.

## Usage

Saulabhya is available as an ES6 module for browsers[^Node_support]. The easiest way to get Saulabhya is through jsdeliver. Simply

    import { transliterate } from "https://cdn.jsdelivr.net/gh/deepestblue/SaulabhyaJS@0.2.0/src/saulabhya.min.js";
    const sourceText = "சௌலப்பியம் எனும் இது ஓர் எழுத்து பெயர்ப்புக் கருவி."; // Valid ta text in taml script
    const transliteratedLatinText = transliterate("taml", "latn", sourceText); // The above source text in Latin script (ISO-15919 transliteration format)
    const transliteratedTeluguText = transliterate("taml", "telu", sourceText); // The above source text in Telugu script (ISO-15919 transliteration format)

### Supported languages and scripts:

## History

SaulabhyaJS is a JavaScript‐port of [SaulabhyaPerl](https://github.com/deepestblue/SaulabhyaPerl). I originally wrote SaulabhyaPerl circa 2007 as part of an abortive attempt to view Carnatic music lyrics in the script of my choice.

In 2010, when I started blogging on blogspot, I was able to use translipi and its blogspot widget on my blog. Sometime in 2018, it looks like Google quietly removed support for blogspot widgets (breaking my blog). My pull‐request for Grantha support in translipi also has been stale for years now, confirming that translipi is now dead.

So I decided to port my old code to JavaScript. Originally included as part of my blog, it is now split out into its own library.

## Licence

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) © Ambarish Sridharanarayanan

[^Node_support]: Node support forthcoming.

### TODOs

* Fix footnote.
* Fix Perl library link.
* Fix jsdelivr link to point to the latest version.
* Insert translipi link.
