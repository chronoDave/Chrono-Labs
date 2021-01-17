import React, { useEffect } from 'react';
import { injectGlobal } from '@emotion/css';

// Context
import { ThemeContext } from '../context';

// Theme
import { theme } from '../theme';

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  useEffect(() => {
    injectGlobal({
      body: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
