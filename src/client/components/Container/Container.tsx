import React from 'react';
import { cx } from '@emotion/css';

// Theme
import { theme } from '../../theme';

// Styles
import classes from './Container.styles';

export interface ContainerProps {
  children: React.ReactNode,
  maxWidth: keyof typeof theme['breakpoints']['value'],
  className?: {
    root?: string,
    body?: string
  }
}

const Container = ({ children, className, maxWidth }: ContainerProps) => (
  <div className={cx(classes.root, className?.root)}>
    <div className={cx(classes.body, classes[maxWidth], className?.body)}>
      {children}
    </div>
  </div>
);

export default Container;
