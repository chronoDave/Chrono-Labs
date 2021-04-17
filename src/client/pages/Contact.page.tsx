import { mtx, Mtx } from 'mtx';

import { Link } from '../components';

export class ContactPage extends Mtx {
  view() {
    return (
      <div>
        <Link href="/">
          Contact
        </Link>
      </div>
    );
  }
}
