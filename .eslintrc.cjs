module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
