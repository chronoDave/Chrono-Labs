import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: '0 !important'
        }
      }
    }
  },
  palette: {
    text: {
      primary: '#010101'
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  },
  component: {
    sidebar: 240,
    topbar: 72
  },
  border: (color, width = '1px', type = 'solid') => `${typeof width === 'number' ? `${width}px` : width} ${type} ${color}`
});
