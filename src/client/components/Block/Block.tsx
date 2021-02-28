import React from 'react';
import { cx } from '@emotion/css';

// Theme
import { Theme } from '../../theme';

// Styles
import classes from './Block.styles';

export interface BlockProps {
  children: React.ReactNode,
  background: 'fill' | 'fillInverse' | 'fade' | 'fadeInverse',
  width?: keyof Theme['breakpoints']['value']
  className?: string,
  disableSpacer?: boolean,
  disablePadding?: boolean,
  flex?: 'row' | 'column'
}

const Block = (props: BlockProps) => {
  const {
    disableSpacer,
    disablePadding,
    children,
    className,
    width = 'xl',
    background = 'fill',
    flex = 'row'
  } = props;

  return (
    <div className={cx(classes.root, classes[background])}>
      <div
        className={cx(classes[width], classes[flex], {
          [classes.padding]: !disablePadding
        }, className)}
      >
        {children}
      </div>
      {!disableSpacer && (
        <div className={classes.spacer} />
      )}
    </div>
  );
};

export default Block;
