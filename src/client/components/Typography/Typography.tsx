import m from 'mithril';
import { Mtx } from 'mtx';
import { cx } from '@emotion/css';

import classes from './Typography.styles';

export interface TypographyProps {
  component?: string | m.Component<any, any>,
  className?: string,
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'subtitle' | 'caption',
  color?: 'primary' | 'textPrimary' | 'textSecondary',
  gutter?: boolean
}

export class Typography extends Mtx<TypographyProps> {
  view({ children, attrs }: m.Vnode<TypographyProps>) {
    const {
      variant = 'body',
      component = 'p',
      color,
      gutter,
      className,
      ...rest
    } = attrs;

    return m(
      component as string,
      {
        className: cx(
          classes.root,
          classes[variant],
          color && classes[color],
          gutter && classes.gutter,
          className
        ),
        ...rest
      },
      children
    );
  }
}
