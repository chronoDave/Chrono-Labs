module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // Typescript
    '@typescript-eslint/comma-dangle': 'off',
    // General
    'linebreak-style': 'off'
  }
};
