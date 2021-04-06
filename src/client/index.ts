import m from 'mithril';

// Providers
import { ThemeProvider } from './providers';

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

m.mount(
  document.body,
  ThemeProvider
);

m.route.prefix = '';
m.route(document.body, ROUTES.HOME, {
  [ROUTES.HOME]: HomePage,
  [ROUTES.LINKS]: LinksPage,
  [ROUTES.MARKDOWN]: MarkdownPage,
  [ROUTES.WORKS]: WorksPage,
  [ROUTES.NOT_FOUND]: NotFoundPage,
});
