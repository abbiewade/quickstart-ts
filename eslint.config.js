// eslint-disable import/no-unresolved
import eslint from '@eslint/js';
import * as tseslint from "typescript-eslint";
import prettierConfig from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: ['airbnb-base'],
  }),
  prettierConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
    ],
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'line-between-class-members': 'off',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'max-classes-per-file': 'off'
    },
  },
);