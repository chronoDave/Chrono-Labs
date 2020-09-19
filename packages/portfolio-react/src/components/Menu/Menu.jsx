import React from 'react';
import PropTypes from 'prop-types';

// Core
import {
  Fade,
  Box,
  Popper,
  Paper
} from '@material-ui/core';

// Style
import { useMenuStyles } from './Menu.style';

const Menu = ({ children, ...rest }) => {
  const classes = useMenuStyles();

  return (
    <Popper className={classes.menu} transition {...rest}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <Paper elevation={4} square>
            <Box display="flex" flexDirection="column">
              {children}
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired
};

export default Menu;
