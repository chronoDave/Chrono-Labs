import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Core
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

// Utils
import { getColorScheme } from '../utils';
import { createTheme } from '../utils/theme';
import { ThemeContext } from '../utils/context';

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getColorScheme());

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={createTheme({ mode })}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeProvider;
