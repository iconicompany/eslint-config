import js from "@eslint/js";
import eslint from "eslint-config-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import rules from "./../rules/index.js";

const ECMA_VERSION = 2021;

export default [
  js.configs.recommended,
  ...eslint,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: ECMA_VERSION,
      sourceType: "module",
    },
    plugins: {
      iconicompany: rules,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-console": "off",
      "arrow-body-style": "warn",
      "prefer-arrow-callback": "warn",
      "no-tabs": ["error", { allowIndentationTabs: true }],
      indent: ["error", 2, { SwitchCase: 1 }],
      "comma-dangle": ["error", "always-multiline"],
      "lines-around-comment": "off",
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|trace)$/]",
          message: "Unexpected property on console object was called",
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "n/no-unpublished-import": "off",
      "iconicompany/avoid-naming": [
        "warn",
        {
          toAvoid: ["data"],
        },
      ],
    },
  },
];
