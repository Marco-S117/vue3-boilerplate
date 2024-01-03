// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: true,
  formatters: {
    css: true,
    markdown: true,
  },
})
