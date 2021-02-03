import React from 'react';
import { cx } from '@emotion/css';

// Core
import { Block, BlockProps } from '../Block';

// Styles
import classes from './BlockHome.styles';

export interface BlockHomeProps extends BlockProps {}

const BlockHome = ({ children, className, ...rest }: BlockHomeProps) => (
  <Block className={cx(classes.root, className)} {...rest}>
    {children}
  </Block>
);

export default BlockHome;
