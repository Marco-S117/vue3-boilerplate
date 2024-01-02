import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import VuePluging from '@vitejs/plugin-vue'
import SvgLoaderPlugin from 'vite-svg-loader'
import UnoCSSPlugin from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/main.scss";'
      }
    }
  },
  publicDir: false,
  plugins: [
    VuePluging(),
    UnoCSSPlugin(),
    SvgLoaderPlugin({
      defaultImport: 'component',
      svgo: true,
      svgoConfig: {
        multipass: true
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('../../src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('../../src/assets', import.meta.url)) },
      { find: '@config', replacement: fileURLToPath(new URL('../../config', import.meta.url)) }
    ]
  }
})
