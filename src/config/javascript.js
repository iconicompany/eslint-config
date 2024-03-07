import js from "@eslint/js";
import eslint from "eslint-config-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import rules from "./../rules/index.js";

const ECMA_VERSION = 2022;

export default [
  js.configs.recommended,
  ...eslint,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: ECMA_VERSION,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
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
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: false,
          require: {
            FunctionExpression: true,
            ArrowFunctionExpression: true,
            FunctionDeclaration: true,
            MethodDefinition: true,
          },
        },
      ],
      "jsdoc/check-access": "error",
      "jsdoc/check-indentation": "error",
      "jsdoc/check-types": "error",
      "jsdoc/valid-types": "error",
      "jsdoc/require-description": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/require-returns-description": "off",
      "jsdoc/no-blank-block-descriptions": "error",
    },
  },
];
