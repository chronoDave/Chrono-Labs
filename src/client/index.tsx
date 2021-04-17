import m from 'mithril';
import { mtx } from 'mtx';

// Routes
import { DYNAMIC_ROUTES, STATIC_ROUTES } from '../routes';

// Modules
import { Page } from './modules';

// Styles
import './theme/index.scss';

const setTitle = (url: string) => {
  const metadata = Object.values(STATIC_ROUTES).find(({ href }) => href === url);

  if (metadata?.title) document.title = `${metadata.title} | @chronoDave`;
};

m.route.prefix = '';
m.route(document.body, STATIC_ROUTES.HOME.href, {
  [STATIC_ROUTES.HOME.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: (_, path) => {
      setTitle(path);

      return import('./pages/Home/Home.page').then(x => x.HomePage);
    }
  },
  [STATIC_ROUTES.CONTACT.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: (_, path) => {
      setTitle(path);

      return import('./pages/Contact.page').then(x => x.ContactPage);
    }
  },
  [STATIC_ROUTES.WORKS.href]: {
    render: v => <Page>{v}</Page>,
    onmatch: (_, path) => {
      setTitle(path);

      import('./pages/Works.page').then(x => x.WorksPage);
    }
  },
  [DYNAMIC_ROUTES.WORKS()]: {
    render: v => <Page>{v}</Page>,
    onmatch: (_, path) => {
      setTitle(path);

      return import('./pages/Markdown.page').then(x => x.MarkdownPage);
    }
  },
  [DYNAMIC_ROUTES.ANY()]: {
    render: v => <Page>{v}</Page>,
    onmatch: (_, path) => {
      setTitle(path);

      return import('./pages/Markdown.page').then(x => x.MarkdownPage);
    }
  },
});
