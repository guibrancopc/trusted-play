import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended"; // Added

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  // ESLint-plugin-import configuration
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      import: pluginImport,
    },
    rules: {
      ...pluginImport.configs.errors.rules,
      ...pluginImport.configs.warnings.rules,
      "import/no-unresolved": ["error", { ignore: ["\\.css$"] }],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
  // My Global/Override settings
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },
  pluginPrettierRecommended, // Added as the last item
];
