<script lang='ts' setup>
import { ref } from 'vue'

const props = defineProps<{
  alt?: string
  draggable?: boolean
  title?: string
  src: string
}>()

const ready = ref(false)

const onLoad = () => { ready.value = true }
</script>

<template>
  <div class="app-image">
    <img
      v-bind="props"
      :class="{ 'opacity-0': !ready }"
      class="transition-opacity-500"
      @load="onLoad"
    >
  </div>
</template>

<style lang='scss' scoped>
.app-image {
  @apply inline-block;
}
</style>
