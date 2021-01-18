import palette from './palette';
import shadows from './shadows';
import transitions from './transitions';
import mixins from './mixins';
import breakpoints from './breakpoints';

const unit = (n = 1) => n * 8;
const toPx = (n = 1) => `${unit(n)}px`;
const spacing = (...args: number[]) => (args.length === 0 ?
  toPx() :
  args.map(toPx).join(' ')
);

const theme = {
  transitions,
  breakpoints,
  palette,
  shadows,
  mixins,
  unit,
  toPx,
  spacing,
  border: (color: string, width = 1,) => `${width}px solid ${color}`,
  pxToRem: (px: number) => `${px / 16}rem`,
  textShadow: (
    x = 1,
    y = 1,
    n: keyof typeof palette['opacity'] = 'disabled'
  ) => `${spacing(x)} ${spacing(y)} ${palette.alpha(palette[0], palette.opacity[n])}`
};

export type Theme = typeof theme;
export default theme;
