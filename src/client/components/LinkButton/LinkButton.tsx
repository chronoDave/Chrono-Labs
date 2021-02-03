import React from 'react';
import { cx } from '@emotion/css';

// Core
import { Link, LinkProps } from '../Link';

// Styles
import classes from './LinkButton.styles';

export interface LinkButtonProps extends LinkProps {}

const LinkButton = ({ children, className, ...rest }: LinkButtonProps) => (
  <Link className={cx(classes.root, className)} {...rest}>
    {children}
  </Link>
);

export default LinkButton;
