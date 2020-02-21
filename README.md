# SaulabhyaJS

[![License: AGPL-3.0](https://img.shields.io/github/license/deepestblue/SaulabhyaJS?label=LICENCE&style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0.en.html)

SaulabhyaJS is a Javascript transliteration library for Sanskrit and Tamil text to and from Brahmic scripts and the ISO‐15919 Latin transliteration scheme.

## Features

* Telugu, Tamil, Malayalam, Kannada and Latin (ISO‐15919) scripts for Tamil text.
* Grantha, Devanagari and Latin (ISO‐15919) scripts for Sanskrit text.

## Usage

Saulabhya is available as an ES6 module for browsers[^Node_support]. The easiest way to get Saulabhya is through jsdeliver. Simply

    import { brahmicToLatin, latinToBrahmic } from "https://cdn.jsdelivr.net/gh/deepestblue/SaulabhyaJS@0.2.0/src/saulabhya.min.js";

Both `brahmicToLatin` and `latinToBrahmic` take the name of the script and the text as parameters.

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
