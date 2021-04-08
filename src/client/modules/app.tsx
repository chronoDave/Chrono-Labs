import m from 'mithril';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';
import { injectGlobal } from '@emotion/css';

// Theme
import { palette } from '../theme';

export interface AppProps {}

type Vnode = m.Vnode<AppProps, App>;

export class App extends Component<AppProps> {
  oninit() {
    injectGlobal({
      body: {
        backgroundColor: palette[7],
        margin: 0
      }
    });
  }

  view({ children }: Vnode) {
    return (
      <div>
        {children}
      </div>
    );
  }
}
