<script lang="ts" setup>
import { useSeoMeta } from '@unhead/vue'
import { useFetch } from '@vueuse/core'

const { data } = useFetch('https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode')

useSeoMeta({
  title: '404',
  description: () => data.value || 'My 404 page description',
  // keywords: '',
  ogDescription: () => data.value || 'description',
  ogUrl: window.location.href,
  ogTitle: '404',
  // ogImage: '@CHANGE_ME',
  // twitterDescription: '@CHANGE_ME',
  // twitterImage: '@CHANGE_ME',
  // twitterTitle: '@CHANGE_ME',
  // twitterCard: '@CHANGE_ME'
})
</script>

<template>
  <div v-if="data" class="flex flex-col items-center justify-center gap-2">
    <h1 class="text-h1 text-primary">
      404
    </h1>
    <p class="font-italic">
      {{ data }}
    </p>
  </div>
</template>
