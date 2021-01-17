import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';

// Styles
import classes from './Icon.styles';

const icons = {
  chevronLeft: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  chevronRight: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
};

export interface IconProps {
  type: keyof typeof icons,
  className: string,
  size?: 'small' | 'large',
  [key: string]: unknown
}

const Icon = forwardRef((props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const {
    type,
    size = 'small',
    className,
    ...rest
  } = props;

  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      color="inherit"
      aria-hidden
      className={cx(classes.root, classes[size], className)}
      ref={ref}
      {...rest}
    >
      <path d={icons[type]} />
    </svg>
  );
});

export default Icon;
