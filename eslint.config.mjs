import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
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
      // "import/ignore": [".css$"], // Removed from settings, trying in rule config
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
      // Global resolver for import plugin - node resolver already configured in its specific block
      // but good to have a general spot if other resolvers were needed.
      // 'import/resolver': { node: { extensions: ['.js', '.jsx'] } }, // This is now in the import block
      // Global ignore for import plugin - also in import block
      // 'import/ignore': ['.css$'],
    },
    rules: {
      "react/prop-types": "off", // Disable prop-types
      // Add any other global rule overrides here
    },
  },

  pluginPrettierRecommended, // Prettier config must be last
];
