import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    ignores: [
      'dist/',
      'coverage/',
      '**/__tests__/*',
      '**/*.test.js',
      'jest.setup.js',
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];