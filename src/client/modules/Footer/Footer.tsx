import { mtx, Mtx } from 'mtx';

import { Link } from '../../components';

import { LINKS, WORKS } from '../../utils/const';

import classes from './Footer.styles';

export class Footer extends Mtx {
  view() {
    return (
      <div className={classes.root}>
        <Link
          href={LINKS.TWITTER.href}
          external
          variant="caption"
        >
          {LINKS.TWITTER.handle}
        </Link>
        <Link
          href={WORKS.PORTFOLIO.href}
          external
          variant="caption"
        >
          {WORKS.PORTFOLIO.description}
        </Link>
      </div>
    );
  }
}
