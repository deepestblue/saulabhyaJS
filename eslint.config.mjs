import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import qunit from "eslint-plugin-qunit";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import html from "@html-eslint/eslint-plugin";
import yml from "eslint-plugin-yml";
import { defineConfig, includeIgnoreFile, } from "eslint/config";

const brahmicBlocks = String.raw`\u{0900}-\u{0DFF}\u{1CD0}-\u{1CFF}\u{A8E0}-\u{A8FF}\u{11300}-\u{1137F}\u{11FC0}-\u{11FFF}`;
const brahmicChar = new RegExp(`[${brahmicBlocks}]`, "v",);
const scriptRuns = new RegExp(`[${brahmicBlocks}]+|[^${brahmicBlocks}]+`, "gv",);
const formOf = run => (brahmicChar.test(run,) ? "NFC" : "NFD");

const normalisationRule = {
    meta: {
        type: "problem",
        messages: {
            NFC: "Brahmic text in a literal must be in NFC.",
            NFD: "Non‐Brahmic text in a literal must be in NFD.",
        },
    },
    create: context => {
        const check = (node, text,) => {
            const wrong = text.matchAll(scriptRuns,)
                .map(([run,],) => run,)
                .find(run => run !== run.normalize(formOf(run,),),);
            if (! wrong) {
                return;
            }
            context.report({ node, messageId: formOf(wrong,), },);
        };
        return {
            Literal: node => {
                if (typeof node.value === "string") {
                    check(node, node.value,);
                    return;
                }
                if (node.regex) {
                    check(node, node.regex.pattern,);
                }
            },
            TemplateElement: node => check(node, node.value.cooked ?? node.value.raw,),
        };
    },
};

// Keep each entry as narrow as the code points actually needed: an entry wider than that causes no lint error, so the extra characters it allows would go unnoticed.
const allowedCodePoints = {
    whitespace: String.raw`\u{000A}\u{0020}`,
    tamil: String.raw`\u{0B83}\u{0B85}-\u{0B8A}\u{0B8E}-\u{0B90}\u{0B92}-\u{0B95}\u{0B99}-\u{0B9A}\u{0B9E}-\u{0B9F}\u{0BA3}-\u{0BA4}\u{0BA8}-\u{0BAA}\u{0BAE}-\u{0BB5}\u{0BBE}-\u{0BC2}\u{0BC6}-\u{0BC8}\u{0BCA}-\u{0BCD}\u{0BD0}\u{0BE6}-\u{0BF2}\u{0BF8}\u{11FE9}`,
    malayalam: String.raw`\u{0D03}\u{0D05}-\u{0D0A}\u{0D0E}-\u{0D10}\u{0D12}-\u{0D15}\u{0D19}-\u{0D1A}\u{0D1E}-\u{0D1F}\u{0D23}-\u{0D24}\u{0D28}-\u{0D2A}\u{0D2E}-\u{0D35}\u{0D3E}-\u{0D42}\u{0D46}-\u{0D48}\u{0D4A}-\u{0D4D}\u{0D66}-\u{0D72}`,
    kannada: String.raw`\u{0C83}\u{0C85}-\u{0C8A}\u{0C8E}-\u{0C90}\u{0C92}-\u{0C95}\u{0C99}-\u{0C9A}\u{0C9E}-\u{0C9F}\u{0CA3}-\u{0CA4}\u{0CA8}-\u{0CAA}\u{0CAE}-\u{0CB3}\u{0CB5}\u{0CBE}-\u{0CC2}\u{0CC6}-\u{0CC8}\u{0CCA}-\u{0CCD}\u{0CDE}\u{0CE6}-\u{0CEF}`,
    telugu: String.raw`\u{0C03}\u{0C05}-\u{0C0A}\u{0C0E}-\u{0C10}\u{0C12}-\u{0C15}\u{0C19}-\u{0C1A}\u{0C1E}-\u{0C1F}\u{0C23}-\u{0C24}\u{0C28}-\u{0C2A}\u{0C2E}-\u{0C35}\u{0C3E}-\u{0C42}\u{0C46}-\u{0C48}\u{0C4A}-\u{0C4D}\u{0C66}-\u{0C6F}`,
    grantha: String.raw`\u{0951}-\u{0952}\u{0964}-\u{0965}\u{1CF2}\u{1CF4}\u{11301}-\u{11303}\u{11305}-\u{1130C}\u{1130F}-\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}-\u{11333}\u{11335}-\u{11339}\u{1133E}-\u{11344}\u{11347}-\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{1135D}-\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}`,
    devanagari: String.raw`\u{0901}-\u{0903}\u{0905}-\u{090C}\u{090F}-\u{0910}\u{0913}-\u{0928}\u{092A}-\u{0930}\u{0932}-\u{0933}\u{0935}-\u{0939}\u{093E}-\u{0944}\u{0947}-\u{0948}\u{094B}-\u{094D}\u{0950}\u{0960}-\u{0963}\u{0966}-\u{096F}\u{1CDA}\u{1CF5}-\u{1CF6}\u{A8E0}-\u{A8E6}\u{A8EA}\u{A8EC}-\u{A8EE}\u{A8F0}\u{A8F3}-\u{A8F4}\u{1F549}`,
    latin: String.raw`\u{0021}-\u{0026}\u{0028}-\u{007D}\u{00A9}\u{00B2}\u{00B3}\u{00B9}\u{00D7}\u{02BC}\u{0300}-\u{0301}\u{0303}-\u{0304}\u{0307}\u{030F}-\u{0310}\u{0323}\u{0325}\u{032E}\u{0331}\u{0363}\u{036B}\u{036E}\u{1DDC}\u{1DE0}\u{1DEE}\u{2010}\u{2013}\u{2018}\u{2019}\u{201C}\u{201D}\u{2026}\u{2070}\u{2074}\u{2075}\u{2076}\u{2260}\u{3003}`,
    greek: String.raw`\u{03A9}`,
    currency: String.raw`\u{0BF9}\u{20A8}\u{20B9}`,
    arrows: String.raw`\u{2192}\u{21A9}`,
    boxDrawing: String.raw`\u{2550}\u{2551}\u{2554}\u{2557}\u{255A}\u{255D}\u{2560}\u{2563}\u{2566}\u{2569}\u{256C}`,
};

const disallowedCodePoint = new RegExp(`[^${Object.values(allowedCodePoints,).join("",)}]`, "gv",);

const allowListRule = {
    meta: {
        type: "problem",
        messages: {
            BOM: "A byte‐order mark is not in the allow‐list.",
            disallowed: "{{codePoint}} is not in the allow‐list.",
        },
    },
    // The whole text is scanned during create and no visitors are needed, to avoid a situation where the visitors could get called multiple times.
    create: context => {
        const { sourceCode, } = context;
        if (sourceCode.hasBOM) {
            context.report({ loc: sourceCode.getLocFromIndex(0,), messageId: "BOM", },);
        }
        sourceCode.text.matchAll(disallowedCodePoint,)
            .map(({ 0: char, index, },) => ({
                loc: {
                    start: sourceCode.getLocFromIndex(index,),
                    end: sourceCode.getLocFromIndex(index + char.length,),
                },
                messageId: "disallowed",
                data: { codePoint: `U+${char.codePointAt(0,).toString(16,).toUpperCase().padStart(4, "0",)}`, },
            }),)
            .forEach(descriptor => context.report(descriptor,),);
        return {};
    },
};

const local = {
    rules: {
        allowList: allowListRule,
        normalisation: normalisationRule,
    },
};

export default defineConfig([
    includeIgnoreFile(`${import.meta.dirname}/.gitignore`,),
    {
        files: ["**/*.js", "**/*.mjs",],
        extends: [
            js.configs.all,
            stylistic.configs.all,
            stylistic.configs.customize({
                braceStyle: "1tbs",
                commaDangle: "always",
                indent: 4,
                jsx: false,
                quotes: "double",
                semi: true,
            },),
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                QUnit: "readonly",
            },
            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                },
            },
        },
        plugins: {
            qunit,
        },
        rules: {
            "complexity": ["error", { max: 50, variant: "modified", },],
            "func-names": "off",
            "id-length": "off",
            "max-depth": ["error", 10,],
            "max-lines-per-function": "off",
            "max-lines": "off",
            "max-params": ["error", 10,],
            "max-statements": "off",
            "no-alert": "off",
            "no-console": "off",
            "no-continue": "off",
            "no-duplicate-imports": "off",
            "no-inline-comments": "off",
            "no-magic-numbers": "off",
            "no-misleading-character-class": "off",
            "no-multi-assign": ["error", { ignoreNonDeclaration: true, },],
            "no-negated-condition": "off",
            "no-param-reassign": "off",
            "no-plusplus": ["error", { allowForLoopAfterthoughts: true, },],
            "no-shadow": ["error", { builtinGlobals: true, },],
            "no-ternary": "off",
            "no-underscore-dangle": ["error", { allow: ["__coverage__",], enforceInClassFields: true, enforceInMethodNames: true, },],
            "one-var": "off",
            "require-unicode-regexp": ["error", { requireFlag: "v", },],
            "sort-imports": "off",
            "sort-keys": "off",
            ...qunit.configs.recommended.rules,
            "@stylistic/arrow-parens": ["error", "as-needed",],
            "@stylistic/wrap-regex": "off",
            "@stylistic/object-property-newline": "off",
            "@stylistic/array-element-newline": "off",
            "@stylistic/function-call-argument-newline": "off",
            "@stylistic/max-statements-per-line": "off",
            "@stylistic/newline-per-chained-call": "off",
            "@stylistic/operator-linebreak": ["error", "after", { overrides: { "?": "after", ":": "before", }, },],
            "@stylistic/list-style": ["error", { overrides: { ArrayExpression: "off", }, },],
            "@stylistic/space-unary-ops": ["error", { overrides: { "!": true, }, },],
        },
    },
    {
        files: ["src/**/*.js",],
        plugins: {
            local,
        },
        rules: {
            "local/normalisation": "error",
        },
    },
    {
        files: ["**/*.md",],
        language: "markdown/gfm",
        plugins: {
            markdown,
        },
    },
    {
        files: ["**/*.json",],
        language: "json/json",
        plugins: {
            json,
        },
    },
    {
        files: ["**/*.jsonc",],
        language: "json/jsonc",
        plugins: {
            json,
        },
    },
    {
        files: ["**/*.yml",],
        language: "yml/yaml",
        plugins: {
            yml,
        },
    },
    {
        files: ["**/*.html",],
        language: "html/html",
        plugins: {
            html,
        },
    },
    {
        plugins: {
            local,
        },
        rules: {
            "local/allowList": "error",
        },
    },
],);
