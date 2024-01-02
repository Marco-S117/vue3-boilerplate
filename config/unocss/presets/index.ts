import {
  presetIcons,
  presetMini,
  presetWebFonts
} from 'unocss'

export default [
  presetMini (),
  // icons: https://unocss.dev/presets/icons#install
  presetIcons(),
  // https://unocss.dev/presets/web-fonts#web-fonts-preset
  presetWebFonts({
    provider: 'google',
    fonts: {
      mono: ['Roboto Mono']
    }
  })
]
