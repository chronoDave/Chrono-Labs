import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { STATIC_ROUTES } from '../../routes';

import { Link } from '../../components';
import { cx } from '../../utils';

import './Navigation.scss';

export interface NavigationProps {
  className?: string
}

export class Navigation extends Mtx<NavigationProps> {
  view({ attrs }: m.Vnode<NavigationProps>) {
    const { className } = attrs;

    const routes = [
      STATIC_ROUTES.HOME,
      STATIC_ROUTES.WORKS,
      STATIC_ROUTES.ABOUT,
      STATIC_ROUTES.CONTACT,
    ];

    const workRoutes = [
      STATIC_ROUTES.DOOMBOX,
      STATIC_ROUTES.THESIS,
      STATIC_ROUTES.TUHN
    ];

    const getActiveRoute = (current: string) => {
      const active = window.location.pathname;

      if (current === STATIC_ROUTES.WORKS.name && workRoutes.some(workRoute => active.includes(workRoute.name))) return true;
      if (active.includes(current)) return true;
      return (current === STATIC_ROUTES.HOME.name && active === (process.env.NODE_ENV === 'development' ? '/dist/' : '/'));
    };

    return (
      <nav
        className={cx('navigation', className)}
        aria-label="Main Navigation"
      >
        <ul className="navigation-ul">
          {routes.map(route => (
            <li key={route.id} className="navigation-li">
              <Link
                href={`${route.name}.html`}
                className={cx(
                  'navigation-a',
                  getActiveRoute(route.name) && 'navigation-a-active'
                )}
              >
                {route.id.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
