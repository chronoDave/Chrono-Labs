import m from 'mithril';
import { mtx } from 'mtx';

// Modules
import { App } from './modules';

// Pages
import {
  HomePage,
  LinksPage,
  // MarkdownPage,
  // NotFoundPage,
  // WorksPage
} from './pages';

// Utils
import { ROUTES } from './utils';

m.route.prefix = '';
m.route(document.body, ROUTES.HOME, {
  [ROUTES.HOME]: {
    render: v => <App>{v}</App>,
    onmatch: () => HomePage
  },
  [ROUTES.LINKS]: {
    render: v => <App>{v}</App>,
    onmatch: () => LinksPage
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
