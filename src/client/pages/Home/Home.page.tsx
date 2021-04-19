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
      src: isMd ?
        work.images?.['2x'] || work.images.og :
        work.images?.['1x'] || work.images.og,
      alt: work.title
    }));

    return (
      <Block
        fullHeight
        background="fade"
        className="home"
        maxWidth="fs"
      >
        <div className="home-text">
          <Typography
            component="h1"
            variant={isXl ? 'h1' : isMd ? 'h2' : 'h3'}
          >
            CHRONODAVE
          </Typography>
          <Typography component="h2" variant={isMd ? 'h4' : 'h5'}>
            MULTIMEDIA DESIGNER
          </Typography>
          {isMd && (
            <nav aria-label="Home Page Navigation" className="home-navigation">
              <ul className="home-navigation-ul">
                {links.map(link => (
                  <li key={link.href} className="home-navigation-li">
                    <Link href={link.href} button className="home-navigation-a">
                      {link.id.toUpperCase()}
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
            variant="h5"
            className="home-carousel-alt"
            style={{ width: `${size}px` }}
          >
            {images[this.carouselIndex].alt}
          </Typography>
        </div>
      </Block>
    );
  }
}
