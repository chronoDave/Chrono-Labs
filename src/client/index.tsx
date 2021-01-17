import React from 'react';
import { render } from 'react-dom';

// Providers
import { ThemeProvider, LanguageProvider } from './providers';

// Modules
import { App } from './modules/App';

render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>,
  document.getElementById('root')
);
