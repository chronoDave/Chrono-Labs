import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Modules
import { Navigation } from '../Navigation';

// Styles
import { useAppStyles } from './App.styles';

const App = ({ children }) => {
  const classes = useAppStyles();

  return (
    <Fragment>
      <div className={classes.background} />
      <Box display="flex" flexDirection="column">
        <Navigation />
        {children}
      </Box>
    </Fragment>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
