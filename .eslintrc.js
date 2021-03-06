module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    $nuxt: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'comma-dangle': 0
  }
}
