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
  0: '#000000',
  1: '#1D2B53',
  2: '#7E2553',
  3: '#008751',
  4: '#AB5236',
  5: '#5F574F',
  6: '#C2C3C7',
  7: '#FFF1E8',
  8: '#FF004D',
  9: '#FFA300',
  10: '#FFEC27',
  11: '#00E436',
  12: '#29ADFF',
  13: '#83769C',
  14: '#FF77A8',
  15: '#FFCCAA'
};
