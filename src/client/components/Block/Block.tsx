import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { cx, BreakpointKeys } from '../../utils';

import './Block.scss';

export interface BlockProps {
  className?: string
  width?: BreakpointKeys
  background?: 'fill' | 'fillInverse' | 'fade' | 'fadeInverse'
  fullHeight?: boolean
}

export class Block extends Mtx<BlockProps> {
  view({ attrs, children }: m.Vnode<BlockProps>) {
    const {
      width = 'lg',
      fullHeight,
      background,
      className
    } = attrs;

    return (
      <div
        className={cx(
          'block',
          background && `block-${background}`,
          fullHeight && 'block-landing'
        )}
      >
        <div
          className={cx(
            'block-body',
            `block-${width}`,
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
}
