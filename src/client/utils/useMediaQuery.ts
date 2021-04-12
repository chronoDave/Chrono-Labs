export type BreakpointKey = 'min-width' | 'max-width';
export type BreakpointValue = 320 | 480 | 720 | 960 | 1280 | 1920;

export default (key: BreakpointKey, value: BreakpointValue) => window
  .matchMedia(`(${key}: ${value}px)`)
  .matches;
