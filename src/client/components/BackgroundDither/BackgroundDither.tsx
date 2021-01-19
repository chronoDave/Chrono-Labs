import React from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './BackgroundDither.styles';

export interface BackgroundDitherProps {
  flip?: boolean,
  className?: string
}

const BackgroundDither = ({ flip = false, className }: BackgroundDitherProps) => (
  <div className={cx(classes.root, { [classes.flip]: flip }, className)} />
);

export default BackgroundDither;
