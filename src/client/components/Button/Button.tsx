import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';

// Core
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';
import { Typography, TypographyProps } from '../Typography';

// Styles
import classes from './Button.styles';

export interface ButtonProps extends Omit<ButtonBaseProps, 'children'> {
  label: string,
  color?: 'white' | 'black',
  variant?: TypographyProps['variant']
}

const Button = forwardRef((props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    variant,
    label,
    color = 'white',
    ...rest
  } = props;

  return (
    <ButtonBase
      ref={ref}
      className={cx(classes.root, classes[color], className)}
      {...rest}
    >
      <Typography color="inherit" variant={variant}>
        {label}
      </Typography>
    </ButtonBase>
  );
});

export default Button;
