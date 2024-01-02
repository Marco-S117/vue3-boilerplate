<script setup lang="ts">
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<template>
  <footer class="flex items-center justify-center p-6 bg-gray-800">
    <p>{{ now }}</p>
  </footer>
</template>
