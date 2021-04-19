import m from 'mithril';
import { Mtx, mtx } from 'mtx';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { getBreakpoint, BreakpointKeys } from '../../utils';
import { STATIC_ROUTES } from '../../../routes';

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

  onupdate() {
    const url = m.route.get();
    const metadata = Object.values(STATIC_ROUTES).find(({ href }) => href === url);

    if (metadata?.title) document.title = `${metadata.title} | @chronoDave`;
  }

  onremove() {
    window.removeEventListener('resize', this.handleResize);
  }

  view({ children }: m.Vnode) {
    return (
      <div className="page">
        <Header />
        <div className="page-body">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
