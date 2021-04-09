import palette from './palette';
import shadows from './shadows';
import breakpoints from './breakpoints';
import mixins from './mixins';

const unit = (n = 1) => n * 8;
const toPx = (n = 1) => `${unit(n)}px`;
const spacing = (...args: number[]) => (args.length === 0 ?
  toPx() :
  args.map(toPx).join(' ')
);

const theme = {
  palette,
  spacing,
  shadows,
  breakpoints,
  mixins,
  border: (color: string, width = 1) => `${width}px solid ${color}`,
  pxToRem: (px: number) => `${px / 16}rem`
};

export type Theme = typeof theme;
export default theme;
