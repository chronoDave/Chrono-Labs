import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Core
import {
  Box,
  Logo
} from '../../components';

import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

// Styles
import { useAppStyles } from './App.styles';

const App = ({ children }) => {
  const classes = useAppStyles();

  return (
    <Fragment>
      <div className={classes.background} />
      <div className={classes.root}>
        <Box
          flexDirection="column"
          padding={[2, 0]}
          alignItems="center"
          minHeight="100vh"
        >
          <Logo />
          <Navigation />
          <Box
            display="block"
            flexGrow={1}
            maxWidth="720px"
            width="100vw"
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </div>
    </Fragment>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
