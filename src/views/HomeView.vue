<script lang="ts" setup>
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'Home',
  description: 'My home page',
  // keywords: '',
  ogDescription: 'Still home my home page',
  ogUrl: window.location.href,
  ogTitle: 'Home',
  // ogImage: '@CHANGE_ME',
  // twitterDescription: '@CHANGE_ME',
  // twitterImage: '@CHANGE_ME',
  twitterTitle: 'My home page'
  // twitterCard: '@CHANGE_ME'
})
</script>

<template>
  <div>
    <h1>Home view</h1>
  </div>
</template>
