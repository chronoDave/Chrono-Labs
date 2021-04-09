import m from 'mithril';
import { Mtx, mtx } from 'mtx';
import { injectGlobal } from '@emotion/css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { theme } from '../../theme';

import classes from './Page.styles';

export class Page extends Mtx {
  oninit() {
    injectGlobal({
      body: {
        backgroundColor: theme.palette[7],
        margin: 0
      }
    });
  }

  view({ children }: m.Vnode) {
    return (
      <div>
        <Header />
        <div className={classes.root}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
