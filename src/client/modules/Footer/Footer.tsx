import { mtx, Mtx } from 'mtx';

import { EXTERNAL_ROUTES } from '../../../routes';

import { Link } from '../../components';

import './Footer.scss';

export class Footer extends Mtx {
  view() {
    return (
      <footer className="footer">
        <Link href={EXTERNAL_ROUTES.TWITTER.href} variant="caption">
          {EXTERNAL_ROUTES.TWITTER.title}
        </Link>
        <Link href={EXTERNAL_ROUTES.REPO.href} variant="caption">
          {EXTERNAL_ROUTES.REPO.title}
        </Link>
      </footer>
    );
  }
}
