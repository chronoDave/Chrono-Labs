import { mtx, Mtx } from 'mtx';

import { STATIC_ROUTES } from '../../../routes';

import { Link, Block, Typography } from '../../components';
import { Carousel, CarouselImage } from '../../modules';

import { getMediaQuery } from '../../utils';

import './Home.page.scss';

export class HomePage extends Mtx {
  private carouselIndex = 0;

  view() {
    const isMd = getMediaQuery('md');
    const isXl = getMediaQuery('xl');

    const size = isMd ? 512 : 256;

    const links = [
      STATIC_ROUTES.WORKS,
      STATIC_ROUTES.ABOUT,
      STATIC_ROUTES.CONTACT
    ];

    const images: CarouselImage[] = [
      STATIC_ROUTES.TUHN,
      STATIC_ROUTES.DOOMBOX,
      STATIC_ROUTES.THESIS
    ].map(work => ({
      key: work.title,
      src: work.image.replace('2x', isMd ? '2x' : '1x'),
      alt: work.title.split('|')[0].trim()
    }));

    return (
      <Block
        fullHeight
        background="fade"
        className="home"
      >
        <div className="home-text">
          <Typography component="h1" variant="h2">
            CHRONODAVE
          </Typography>
          <Typography component="h2" variant="h4">
            MULTIMEDIA DESIGNER
          </Typography>
          {isXl && (
            <nav aria-label="Home Page Navigation" className="home-navigation">
              <ul className="home-navigation-ul">
                {links.map(link => (
                  <li key={link.href} className="home-navigation-li">
                    <Link href={link.href} button className="home-navigation-a">
                      {link.title.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="home-carousel">
          <Carousel
            width={size}
            height={size}
            images={images}
            autoPlay={10000}
            onChange={index => {
              this.carouselIndex = index;
            }}
          />
          <Typography
            component="h2"
            variant="h4"
            className="home-carousel-alt"
          >
            {images[this.carouselIndex].alt}
          </Typography>
        </div>
      </Block>
    );
  }
}
