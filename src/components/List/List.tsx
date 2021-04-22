import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography } from '../Typography/Typography';

import './List.scss';

export class List extends Mtx {
  view({ children }: m.Vnode) {
    return (
      <Typography component="ul">
        {children}
      </Typography>
    );
  }
}
