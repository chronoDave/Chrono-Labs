import m from 'mithril';
import { mtx, Mtx } from 'mtx';
import { css, keyframes } from '@emotion/css';

import { Link } from '../components';

export class AboutPage extends Mtx {
  onbeforeremove(v: m.VnodeDOM) {
    v.dom.classList.add('exit');

    return new Promise(resolve => v.dom.addEventListener('animationend', resolve));
  }

  view() {
    return (
      <div
        className={css({
          animation: `${keyframes({
            from: {
              opacity: 0
            },
            to: {
              opacity: 1
            }
          })} 0.5s ease`
        })}
      >
        <Link href="/">
          Home
        </Link>
      </div>
    );
  }
}
