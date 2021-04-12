import m from 'mithril';
import { mtx } from 'mtx';

// Modules
import { Page } from './modules';

// Utils
import { ROUTES } from './utils';

// Styles
import './theme/index.scss';

m.route.prefix = '';
m.route(document.body, ROUTES.HOME.href, {
  [ROUTES.HOME.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Home/Home.page').then(x => x.HomePage)
  },
  [ROUTES.ABOUT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/About.page').then(x => x.AboutPage)
  },
  [ROUTES.WORKS.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Works.page').then(x => x.WorksPage)
  },
  [ROUTES.WORK.href()]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Markdown.page').then(x => x.MarkdownPage)
  },
  [ROUTES.CONTACT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Contact.page').then(x => x.ContactPage)
  }
});
