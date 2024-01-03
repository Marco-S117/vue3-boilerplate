<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import { useWindowSize } from '@vueuse/core'
import { store } from './store'

import AppFooter from '@/components/base/AppFooter.vue'
import AppLoader from '@/components/base/AppLoader.vue'
import AppHeader from '@/components/base/AppHeader.vue'

useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: { separator: '|', siteName: 'Vue Vite App' },
  meta: [
    { name: 'author', content: 'https://github.com/Marco-S117' },
    { name: 'description', content: '@CHANGE_ME' },
    // { name: 'keywords', content: '@CHANGE_ME' },
    { name: 'rating', content: 'general' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    // { name: 'og:description', content: '@CHANGE_ME' },
    // { name: 'og:image', content: '@CHANGE_ME' },
    // { name: 'og:locale', content: '@CHANGE_ME' },
    // { name: 'og:title', content: 'Vue Vite App' },
    // { name: 'og:type', content: '@CHANGE_ME' },
    // { name: 'og:url', content: window.location.host },
    // { name: 'twitter:description', content: '@CHANGE_ME' },
    // { name: 'twitter:image', content: '@CHANGE_ME' },
    // { name: 'twitter:locale', content: '@CHANGE_ME' },
    // { name: 'twitter:title', content: 'Vue Vite App' },
    // { name: 'twitter:type', content: '@CHANGE_ME' },
    // { name: 'twitter:card', content: '@CHANGE_ME' }
  ],
}, { mode: 'client' })

const { height: wHeight } = useWindowSize()

setTimeout(() => {
  store.loader.visible = false
}, 1000)
</script>

<template>
  <div :style="{ minHeight: `${wHeight}px` }" class="font-mono flex flex-col justify-between">
    <AppHeader />
    <main class="p-4 tablet:p-6 laptop:p-8 desktop:p-10 desktopXl:p-12">
      <RouterView v-slot="{ Component, route }">
        <Transition mode="out-in">
          <component :is="Component" v-if="Component" :key="route.name" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <AppLoader />
  </div>
</template>

<style lang="scss">
html {
  @apply bg-black text-white text-base;

  ::selection {
    @apply bg-yellow-400 text-primary;
  }
}
</style>
