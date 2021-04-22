import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { cx } from '../../utils';

import './ButtonBase.scss';

export interface ButtonBaseProps {
  key?: string
  className?: string
  onclick: (this: Window, ev: MouseEvent) => any
}

export class ButtonBase extends Mtx<ButtonBaseProps> {
  view({ attrs, children }: m.Vnode<ButtonBaseProps>) {
    const { className, onclick, ...rest } = attrs;

    return (
      <button
        onclick={onclick}
        className={cx('button-base', className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
