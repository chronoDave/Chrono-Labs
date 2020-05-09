// Utils
import { castArray } from './index';

const grey = {
  50: '#fff9e9',
  100: '#d9d1c8',
  200: '#b3a8a6',
  300: '#6b6564',
  400: '#1d1e18'
};

const opacity = {
  hover: 0.06,
  active: 0.14
};

const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  screenEnter: 255,
  screenLeave: 195
};

const generateTypography = (
  size,
  lineHeight,
  letterSpacing,
  fontWeight = 400
) => ({
  fontFamily: ['Arimo', 'sans-serif'].join(', '),
  fontWeight,
  fontSize: `${size / 16}rem`,
  letterSpacing: `${Math.round(letterSpacing / size)}em`,
  lineHeight
});

const normalizeMs = value => {
  if (typeof value === 'number') return `${value}ms`;
  return value;
};

const spacing = (size = 1) => `${size * 8}px`;

const formatSize = size => {
  if (!size) return spacing(0);
  if (typeof size === 'number') return spacing(size);
  if (typeof size === 'string') return size;
  if (process.env.NODE_ENV === 'development') {
    throw new Error(`Invalid size: '${size}', expected number or string`);
  } else {
    return null;
  }
};

export const theme = {
  spacing,
  accessibility: {
    outline: false
  },
  shape: {
    borderRadius: 2
  },
  palette: {
    type: 'dark',
    light: {
      text: {
        primary: grey[400],
        secondary: grey[300],
        disabled: grey[200]
      },
      background: grey[50],
      action: {
        hover: `rgba(0, 0, 0, ${opacity.hover})`,
        active: `rgba(0, 0, 0, ${opacity.active})`,
      }
    },
    dark: {
      text: {
        primary: grey[50],
        secondary: grey[100],
        disabled: grey[200]
      },
      background: grey[400],
      action: {
        hover: `rgba(255, 255, 255, ${opacity.hover})`,
        active: `rgba(255, 255, 255, ${opacity.active})`,
      }
    }
  },
  typography: {
    h1: generateTypography(96, 1.167, -1.5),
    h2: generateTypography(60, 1.2, -0.5),
    h3: generateTypography(48, 1.167, 0),
    h4: generateTypography(34, 1.235, 0.25),
    h5: generateTypography(24, 1.334, 0),
    h6: generateTypography(20, 1.6, 0.15),
    body1: generateTypography(16, 1.5, 0.15),
    body2: generateTypography(14, 1.43, 0.15),
    caption: generateTypography(12, 1.66, 0.4)
  },
  transition: {
    duration,
    easing,
    create: (props, options) => castArray(props)
      .map(value => [
        value,
        normalizeMs(options.duration || duration.standard),
        options.easing || easing.easeInOut,
        normalizeMs(options.delay || 0)
      ].join(' '))
      .join(', ')
  },
  utils: {
    formatSize,
    formatShorthandSpacing: shorthand => {
      if (!shorthand) return null;
      if (typeof shorthand === 'string') return shorthand;
      if (typeof shorthand === 'number') return theme.spacing(shorthand);
      if (Array.isArray(shorthand)) return shorthand.map(formatSize).join(' ');
      // Needs to be ordered
      return [
        formatSize(shorthand.top),
        formatSize(shorthand.right),
        formatSize(shorthand.bottom),
        formatSize(shorthand.left)
      ].join(' ');
    }
  }
};
