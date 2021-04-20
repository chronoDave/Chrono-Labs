import m from 'mithril';
import { mtx, Mtx } from 'mtx';

import { Navigation } from '../Navigation/Navigation';
import { ButtonIcon, Drawer, Link } from '../../components';

import { getMediaQuery } from '../../utils';
import { EXTERNAL_ROUTES } from '../../../routes';

import './Header.scss';

export class Header extends Mtx {
  private open = false;
  private currentUrl = m.route.get();

  view() {
    const isSm = getMediaQuery('sm');

    if (isSm) this.open = false;
    if (this.currentUrl !== m.route.get()) {
      this.currentUrl = m.route.get();
      this.open = false;
    }

    return [(
      <header className="header">
        <Link href={EXTERNAL_ROUTES.TWITTER.href}>
          {EXTERNAL_ROUTES.TWITTER.description}
        </Link>
        {isSm ?
          <Navigation /> :
          <ButtonIcon
            id="menu"
            onclick={() => {
              this.open = !this.open;
            }}
            aria-label="Open Navigation Drawer"
            aria-haspopup="true"
            aria-controls="drawer"
          />
        }
      </header>
    ), (
      <Drawer open={this.open} id="drawer">
        <Navigation className="navigation-drawer" />
      </Drawer>
    )];
  }
}
