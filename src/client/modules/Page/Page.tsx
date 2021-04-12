import m from 'mithril';
import { Mtx, mtx } from 'mtx';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './Page.scss';

export class Page extends Mtx {
  view({ children }: m.Vnode) {
    return (
      <div>
        <Header />
        <div className="page-body">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
