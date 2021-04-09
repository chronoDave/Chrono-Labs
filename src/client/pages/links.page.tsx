import { mtx, Mtx } from 'mtx';

import { Link } from '../components';

export class LinksPage extends Mtx {
  view() {
    return (
      <Link href="/">
        Home
      </Link>
    );
  }
}
