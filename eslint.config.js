// eslint.config.js
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 1. Reglas recomendadas de ESLint
  js.configs.recommended,

  // 2. Reglas recomendadas para Astro
  ...astro.configs.recommended,

  // 3. Configuración para desactivar reglas que chocan con Prettier (siempre al final)
  eslintConfigPrettier,

  // (Opcional) Puedes añadir tus propias reglas aquí
  {
    rules: {
      'no-unused-vars': 'warn', // Por ejemplo, cambiar errores de variables no usadas a advertencias
    },
  },
];
