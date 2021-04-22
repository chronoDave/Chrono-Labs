import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Typography } from '../Typography/Typography';

import './ListItem.scss';

export class ListItem extends Mtx {
  view({ children }: m.Vnode) {
    return (
      <Typography component="li" className="list-item">
        {children}
      </Typography>
    );
  }
}
