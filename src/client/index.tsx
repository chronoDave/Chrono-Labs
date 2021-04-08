import m from 'mithril';

// Modules
import { App } from './modules';

// Pages
import {
  HomePage,
  LinksPage,
  MarkdownPage,
  NotFoundPage,
  WorksPage
} from './pages';

// Utils
import { ROUTES } from './utils';

// interface Base<A> extends m.Component<A> {
//   tag: any,
//   attrs: any,
//   state: any
// }

// const Foo = (): Base<{}> => ({
//   tag: 'div',
//   attrs: {},
//   state: {},
//   view: () => null
// });

m.route.prefix = '';
m.route(document.body, ROUTES.HOME, {
  [ROUTES.HOME]: {
    onmatch: () => HomePage,
    render: v => <App foo="string">{v}</App>
  }
});

// m.route.prefix = '';
// m.route(document.body, ROUTES.HOME, {
//   [ROUTES.HOME]: HomePage,
//   [ROUTES.LINKS]: LinksPage,
//   [ROUTES.MARKDOWN]: MarkdownPage,
//   [ROUTES.WORKS]: WorksPage,
//   [ROUTES.NOT_FOUND]: NotFoundPage,
// });
