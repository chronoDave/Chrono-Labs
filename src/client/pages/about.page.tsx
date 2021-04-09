import { mtx, Mtx } from 'mtx';

import { Link } from '../components';

export class AboutPage extends Mtx {
  view() {
    return (
      <div>
        <Link href="/">
          Home
        </Link>
      </div>
    );
  }
}
