import React from 'react';
import PropTypes from 'prop-types';

// Style
import { useMarkdownStyle } from './Markdown.style';

const MarkdownListItem = ({ children }) => {
  const classes = useMarkdownStyle();

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
