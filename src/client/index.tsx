import React from 'react';
import { render } from 'react-dom';

// Providers
import { ThemeProvider } from './providers';

// Modules
import { App } from './modules/App';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
