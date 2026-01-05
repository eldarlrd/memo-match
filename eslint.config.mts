import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import { flatConfigs } from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nodePlugin from 'eslint-plugin-n';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
// @ts-expect-error: missing type declaration
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    flatConfigs.recommended,
    reactHooks.configs.flat['recommended-latest'],
    nodePlugin.configs['flat/recommended-module'],
    pluginPromise.configs['flat/recommended'],
    jsxA11y.flatConfigs.strict,
    vitest.configs.recommended,
    eslintConfigPrettier
  ],
  files: ['**/*.{ts,tsx}'],
  settings: {
    react: { version: 'detect' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: true, node: true }
  },
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
      ...globals.es2026
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      projectService: true
    }
  },
  plugins: {
    'no-relative-import-paths': noRelativeImportPaths,
    'react-refresh': reactRefresh
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': [
      1,
      { fixStyle: 'inline-type-imports' }
    ],
    'no-relative-import-paths/no-relative-import-paths': [
      1,
      { rootDir: 'src', prefix: '@' }
    ],
    'import/order': [
      1,
      { 'newlines-between': 'always', alphabetize: { order: 'asc' } }
    ],
    'import/consistent-type-specifier-style': [1, 'prefer-inline'],
    'import/extensions': [1, 'ignorePackages'],
    'import/no-useless-path-segments': 1,
    'import/group-exports': 1,
    'vitest/no-test-return-statement': 2,
    'vitest/consistent-test-filename': 2,
    'vitest/prefer-equality-matcher': 2,
    'vitest/prefer-lowercase-title': 1,
    'vitest/prefer-strict-equal': 1,
    'vitest/consistent-test-it': 2,
    'vitest/no-test-prefixes': 2,
    'react/sort-comp': 2,
    'react/jsx-pascal-case': 2,
    'react/prefer-es6-class': 2,
    'react/jsx-boolean-value': 2,
    'react/self-closing-comp': 2,
    'react/no-unknown-property': 0,
    'react/prefer-stateless-function': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
    'react-refresh/only-export-components': [2, { allowConstantExport: true }],
    'n/no-unsupported-features/node-builtins': 0,
    'n/no-missing-import': 0,
    'no-unused-vars': 0,
    'prefer-const': 1,
    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: ['directive', 'const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    eqeqeq: 2
  }
});
