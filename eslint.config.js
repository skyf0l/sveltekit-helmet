import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // This needs to in a separate object to be a "global ignore". See https://github.com/eslint/eslint/discussions/17429
  {
    ignores: ["**/coverage", "**/.svelte-kit"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
