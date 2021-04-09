import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography, TypographyProps } from '../Typography/Typography';

import classes from './Link.styles';

export interface LinkProps extends TypographyProps {
  href: string,
  external?: boolean,
  key?: string
}

export class Link extends Mtx<LinkProps> {
  view({ children, attrs }: m.Vnode<LinkProps>) {
    const { external, ...rest } = attrs;

    return (
      <Typography
        component={external ? 'a' : m.route.Link}
        className={classes.root}
        {...rest}
      >
        {children}
      </Typography>
    );
  }
}
