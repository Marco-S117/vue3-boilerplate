<script lang="ts" setup>
import { useSeoMeta } from '@unhead/vue'
import CoverImage from '@assets/cover.jpg'
import AppImage from '@/components/atoms/AppImage.vue'

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
  twitterTitle: 'My home page',
  // twitterCard: '@CHANGE_ME'
})
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <h1 class="text-h1 text-center col-span-12">
      Vite Vue Boilerplate
    </h1>
    <AppImage
      :src="CoverImage"
      alt="Image cover"
      class="col-span-12 rounded-4 overflow-hidden laptop:col-span-6 laptop:col-start-4"
      title="Image cover title"
    />
    <div>
      <!-- TO DO: complete home page content -->
    </div>
  </div>
</template>
