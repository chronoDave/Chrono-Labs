import { createElement, forwardRef } from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './Typography.styles';

export interface TypographyProps {
  component?: string,
  style?: { [key: string]: string | number },
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'subtitle' | 'caption',
  color?: 'inherit' | 'textPrimary' | 'primary',
  className?: string,
  children: React.ReactNode,
  gutterBottom?: boolean
  [key: string]: unknown
}

const Typography = forwardRef((props: TypographyProps, ref) => {
  const {
    component,
    variant = 'body',
    color = 'textPrimary',
    style,
    className,
    children,
    gutterBottom = false,
    ...rest
  } = props;

  const getElement = (): string => {
    if (component) return component;
    if (['body', 'subtitle', 'caption'].includes(variant)) return 'p';
    return variant;
  };

  return createElement(
    getElement(),
    {
      className: cx(
        classes.root,
        classes[color],
        classes[variant],
        { [classes.gutterBottom]: gutterBottom },
        className
      ),
      ref,
      ...rest
    },
    children
  );
});

export default Typography;
