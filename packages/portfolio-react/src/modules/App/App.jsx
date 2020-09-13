import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

// Modules
import { Navigation } from '../Navigation';

const App = ({ children }) => (
  <Box display="flex" flexDirection="column">
    <Navigation />
    {children}
  </Box>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
