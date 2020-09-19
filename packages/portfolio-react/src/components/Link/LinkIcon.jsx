import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { useLinkStyles } from './Link.style';

const LinkIcon = ({ href, children, ...rest }) => {
  const classes = useLinkStyles();

  return (
    <a
      href={href}
      className={classes.iconRoot}
      {...rest}
    >
      {children}
    </a>
  );
};

LinkIcon.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkIcon;
