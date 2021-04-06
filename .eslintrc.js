module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // Typescript
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // General
    'linebreak-style': 'off',
    'operator-linebreak': ['error', 'after'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', {
      allow: ['warn', 'info']
    }],
    // Import
    'import/prefer-default-export': 'off',
  }
};
