import { mtx, Mtx } from 'mtx';

import { Link, Block, Typography } from '../../components';
import { Carousel, CarouselImage } from '../../modules';

import { MIXINS, ROUTES } from '../../utils/const';

import './Home.page.scss';

export class HomePage extends Mtx {
  view() {
    const links = [
      ROUTES.WORKS,
      ROUTES.ABOUT,
      ROUTES.CONTACT
    ];

    const images: CarouselImage[] = [{
      key: 'tuhn',
      src: 'assets/images/tunh@2x.gif',
      alt: ''
    }, {
      key: 'doombox',
      src: 'assets/images/doombox@2x.png',
      alt: ''
    }, {
      key: 'thesis',
      src: 'assets/images/thesis@2x.png',
      alt: ''
    }];

    return (
      <Block
        fullHeight
        background="fade"
        className="home"
      >
        <div className="home-text">
          <Typography component="h1" variant="h1">
            CHRONODAVE
          </Typography>
          <Typography component="h2" variant="h4">
            MULTIMEDIA DESIGNER
          </Typography>
          <nav aria-label="Home Page Navigation" className="home-navigation">
            <ul>
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} button>
                    {link.title.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <Carousel
            width={MIXINS.CAROUSEL['1x']}
            height={MIXINS.CAROUSEL['1x']}
            images={images}
          />
        </div>
      </Block>
    );
  }
}
