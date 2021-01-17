import { createElement, forwardRef } from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './Typography.styles';

export interface TypographyProps {
  component?: string,
  style?: { [key: string]: string | number },
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'subtitle' | 'caption',
  color?: 'inherit' | 'textPrimary' | 'primary',
  align?: 'left' | 'right' | 'center',
  className?: string,
  children: React.ReactNode,
  [key: string]: unknown
}

const Typography = forwardRef((props: TypographyProps, ref) => {
  const {
    component,
    variant = 'body',
    color = 'textPrimary',
    style,
    align = 'left',
    className,
    children,
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
        classes[align],
        classes[color],
        classes[variant],
        className
      ),
      ref,
      ...rest
    },
    children
  );
});

export default Typography;
