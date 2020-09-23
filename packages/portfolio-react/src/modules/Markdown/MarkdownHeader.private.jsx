import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box, Typography } from '@material-ui/core';

const MarkdownHeader = ({ variant, children }) => {
  const id = children
    .join('-')
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/()\?/g, '');

  return (
    <Box
      py={4}
      my={3}
      display="flex"
      justifyContent="center"
      borderTop={1}
      borderBottom={1}
      borderColor="text.primary"
      id={id}
    >
      <Typography
        variant={variant}
        align="center"
      >
        {children}
      </Typography>
    </Box>
  );
};

MarkdownHeader.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MarkdownHeader;
