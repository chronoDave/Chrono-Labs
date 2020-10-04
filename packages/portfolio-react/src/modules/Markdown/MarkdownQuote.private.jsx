import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

// Core
import { Box } from '@material-ui/core';

const MarkdownQuote = ({ children }) => (
  <Box
    p={2}
    bgcolor="common.white"
    mb={2}
    borderRadius={4}
  >
    {Children.map(children, (child, i) => cloneElement(child, {
      paragraph: i !== (children.length - 1)
    }))}
  </Box>
);

MarkdownQuote.propTypes = {
  children: PropTypes.node.isRequired
};

export default MarkdownQuote;
