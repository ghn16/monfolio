module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}