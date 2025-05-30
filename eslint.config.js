import prettier from "eslint-config-prettier";
import globals from "globals";
import js from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import ts from "typescript-eslint";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  prettier,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
