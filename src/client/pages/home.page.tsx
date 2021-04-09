import { mtx, Mtx } from 'mtx';

import { Link } from '../components';

export class HomePage extends Mtx {
  view() {
    return (
      <Link href="/links">
        Links
      </Link>
    );
  }
}
