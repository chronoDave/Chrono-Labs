import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './ButtonBase.styles';

export interface ButtonBaseProps {
  className?: string
  children?: React.ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, ...args: any[]) => void
}

const ButtonBase = forwardRef((
  props: ButtonBaseProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const {
    className,
    children,
    onClick
  } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={cx(classes.root, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default ButtonBase;
