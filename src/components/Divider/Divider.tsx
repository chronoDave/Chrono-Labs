import { mtx, Mtx } from 'mtx';

import './Divider.scss';

export class Divider extends Mtx {
  view() {
    return <hr className="divider" />;
  }
}
