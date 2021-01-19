import React from 'react';
import { cx } from '@emotion/css';
import { useLocation } from 'wouter';

// Core
import { Typography, TypographyProps } from '../Typography';

// Styles
import classes from './Link.styles';

export interface LinkProps extends TypographyProps {
  href: string
}

const Link = (props: LinkProps) => {
  const {
    children,
    href,
    className,
    ...rest
  } = props;
  const [location] = useLocation();

  return (
    <Typography
      component="a"
      href={href}
      className={cx(classes.root, {
        [classes.active]: location === href
      }, className)}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Link;
