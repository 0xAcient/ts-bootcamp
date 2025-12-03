import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser  from "@typescript-eslint/parser";
// You can also use import { configs } from "@typescript-eslint/eslint-plugin"
export default [
  js.configs.recommended,
  {
    files: ["week-1/src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./week-1/tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

