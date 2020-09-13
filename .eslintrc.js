module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  settings: {
    'import/core-modules': ['chokidar']
  },
  rules: {
    // General
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    // React
    'react/jsx-fragments': 'off', // Prefer verbose syntax
    'react/jsx-props-no-spreading': 'off', // Spread appropriatly
    // Import
    'import/prefer-default-export': 'off'
  }
};
