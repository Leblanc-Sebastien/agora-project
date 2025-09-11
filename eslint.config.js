// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'

// 1) Bloc ignore GLOBAL (indépendant)
const ignore = {
  ignores: ['**/node_modules/**', '**/.nuxt/**', '**/.output/**', '**/dist/**', '**/coverage/**'],
}

// 2) Règles principales (avec parser Vue + TS interne)
const main = {
  files: ['**/*.{js,ts,vue}'],
  languageOptions: {
    // Le parser de SFC
    parser: (await import('vue-eslint-parser')).default,
    parserOptions: {
      // Le parser interne pour <script lang="ts">
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
    },
  },
  plugins: {
    vue,
    '@typescript-eslint': tseslint,
  },
  rules: {
    // JS/TS
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

    // Vue
    'vue/multi-word-component-names': 'off',
  },
}

// 3) Couper la règle bruyante dans les fichiers de types
const dtsRelax = {
  files: ['**/*.d.ts'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}

export default [ignore, main, dtsRelax, prettier]
