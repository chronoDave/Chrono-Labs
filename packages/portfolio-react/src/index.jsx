import React from 'react';
import { render } from 'react-dom';

// Core
import { ThemeProvider, CssBaseline } from '@material-ui/core';

// Providers
import { RouteProvider } from './providers';

// Theme
import { theme } from './theme';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <RouteProvider />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
