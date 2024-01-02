/**
 * Component Custom Properties  
 * doc: https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
 */

import type { UseBreakpointsType } from '@/composable/useBreakpoints'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $breakpoints: UseBreakpointsType
  }
}