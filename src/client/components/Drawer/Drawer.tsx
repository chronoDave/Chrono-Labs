import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { cx } from '../../utils';

import './Drawer.scss';

export interface DrawerProps {
  id?: string
  open?: boolean
}

export class Drawer extends Mtx<DrawerProps> {
  view({ attrs, children }: m.Vnode<DrawerProps>) {
    const { id, open } = attrs;

    return (
      <div id={id} className={cx('drawer', open && 'drawer-open')}>
        {children}
      </div>
    );
  }
}
