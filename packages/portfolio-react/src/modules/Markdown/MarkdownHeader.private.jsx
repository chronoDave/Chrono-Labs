import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Box, Typography } from '@material-ui/core';

// Style
import { useMarkdownStyles } from './Markdown.style';

const MarkdownHeader = ({ variant, children }) => {
  const classes = useMarkdownStyles();

  return (
    <Box
      py={4}
      my={3}
      display="flex"
      justifyContent="center"
      borderTop={1}
      borderBottom={1}
      borderColor="text.primary"
    >
      <Typography variant={variant}>
        {children}
      </Typography>
    </Box>
  );
};

MarkdownHeader.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default MarkdownHeader;
