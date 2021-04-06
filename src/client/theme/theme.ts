import palette from './palette';

const unit = (n = 1) => n * 8;
const toPx = (n = 1) => `${unit(n)}px`;
const spacing = (...args: number[]) => (args.length === 0 ?
  toPx() :
  args.map(toPx).join(' ')
);

const theme = {
  palette,
  spacing,
  border: (color: string, width = 1) => `${width}px solid ${color}`,
  pxToRem: (px: number) => `${px / 16}rem`
};

export type Theme = typeof theme;
export default theme;
