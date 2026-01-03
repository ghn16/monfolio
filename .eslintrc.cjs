module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // Désactive la règle multi-word pour les pages
    'vue/multi-word-component-names': 'off',
    // Désactive la règle self-closing
    'vue/html-self-closing': 'off',
  },
}