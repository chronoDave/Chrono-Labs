export type Breakpoints = typeof breakpoints;
export type BreakpointKeys = keyof Breakpoints;

export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1280,
  fs: 1920
};

export const getBreakpoint = () => {
  if (window.innerWidth >= 1920) return 'fs';
  if (window.innerWidth >= 1280) return 'xl';
  if (window.innerWidth >= 960) return 'lg';
  if (window.innerWidth >= 720) return 'md';
  if (window.innerWidth >= 480) return 'sm';
  return 'xs';
};

export const getMediaQuery = (key: BreakpointKeys) => window
  .matchMedia(`(min-width: ${breakpoints[key]}px)`)
  .matches;
