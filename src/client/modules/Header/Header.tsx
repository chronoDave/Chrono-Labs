import m from 'mithril';
import { mtx, Mtx } from 'mtx';
import { cx } from '@emotion/css';

import { Link } from '../../components';
import { ROUTES } from '../../utils/const';

import classes from './Header.styles';

export class Header extends Mtx {
  view() {
    const routes = [
      ROUTES.HOME,
      ROUTES.ABOUT,
      ROUTES.WORKS,
      ROUTES.LINKS,
    ];

    return (
      <div className={classes.root}>
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={cx(
              classes.itemRoot,
              m.route.get() === route.href && classes.itemActive
            )}
          >
            {route.title}
          </Link>
        ))}
      </div>
    );
  }
}
