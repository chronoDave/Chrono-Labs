import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box, Typography } from '@material-ui/core';

const MarkdownCaption = ({ children }) => (
  <Box display="flex" justifyContent="center" mb={2}>
    <Typography variant="caption">
      {children}
    </Typography>
  </Box>
);

MarkdownCaption.propTypes = {
  children: PropTypes.node.isRequired
};

export default MarkdownCaption;
