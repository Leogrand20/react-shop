import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import css from '@eslint/css'

export default defineConfig([
  { files: ['**/*.{css,js,mjs,cjs,jsx}'] },
  {
    files: ['**/*.{css,js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{css,js,mjs,cjs,jsx}'],
    plugins: { css, js },
    extends: ['js/recommended'],
    language: 'css/css',
    rules: {
      'css/no-duplicate-imports': 'error',
    },
  },
  pluginReact.configs.flat.recommended,
])
