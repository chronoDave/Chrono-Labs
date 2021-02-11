import React from 'react';

// Core
import {
  Typography,
  Hidden,
  Block,
  Carousel,
  Link,
  LinkButton
} from '../../components';

// Hooks
import { useMediaQuery, useTheme, useCarousel } from '../../hooks';

// Utils
import { WORKS, ROUTES, TEXT } from '../../utils/const';

// Assets
import gifTuhn2x from '../../assets/images/tunh@2x.gif';
import gifTuhn from '../../assets/images/tunh.gif';
import pngDoombox2x from '../../assets/images/doombox@2x.png';
import pngDoombox from '../../assets/images/doombox.png';
import pngThesis2x from '../../assets/images/thesis@2x.png';
import pngThesis from '../../assets/images/thesis.png';

// Styles
import classes from './HomeLanding.styles';

const HomeLanding = () => {
  const { mixins } = useTheme();
  const isMd = useMediaQuery('minWidth', 'md');
  const isLg = useMediaQuery('minWidth', 'lg');

  const links = [
    { key: 'ABOUT', href: ROUTES.ABOUT },
    { key: 'WORKS', href: ROUTES.WORKS },
    { key: 'CONTACT', href: ROUTES.CONTACT }
  ];

  const images = [{
    key: 'tuhn',
    src: isMd ?
      gifTuhn2x :
      gifTuhn,
    alt: WORKS.TUHN.title,
    href: WORKS.TUHN.href
  }, {
    key: 'doombox',
    src: isMd ?
      pngDoombox2x :
      pngDoombox,
    alt: WORKS.DOOMBOX.title,
    href: WORKS.DOOMBOX.href
  }, {
    key: 'thesis',
    src: isMd ?
      pngThesis2x :
      pngThesis,
    alt: WORKS.THESIS.title,
    href: WORKS.THESIS.href
  }];

  const {
    index,
    handleClick,
    handleNext,
    handlePrevious
  } = useCarousel(images.length);

  const getTitleVariant = () => {
    if (isLg) return 'h1';
    if (isMd) return 'h2';
    return 'h4';
  };

  return (
    <Block
      className={classes.root}
      background="fade"
      width="fs"
      disableSpacer
    >
      <div className={classes.titleRoot}>
        <Typography variant={getTitleVariant()}>
          {TEXT.HOME.TITLE}
        </Typography>
        <Typography variant={isMd ? 'h4' : 'h6'}>
          {TEXT.HOME.DESCRIPTION}
        </Typography>
        <Hidden on={({ create }) => create('maxWidth', 'xl')}>
          <div className={classes.titleLinks}>
            {links.map(link => (
              <LinkButton
                key={link.key}
                href={link.href}
                className={classes.titleLink}
                variant="h6"
              >
                {link.key}
              </LinkButton>
            ))}
          </div>
        </Hidden>
      </div>
      <div className={classes.carouselRoot}>
        <Carousel
          width={(isMd ?
            mixins.carousel['2x'] :
            mixins.carousel['1x']
          )}
          height={(isMd ?
            mixins.carousel['2x'] :
            mixins.carousel['1x']
          )}
          className={classes.carouselBody}
          images={images}
          index={index}
          onClick={handleClick}
          onPrevious={handlePrevious}
          onNext={handleNext}
          showBars
        />
        <Link
          variant={isMd ? 'h4' : 'h6'}
          align="center"
          href={images[index].href}
        >
          {images[index].alt}
        </Link>
      </div>
    </Block>
  );
};

export default HomeLanding;
