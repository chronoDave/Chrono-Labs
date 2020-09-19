import React from 'react';
import PropTypes from 'prop-types';

// Style
import { useMarkdownStyles } from './Markdown.style';

const MarkdownListItem = ({ children }) => {
  const classes = useMarkdownStyles();

  return (
    <li className={classes.listItem}>
      {children}
    </li>
  );
};

MarkdownListItem.propTypes = {
  children: PropTypes.string.isRequired
};

export default MarkdownListItem;
