import m from 'mithril';
import { Mtx } from 'mtx';

import { cx } from '../../utils';

import './Typography.scss';

export interface TypographyProps {
  component?: string | m.Component<any, any>,
  className?: string,
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'subtitle' | 'caption',
  color?: 'primary' | 'textPrimary' | 'textSecondary',
  style?: { [key: string]: string | number | boolean }
  paragraph?: boolean
}

export class Typography extends Mtx<TypographyProps> {
  view({ children, attrs }: m.Vnode<TypographyProps>) {
    const {
      component = 'p',
      variant = 'body',
      color,
      paragraph,
      className,
      ...rest
    } = attrs;

    return m(
      component as string,
      {
        className: cx(
          'typography',
          `typography-${variant}`,
          color && `typography-color-${color}`,
          className
        ),
        ...rest
      },
      children
    );
  }
}
