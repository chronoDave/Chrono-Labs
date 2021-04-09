import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography, TypographyProps } from '../Typography/Typography';

import classes from './Link.styles';

export interface LinkProps extends TypographyProps {
  href: string
}

export class Link extends Mtx<LinkProps> {
  view({ children, attrs }: m.Vnode<LinkProps>) {
    return (
      <Typography
        component={m.route.Link}
        className={classes.root}
        {...attrs}
      >
        {children}
      </Typography>
    );
  }
}
