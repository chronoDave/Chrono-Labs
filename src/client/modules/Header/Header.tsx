import { mtx, Mtx } from 'mtx';

import { Navigation } from '../Navigation/Navigation';

import { Link } from '../../components';
import { LINKS } from '../../utils/const';

import './Header.scss';

export class Header extends Mtx {
  view() {
    return (
      <header className="header">
        <Link href={LINKS.TWITTER.href}>
          {LINKS.TWITTER.handle}
        </Link>
        <Navigation />
      </header>
    );
  }
}
