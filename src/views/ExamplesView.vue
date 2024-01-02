<script lang="ts" setup>
import { useSeoMeta } from '@unhead/vue'

import ExampleBreakpoints from '@/components/examples/ExampleBreakpoints.vue'
import ExampleIcons from '@/components/examples/ExampleIcons.vue'
import ExampleTheme from '@/components/examples/ExampleTheme.vue'
import ExampleTypography from '@/components/examples/ExampleTypography.vue'

useSeoMeta({
  title: 'Example',
  description: 'My Example page',
  // keywords: '',
  ogDescription: 'Still Example my Example page',
  ogUrl: window.location.href,
  ogTitle: 'Example',
  // ogImage: '@CHANGE_ME',
  // twitterDescription: '@CHANGE_ME',
  // twitterImage: '@CHANGE_ME',
  twitterTitle: 'My Example page'
  // twitterCard: '@CHANGE_ME'
})
</script>

<template>
  <div class="grid grid-cols-4 gap-2 tablet:gap-4 desktop:gap-8">
    <ExampleTypography class="col-span-full laptop:col-span-2 desktop:col-span-1" />
    <ExampleTheme class="col-span-full laptop:col-span-2 desktop:col-span-1" />
    <ExampleBreakpoints class="col-span-full laptop:col-span-2 desktop:col-span-1" />
    <ExampleIcons class="col-span-full laptop:col-span-2 desktop:col-span-1" />
  </div>
</template>
