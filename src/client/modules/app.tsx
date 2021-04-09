import m from 'mithril';
import { Mtx, mtx } from 'mtx';
import { injectGlobal } from '@emotion/css';

// Theme
import { theme } from '../theme';

export class App extends Mtx {
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
      <div className="app">
        {children}
      </div>
    );
  }
}
