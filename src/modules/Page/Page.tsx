import m from 'mithril';
import { Mtx, mtx } from 'mtx';

import { Block, Typography } from '../../components';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { getBreakpoint, BreakpointKeys } from '../../utils';

import '../../styles/reset.scss';
import './Page.scss';

export interface PageProps {
  content?: boolean
  lastUpdated?: string
}

export class Page extends Mtx<PageProps> {
  private breakpoint: BreakpointKeys;

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

  view({ attrs, children }: m.Vnode<PageProps>) {
    const { content, lastUpdated } = attrs;

    return (
      <div className="page">
        <Header />
        <div className="page-body">
          {content ? (
            <Block
              fullHeight
              maxWidth="md"
              background="fillInverse"
              className="page-content"
            >
              {children}
              {lastUpdated && (
                <Typography variant="caption">
                  <i>Last updated {lastUpdated}</i>
                </Typography>
              )}
            </Block>
          ) : children}
        </div>
        <Footer />
      </div>
    );
  }
}
