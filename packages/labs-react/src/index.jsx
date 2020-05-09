import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

// Components
import { CssBaseline } from './components';

// Pages
import { HomePage } from './pages';

// Utils
import { theme } from './utils/theme';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <HomePage />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
