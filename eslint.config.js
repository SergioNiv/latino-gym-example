import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      // CAMBIO: Cambia 'warn' a 'error' para que el commit falle
      'no-unused-vars': 'error',
    },
  },
];
