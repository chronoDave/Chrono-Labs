import React from 'react';
import { cx } from '@emotion/css';
import { useLocation } from 'wouter';

// Core
import { Link, LinkProps } from '../Link';

// Styles
import classes from './LinkNavigation.styles';

export interface LinkNavigationProps extends LinkProps {}

const LinkNavigation = (props: LinkNavigationProps) => {
  const {
    children,
    href,
    className,
    ...rest
  } = props;
  const [location] = useLocation();

  return (
    <Link
      href={href}
      className={cx(classes.root, {
        [classes.active]: location === href
      }, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkNavigation;
