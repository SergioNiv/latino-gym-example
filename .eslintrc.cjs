module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};