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

// Styles
import classes from './ContentCover.styles';

const ContentCover = () => {
  const { mixins } = useTheme();
  const isMd = useMediaQuery('minWidth', 'md');
  const isLg = useMediaQuery('minWidth', 'lg');

  const links = [
    { key: 'ABOUT', href: ROUTES.ABOUT },
    { key: 'WORKS', href: ROUTES.WORKS },
    { key: 'LINKS', href: ROUTES.LINKS }
  ];

  const images = [{
    key: 'tuhn',
    src: isMd ?
      'assets/images/tunh@2x.gif' :
      'assets/images/tunh.gif',
    alt: WORKS.TUHN.title,
    href: WORKS.TUHN.href
  }, {
    key: 'doombox',
    src: isMd ?
      'assets/images/doombox@2x.png' :
      'assets/images/doombox.png',
    alt: WORKS.DOOMBOX.title,
    href: WORKS.DOOMBOX.href
  }, {
    key: 'thesis',
    src: isMd ?
      'assets/images/thesis@2x.png' :
      'assets/images/thesis.png',
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
      disablePadding
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

export default ContentCover;
