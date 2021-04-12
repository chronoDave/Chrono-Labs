import { mtx, Mtx } from 'mtx';

import { Link } from '../../components';

import { LINKS, WORKS } from '../../utils/const';

import './Footer.scss';

export class Footer extends Mtx {
  view() {
    return (
      <footer className="footer">
        <Link href={LINKS.TWITTER.href} variant="caption">
          {LINKS.TWITTER.handle}
        </Link>
        <Link href={WORKS.PORTFOLIO.href} variant="caption">
          {WORKS.PORTFOLIO.description}
        </Link>
      </footer>
    );
  }
}
