# AGENTS.md - Developer Notes for AI Agents

This document provides guidance and key information for AI agents working on the `trusted-play` repository.

## Core Technologies

*   **Framework:** React 19
*   **Build Tool / Dev Server:** Vite 7
*   **Language:** JavaScript (ES6+)
*   **Styling:** CSS Modules (`*.module.css`). Previous `<style jsx>` usage has been refactored out.
*   **Backend:** Firebase (Realtime Database)

## Project Structure (`src` directory)

*   **`src/components/`**: Contains reusable UI components.
    *   Each component typically has its own directory with the `.jsx` file and a corresponding `.module.css` file for styles.
    *   An `index.js` file is often used to export the component from its directory.
*   **`src/modules/`**: Houses more complex UI features or components that might involve multiple sub-components or specific logic.
*   **`src/services/`**: Includes handlers for external services and core application logic.
    *   `firebaseHandler.js`: Manages interactions with Firebase Realtime Database. Uses the modular (v9+) Firebase API.
    *   `authenticationHandler.js`: Simple custom authentication logic (prompts for name, stores in local storage).
    *   `localStorageHandler.js`: Utilities for interacting with browser local storage.
*   **`src/assets/`**: Static assets like fonts and images.
*   **`App.jsx` / `AppModel.js` / `main.jsx`**: Core application setup and entry point. `AppModel.js` seems to be a simple vanilla JS model for some app state.

## Linting and Formatting

*   **ESLint:** Version 9, configured with a flat config file: `eslint.config.mjs`.
    *   **Key Configurations:**
        *   `@eslint/js` (for `js.configs.recommended`)
        *   `eslint-plugin-react` (using `pluginReact.configs.flat.recommended`)
        *   `eslint-plugin-import` (with rules from `errors` and `warnings` configs, and node resolver for `.js` and `.jsx`)
        *   `eslint-plugin-prettier/recommended` (integrates Prettier rules, should be the last in the config array).
    *   **Important Ignores:** `node_modules/` and `dist/` are globally ignored in `eslint.config.mjs` to prevent performance issues.
    *   **Note:** `react/prop-types` is currently disabled globally in the configuration for expediency during the last major update. Consider enabling it or adding prop-types for new components.
*   **Prettier:** Version 3, used for code formatting. Integrated with ESLint.

## Styling Approach

*   **CSS Modules:** This is the preferred method for component styling. Create a `Component.module.css` file alongside your component.
*   **Global Styles:** `src/index.css` and `src/App.css` contain global styles.
*   **`<style jsx>`:** This syntax was previously used but has been refactored out in favor of CSS Modules. Do not reintroduce `<style jsx>`.

## Build and Development Scripts

*   **`npm run dev`**: Starts the Vite development server.
*   **`npm run build`**: Creates a production build in the `dist/` directory.
*   **`npm run lint`**: Runs ESLint to check for code quality and style issues.
*   **`npm run preview`**: Serves the production build locally for testing.

## Firebase Integration

*   The project uses Firebase Realtime Database.
*   The Firebase SDK is initialized in `src/services/firebaseHandler.js` and uses the modern modular API (v9+).
*   API keys and project configuration are present directly in `firebaseHandler.js`. For production, these should ideally be environment variables.

## Node.js Version

*   The required Node.js version is specified in the `.tool-versions` file in the root directory (currently `nodejs 22.16.0`). Ensure your environment matches this.

## Key Learnings from Recent Dependency Update (to React 19, Vite 7, ESLint 9)

*   **React Root API:** `src/main.jsx` uses the `createRoot` API.
*   **`react-rating`:** The old `react-rating` package was replaced with `@smastrom/react-rating` due to compatibility issues.
*   **ESLint Flat Config:** The migration from `.eslintrc.json` to `eslint.config.mjs` was a significant change. Pay attention to how plugins and shared configs are imported and structured in the flat config array.
*   **CSS Imports with ESLint:** `eslint-plugin-import` needed specific configuration (`"import/no-unresolved": ["error", { "ignore": ["\\.css$"] }]`) to correctly handle CSS file imports without treating them as unresolvable modules.
*   **ESLint Performance:** Ensure ESLint ignores `node_modules/` and `dist/` to prevent performance issues/crashes.

By following these guidelines, agents can contribute more effectively to this repository.
