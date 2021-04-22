import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { cx, BreakpointKeys } from '../../utils';

import './Block.scss';

export interface BlockProps {
  className?: string
  maxWidth?: BreakpointKeys
  background?: 'fill' | 'fillInverse' | 'fade' | 'fadeInverse'
  fullHeight?: boolean
}

export class Block extends Mtx<BlockProps> {
  view({ attrs, children }: m.Vnode<BlockProps>) {
    const {
      maxWidth = 'lg',
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
        <div className={cx(`block-${maxWidth}`, className)}>
          {children}
        </div>
      </div>
    );
  }
}
