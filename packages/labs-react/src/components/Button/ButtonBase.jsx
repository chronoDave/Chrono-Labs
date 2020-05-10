import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Utils
import { shouldRenderClass } from '../../utils';

// Validation
import { propSpacingShorthand } from '../../validation/propTypes';

// Styles
import { useButtonStyles } from './Button.style';

const ButtonBase = props => {
  const {
    type,
    disabled,
    className,
    children,
    onChange,
    margin,
    ...rest
  } = props;

  const classes = useButtonStyles({ margin });

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.margin]: shouldRenderClass({ margin })
        },
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onChange}
      onKeyUp={onChange}
      {...rest}
    >
      {children}
    </button>
  );
};

ButtonBase.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset'
  ]),
  margin: propSpacingShorthand,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

ButtonBase.defaultProps = {
  disabled: false,
  type: 'button',
  margin: null,
  className: null
};

export default ButtonBase;
