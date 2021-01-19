import React from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './Box.styles';

export interface BoxProps {
  className?: string,
  children: React.ReactNode
}

const Box = ({ className, children }: BoxProps) => (
  <div className={cx(classes.root, className)}>
    {children}
  </div>
);

export default Box;
