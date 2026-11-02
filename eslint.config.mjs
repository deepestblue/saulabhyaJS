import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import qunit from "eslint-plugin-qunit";

// Devanagari through Sinhala, Vedic Extensions, Devanagari Extended, Grantha, Tamil Supplement.
const brahmicBlocks = String.raw`[\u{0900}-\u{0DFF}][\u{1CD0}-\u{1CFF}][\u{A8E0}-\u{A8FF}][\u{11300}-\u{1137F}][\u{11FC0}-\u{11FFF}]`;
const brahmicChar = new RegExp(`[${brahmicBlocks}]`, "v",);
const otherNonAsciiChar = new RegExp(String.raw`[\P{ASCII}--[${brahmicBlocks}]]`, "v",);

const normalizationRule = {
    meta: {
        type: "problem",
        messages: {
            NFC: "A literal with Brahmic characters must be in NFC.",
            NFD: "A literal without Brahmic characters must be in NFD.",
            mixed: "A literal must not mix Brahmic characters with other non‐ASCII ones.",
        },
    },
    create: context => {
        const check = (node, text,) => {
            const brahmic = brahmicChar.test(text,);
            if (brahmic && otherNonAsciiChar.test(text,)) {
                context.report({ node, messageId: "mixed", },);
                return;
            }
            const form = brahmic ? "NFC" : "NFD";
            if (text === text.normalize(form,)) {
                return;
            }
            context.report({ node, messageId: form, },);
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

export default [
    {
        ignores: ["dist/**", "node_modules/**",],
    },
    {
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
    },
    js.configs.all,
    {
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
            "no-magic-numbers": ["error", { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000,], },],
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
        },
    },
    stylistic.configs.customize({
        braceStyle: "1tbs",
        commaDangle: "always",
        indent: 4,
        jsx: false,
        quotes: "double",
        semi: true,
    },),
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/arrow-parens": ["error", "as-needed",],
            "@stylistic/max-statements-per-line": "off",
            "@stylistic/operator-linebreak": ["error", "after", { overrides: { "?": "after", ":": "before", }, },],
            "@stylistic/space-unary-ops": ["error", { overrides: { "!": true, }, },],
        },
    },
    {
        files: ["src/**/*.js",],
        plugins: {
            local: { rules: { normalization: normalizationRule, }, },
        },
        rules: {
            "local/normalization": "error",
        },
    },
];
