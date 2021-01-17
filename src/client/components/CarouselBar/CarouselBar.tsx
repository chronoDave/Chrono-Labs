import React from 'react';
import { cx } from '@emotion/css';

// Core
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

// Styles
import classes from './CarouselBar.styles';

export interface CarouselBarProps extends ButtonBaseProps {
  keys: string[],
  active: string
}

const CarouselBar = (props: CarouselBarProps) => {
  const {
    keys,
    active,
    onClick,
    className
  } = props;

  return (
    <div className={cx(classes.root, className)}>
      {keys.map(key => (
        <ButtonBase
          key={key}
          className={cx(classes.item, { [classes.active]: active === key })}
          onClick={event => onClick(event, key)}
        />
      ))}
    </div>
  );
};

export default CarouselBar;
