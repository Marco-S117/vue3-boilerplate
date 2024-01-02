import { breakpoints } from '@config/unocss/theme/breakpoints'
import { useMediaQuery } from '@vueuse/core'
import { reactive } from 'vue'

export interface UseBreakpointsType {
  phone: boolean
  phoneAndUp: boolean
  tablet: boolean
  tabletAndDown: boolean
  tabletAndUp: boolean
  laptop: boolean
  laptopAndDown: boolean
  laptopAndUp: boolean
  desktop: boolean
  desktopAndDown: boolean
  desktopAndUp: boolean
  desktopXl: boolean
  landscape: boolean
  portrait: boolean
}

export const phone = useMediaQuery(`(min-width: ${breakpoints.phone}px) and (max-width: ${breakpoints.tablet - 1}px)`)
export const phoneAndDown = useMediaQuery(`(max-width: ${breakpoints.phone}px)`)
export const phoneAndUp = useMediaQuery(`(min-width: ${breakpoints.phone}px)`)
export const tablet = useMediaQuery(`(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.laptop - 1}px)`)
export const tabletAndDown = useMediaQuery(`(max-width: ${breakpoints.tablet}px)`)
export const tabletAndUp = useMediaQuery(`(min-width: ${breakpoints.tablet}px)`)
export const laptop = useMediaQuery(`(min-width: ${breakpoints.laptop}px) and (max-width: ${breakpoints.desktop - 1}px)`)
export const laptopAndDown = useMediaQuery(`(max-width: ${breakpoints.laptop}px)`)
export const laptopAndUp = useMediaQuery(`(min-width: ${breakpoints.laptop}px)`)
export const desktop = useMediaQuery(`(min-width: ${breakpoints.desktop}px) and (max-width: ${breakpoints.desktopXl - 1}px)`)
export const desktopAndDown = useMediaQuery(`(max-width: ${breakpoints.desktop}px)`)
export const desktopAndUp = useMediaQuery(`(min-width: ${breakpoints.desktop}px)`)
export const desktopXl = useMediaQuery(`(min-width: ${breakpoints.desktopXl}px)`)
export const landscape = useMediaQuery('(orientation: landscape)')
export const portrait = useMediaQuery('(orientation: portrait)')

export const matches: UseBreakpointsType = reactive({
  phone,
  phoneAndDown,
  phoneAndUp,
  tablet,
  tabletAndDown,
  tabletAndUp,
  laptop,
  laptopAndDown,
  laptopAndUp,
  desktop,
  desktopAndDown,
  desktopAndUp,
  desktopXl,
  landscape,
  portrait
})
