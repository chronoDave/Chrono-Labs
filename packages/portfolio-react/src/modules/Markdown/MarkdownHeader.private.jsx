import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Typography } from '@material-ui/core';

// Style
import { useMarkdownStyle } from './Markdown.style';

const MarkdownHeader = ({ variant, children }) => {
  const classes = useMarkdownStyle();

  return (
    <Typography
      variant={variant}
      classes={{ root: classes.header }}
    >
      {children}
    </Typography>
  );
};

MarkdownHeader.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default MarkdownHeader;
