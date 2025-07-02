import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    // This can be the main shared configuration object
    // Or a new dedicated object just for ignores at the top level of the array
    ignores: ["node_modules/", "dist/"],
  },
  js.configs.recommended, // ESLint's recommended rules
  pluginReact.configs.flat.recommended, // React plugin recommended flat config

  // ESLint-plugin-import configuration
  {
    files: ["**/*.{js,jsx,mjs,cjs}"], // Ensure this applies to relevant files
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

  // My Global/Override settings (AFTER plugin recommendations, BEFORE Prettier)
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
      "react/prop-types": "off", // Disable prop-types
      // Add any other global rule overrides here
    },
  },

  pluginPrettierRecommended, // Prettier config must be last
];
