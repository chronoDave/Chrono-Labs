import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#575757'
    },
    background: {
      default: '#f0f0f0'
    }
  },
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    body1: {
      lineHeight: 1.5,
      letterSpacing: '0.01em'
    }
  },
  component: {
    sidebar: 240,
    topbar: 72
  },
  border: (color, width = '1px', type = 'solid') => `${typeof width === 'number' ? `${width}px` : width} ${type} ${color}`
});
