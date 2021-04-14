module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx']
      }
    }
  },
  rules: {
    // Typescript
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    // General
    'linebreak-style': 'off',
    'operator-linebreak': ['error', 'after'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', {
      allow: ['warn', 'info']
    }],
    'class-methods-use-this': 'off',
    // Import
    'import/prefer-default-export': 'off',
  }
};
