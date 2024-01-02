<script lang='ts' setup>
import { breakpoints } from '@config/unocss/theme/breakpoints'
import { matches } from '@/composable/useBreakpoints'
</script>

<template>
  <section class="flex flex-col items-start gap-4 py-8">
    <p class="text-h4 case-upper">
      Breakpoints
    </p>
    <p v-if="$breakpoints.tabletAndDown">
      This paragraph is rendered only on tablet and phone breakpoints.
    </p>
    <p v-else>
      This paragraph is rendered only on laptop or above breakpoint.
    </p>
    <p>Orientation is: <span class="text-success">{{ matches.landscape && 'landscape' || matches.portrait && 'portrait' }}</span></p>
    <ul>
      <li
        v-for="(bp, key) in breakpoints"
        :key="key"
        :class="matches[key] ? 'text-success' : 'text-danger'"
        class="transition-color-1000"
      >
        {{ `${key} >= ${bp}` }}
      </li>
    </ul>
  </section>
</template>
