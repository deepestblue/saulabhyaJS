import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import qunit from "eslint-plugin-qunit";

export default [
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
            "max-lines-per-function": "off",
            "max-lines": "off",
            "max-params": ["error", 10,],
            "max-statements": "off",
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
            "one-var": "off",
            "require-unicode-regexp": ["error", { requireFlag: "v", },],
            "sort-keys": "off",
            "sort-imports": "off",
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
            "@stylistic/space-unary-ops": ["error", { overrides: { "!": true, }, },],
            "@stylistic/operator-linebreak": ["error", "after", { overrides: { "?": "after", ":": "before", }, },],
        },
    },
];
