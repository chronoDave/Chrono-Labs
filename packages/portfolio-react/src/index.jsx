import React from 'react';
import { render } from 'react-dom';

// Core
import { ThemeProvider, CssBaseline } from '@material-ui/core';

// Modules
import { App } from './modules';

// Providers
import { RouteProvider } from './providers';

// Theme
import { theme } from './theme';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App>
        <RouteProvider />
      </App>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
