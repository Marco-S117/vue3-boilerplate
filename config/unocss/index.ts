// https://unocss.dev/guide/config-file#config-file

import { defineConfig } from 'unocss'
import theme from './theme'
import shortcuts from './shortcuts'
import presets from './presets'
import transformers from './transformers'

export default defineConfig({
  shortcuts,
  theme,
  presets,
  transformers
})
