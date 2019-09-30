module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  rules: {
    'no-console': [0, { allow: ['warn', 'error'] }],
    quotemark: [true, 'single', 'jsx-double'],
    'no-unused-vars': [0, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-use-before-define': [0, { classes: false, functions: false, variables: false }],
    'react/no-unescaped-entities': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        semi: true,
        printWidth: 100,
      },
    ],
  },
};
