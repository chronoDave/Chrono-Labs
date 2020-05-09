module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks'
  ],
  rules: {
    // General
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'no-nested-ternary': 'off',
    // Import
    'import/namespace': ['error', { 'allowComputed': true }],
    'import/prefer-default-export': 'off',
    // React
    'react/jsx-fragments': 'off', // Prefer <Fragment />
    'react/jsx-props-no-spreading': 'off' // ...rest
  }
}