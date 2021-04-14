import m from 'mithril';
import { Mtx, mtx } from 'mtx';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { getBreakpoint, BreakpointKeys } from '../../utils';

import './Page.scss';

export class Page extends Mtx {
  breakpoint: BreakpointKeys;

  constructor() {
    super();

    this.breakpoint = getBreakpoint();

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    const breakpoint = getBreakpoint();

    if (breakpoint !== this.breakpoint) {
      this.breakpoint = breakpoint;
      m.redraw();
    }
  }

  oncreate() {
    window.addEventListener('resize', this.handleResize);
  }

  onremove() {
    window.removeEventListener('resize', this.handleResize);
  }

  view({ children }: m.Vnode) {
    return (
      <div>
        <Header />
        <div className="page">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
