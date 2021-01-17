import palette from './palette';
import shadows from './shadows';
import transitions from './transitions';

const toPx = (n = 1) => `${n * 8}px`;

export default {
  transitions,
  palette,
  shadows,
  toPx,
  pxToRem: (px: number) => `${px / 16}rem`,
  spacing: (...args: number[]) => (args.length === 0 ?
    toPx() :
    args.map(toPx).join(' ')
  )
};
