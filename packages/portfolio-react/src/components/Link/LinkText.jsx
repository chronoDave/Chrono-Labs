import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Tooltip, Typography } from '@material-ui/core';

// Styles
import { useLinkStyles } from './Link.style';

const LinkText = ({ children, href, ...rest }) => {
  const classes = useLinkStyles();

  return (
    <Tooltip
      placement="top"
      title={href}
      classes={{ tooltipPlacementTop: classes.textTooltip }}
    >
      <Typography
        component="a"
        href={href}
        classes={{ root: classes.textRoot }}
        {...rest}
      >
        {children}
      </Typography>
    </Tooltip>
  );
};

LinkText.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkText;
