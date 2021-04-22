import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography, TypographyProps } from '../Typography/Typography';

import { cx } from '../../utils';

import './Link.scss';

export interface LinkProps extends TypographyProps {
  href: string
  key?: string
  underline?: boolean
  button?: boolean
}

export class Link extends Mtx<LinkProps> {
  view({ children, attrs }: m.Vnode<LinkProps>) {
    const {
      button,
      underline,
      className,
      ...rest
    } = attrs;

    return (
      <Typography
        component="a"
        className={cx(
          'link',
          button && 'link-button',
          underline && 'link-underline',
          className
        )}
        {...rest}
      >
        {children}
      </Typography>
    );
  }
}
