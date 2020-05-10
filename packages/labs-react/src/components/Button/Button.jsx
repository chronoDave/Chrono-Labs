import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Core
import { Typography } from '../Typography';

import ButtonBase from './ButtonBase';

// Validation
import {
  propSpacingShorthand,
  propTypographyVariant
} from '../../validation/propTypes';

// Styles
import { useButtonStyles } from './Button.style';

const Button = props => {
  const {
    variant,
    onChange,
    margin,
    TypographyProps,
    active,
    children
  } = props;

  const classes = useButtonStyles({ variant: TypographyProps.variant });

  return (
    <ButtonBase
      onChange={onChange}
      margin={margin}
      className={clsx({
        [classes.ornateRoot]: variant === 'ornate',
        [classes[`${variant}RootActive`]]: active
      })}
    >
      <Typography
        variant={variant === 'caption' ? 'caption' : 'body1'}
        className={clsx({
          [classes.ornateChild]: variant === 'ornate',
          [classes[`${variant}ChildActive`]]: active
        })}
        {...TypographyProps}
      >
        {children}
      </Typography>
    </ButtonBase>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'ornate'
  ]),
  active: PropTypes.bool,
  TypographyProps: PropTypes.shape({
    variant: propTypographyVariant
  }),
  margin: propSpacingShorthand,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  TypographyProps: {},
  margin: null,
  variant: null,
  active: false
};

export default Button;
