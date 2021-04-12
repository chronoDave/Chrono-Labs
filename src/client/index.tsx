import m from 'mithril';
import { mtx } from 'mtx';

// Modules
import { Page } from './modules';

// Pages
import {
  HomePage,
  AboutPage,
  WorksPage,
  MarkdownPage,
  LinksPage
} from './pages';

// Utils
import { ROUTES } from './utils';

// Styles
import './theme/index.scss';

m.route.prefix = '';
m.route(document.body, ROUTES.HOME.href, {
  [ROUTES.HOME.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => HomePage
  },
  [ROUTES.ABOUT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => AboutPage
  },
  [ROUTES.WORKS.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => WorksPage
  },
  [ROUTES.WORK.href()]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => MarkdownPage
  },
  [ROUTES.LINKS.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => LinksPage
  }
});
