<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { watch } from 'vue'
import { templateRef } from '@vueuse/core'
import { gsap } from 'gsap'
import { store } from '@/store'

const rootEl = templateRef<HTMLElement>('rootEl')
const iconEl = templateRef<ComponentPublicInstance>('iconEl')
const tl = gsap.timeline({ defaults: { duration: 0.4, ease: 'power3.out' } })

const enter = () => {
  tl.to(rootEl.value, { autoAlpha: 1 })
  tl.fromTo(iconEl.value, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1 }, '-=0.15')
}

const leave = () => {
  tl.to(iconEl.value, { autoAlpha: 0, scale: 0 })
  tl.to(rootEl.value, { autoAlpha: 0 }, '-=0.15')
}

watch(() => store.loader.visible, (_visible) => {
  _visible ? enter() : leave()
})
</script>

<template>
  <Teleport to="body">
    <div ref="rootEl" class="fixed inset-0 z-100 flex items-center justify-center" role="presentation">
      <div class="bg fixed inset-0 bg-black" />
      <div ref="iconEl" class="i-svg-spinners:180-ring text-primary text-100px" />
    </div>
  </Teleport>
</template>
