import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs"],
    plugins: {
      prettier,
    },
    rules: {
      "arrow-body-style": "warn",
      "prefer-arrow-callback": "warn",
      "no-tabs": ["error", { allowIndentationTabs: true }],
      indent: ["error", 2, { SwitchCase: 1 }],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          singleQuote: false,
          trailingComma: "none",
          usePrettierrc: false,
          arrowParens: "avoid",
        },
      ],
    },
  },
];
