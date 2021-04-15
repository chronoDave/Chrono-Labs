import { mtx, Mtx } from 'mtx';

import { EXTERNAL_ROUTES } from '../../../routes';

import { Navigation } from '../Navigation/Navigation';

import { Link } from '../../components';

import './Header.scss';

export class Header extends Mtx {
  view() {
    return (
      <header className="header">
        <Link href={EXTERNAL_ROUTES.TWITTER.href}>
          {EXTERNAL_ROUTES.TWITTER.description}
        </Link>
        <Navigation />
      </header>
    );
  }
}
