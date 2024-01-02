export const breakpoints = {
  phone: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
  desktopXl: 1536
}

const bpsInString: { [key: string]: string } = {}
for (const [key, value] of Object.entries(breakpoints))
  bpsInString[key] = `${value}px`

export const breakpointsInPixel = bpsInString
