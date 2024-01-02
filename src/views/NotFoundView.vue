<script lang="ts" setup>
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: '404',
  description: 'My 404 page',
  // keywords: '',
  ogDescription: 'Still 404 my 404 page',
  ogUrl: window.location.href,
  ogTitle: '404',
  // ogImage: '@CHANGE_ME',
  // twitterDescription: '@CHANGE_ME',
  // twitterImage: '@CHANGE_ME',
  twitterTitle: 'My 404 page'
  // twitterCard: '@CHANGE_ME'
})
</script>

<template>
  <div>
    <h1 class="text-h1">
      404
    </h1>
  </div>
</template>
