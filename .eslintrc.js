module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'import/no-unresolved': [
      2,
      { caseSensitive: false },
    ],
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '*.test.jsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
