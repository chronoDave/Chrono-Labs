import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Styles
import { useButtonStyles } from './Button.style';

const Button = props => {
  const {
    type,
    disabled,
    className,
    children,
    onChange,
    ...rest
  } = props;

  const classes = useButtonStyles();

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(
        classes.root,
        { [classes.disabled]: disabled },
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

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset'
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  className: null
};

export default Button;
