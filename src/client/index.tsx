import m from 'mithril';
import { mtx } from 'mtx';

// Routes
import { DYNAMIC_ROUTES, STATIC_ROUTES } from '../routes';

// Modules
import { Page } from './modules';

// Styles
import './theme/index.scss';

m.route.prefix = '';
m.route(document.body, STATIC_ROUTES.HOME.href, {
  [STATIC_ROUTES.HOME.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Home/Home.page').then(x => x.HomePage)
  },
  [STATIC_ROUTES.WORKS.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Works.page').then(x => x.WorksPage)
  },
  [STATIC_ROUTES.ABOUT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./modules/Markdown/Markdown').then(x => x.Markdown)
  },
  [STATIC_ROUTES.CONTACT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./pages/Contact.page').then(x => x.ContactPage)
  },
  [DYNAMIC_ROUTES.WORK()]: {
    render: v => <Page>{v}</Page>,
    onmatch: () => import('./modules/Markdown/Markdown').then(x => x.Markdown)
  },
});
