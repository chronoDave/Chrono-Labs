/* eslint-disable no-bitwise */
const opacity = {
  disabled: 0.33
};

const normalizeHex = (hex: string) => {
  const normalHex = hex.slice(1);

  if (normalHex.length === 3) {
    return normalHex
      .split('')
      .map(chunk => `${chunk}${chunk}`)
      .join('');
  }
  return normalHex;
};

const hexToRgb = (hex: string) => {
  const hexInt = parseInt(normalizeHex(hex), 16);

  return [
    (hexInt >> 16) & 255,
    (hexInt >> 8) & 255,
    hexInt & 255
  ];
};

const alpha = (hex: string, n: number | keyof typeof opacity) => {
  const rgb = hexToRgb(hex).join(',');
  const getAlpha = () => {
    if (typeof n === 'string') return opacity[n];
    return n;
  };

  return `rgba(${rgb},${getAlpha()})`;
};

export default {
  opacity,
  alpha,
  white: '#ffffff',
  black: '#282828',
  grey: '#d8d8d8',
  primary: '#c14158'
};
