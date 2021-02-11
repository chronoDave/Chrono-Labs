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
    'linebreak-style': 'off',
    'operator-linebreak': ['error', 'after'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', {
      allow: ['warn', 'info']
    }],
    // Import
    'import/prefer-default-export': 'off',
    // React
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off'
  }
};
