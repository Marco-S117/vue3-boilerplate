const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  formatters: {
    css: true,
    markdown: true,
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: true,
  rules: {
    'antfu/top-level-function': 'off',
    'no-console': 'off',
  },
})
