import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Core
import { Avatar as MuiAvatar } from '@material-ui/core';

// Assets
import avatar from '../../../assets/avatar.jpg';

// Styles
import { useAvatarStyles } from './Avatar.style';

const Avatar = ({ size, className, ...rest }) => {
  const classes = useAvatarStyles();

  return (
    <MuiAvatar
      src={avatar}
      alt="David 'ChronoDave' Wolters"
      className={clsx(classes[size], className)}
      {...rest}
    />
  );
};

Avatar.defaultProps = {
  className: '',
  size: 'xs'
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

export default Avatar;
