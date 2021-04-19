import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { STATIC_ROUTES } from '../../../routes';

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

    return (
      <nav
        className={cx('navigation', className)}
        aria-label="Main Navigation"
      >
        <ul className="navigation-ul">
          {routes.map(route => (
            <li key={route.href} className="navigation-li">
              <Link
                href={route.href}
                className={cx(
                  'navigation-a',
                  m.route.get() === route.href && 'navigation-a-active'
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
