import typescriptEslintRecommended from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintRecommended,
      perfectionist,
    },
    rules: {
      // Perfectionist sort-imports rule
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          internalPattern: ['~/**', '^~/.*'],
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            ['external', 'builtin'],
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'type',
            'internal-type',
            'internal',
            'object',
            'unknown',
          ],
          customGroups: { type: {}, value: {} },
          environment: 'node',
        },
      ],
    },
  },
];
