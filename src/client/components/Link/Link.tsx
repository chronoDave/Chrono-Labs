import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography, TypographyProps } from '../Typography/Typography';

import { cx } from '../../utils';

import './Link.scss';

export interface LinkProps extends TypographyProps {
  href: string,
  key?: string
}

export class Link extends Mtx<LinkProps> {
  view({ children, attrs }: m.Vnode<LinkProps>) {
    const { className, ...rest } = attrs;

    return (
      <Typography
        component={/https:\/\//.test(attrs.href) ? 'a' : m.route.Link}
        className={cx('link', className)}
        {...rest}
      >
        {children}
      </Typography>
    );
  }
}
