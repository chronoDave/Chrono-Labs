import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Link } from '../../components';

import { cx } from '../../utils';
import { ROUTES } from '../../utils/const';

import './Navigation.scss';

export class Navigation extends Mtx {
  view() {
    const routes = [
      ROUTES.HOME,
      ROUTES.WORKS,
      ROUTES.ABOUT,
      ROUTES.CONTACT,
    ];

    return (
      <nav className="navigation" aria-label="Main Navigation">
        <ul className="navigation-ul">
          {routes.map(route => (
            <li key={route.href} className="navigation-li">
              <Link
                href={route.href}
                className={cx(
                  'navigation-a',
                  m.route.get() === route.href && 'navigation-active'
                )}
              >
                {route.title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
