import React from 'react';
import { render } from 'react-dom';

// Components
import { CssBaseline } from './components';

// Providers
import { ThemeProvider } from './providers';

// Pages
import { HomePage } from './pages';

render(
  <ThemeProvider>
    <CssBaseline>
      <HomePage />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
