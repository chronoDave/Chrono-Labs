import React from 'react';
import { cx } from '@emotion/css';

// Core
import { Typography, TypographyProps } from '../Typography';

// Styles
import classes from './Link.styles';

export interface LinkProps extends TypographyProps {
  href: string,
  underline?: boolean
}

const Link = (props: LinkProps) => {
  const {
    href,
    children,
    className,
    underline = false,
    ...rest
  } = props;

  return (
    <Typography
      component="a"
      href={href}
      className={cx(classes.root, {
        [classes.underline]: underline
      }, className)}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Link;
