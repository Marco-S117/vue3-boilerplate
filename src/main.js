import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { matches } from './composable/useBreakpoints'

import appComponent from './App.vue'
import router from './router'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(appComponent)
const head = createHead()

app.config.globalProperties.$breakpoints = matches
app.use(router).use(head)
app.mount('#app')
