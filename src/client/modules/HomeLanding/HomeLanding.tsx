import React from 'react';
import { useLocation } from 'wouter';

// Core
import { Carousel, Button, Typography } from '../../components';

// Hooks
import { useTheme, useCarousel, useMediaQuery } from '../../hooks';

// Utils
import { TEXT, ROUTES } from '../../utils/const';

// Styles
import classes from './HomeLanding.styles';

type Work = {
  src: string,
  alt: string,
  key: string,
  description: string
};

export interface HomeLandingProps {
  works: Work[]
}

const HomeLanding = ({ works }: HomeLandingProps) => {
  const {
    index,
    handleClick,
    handleNext,
    handlePrevious
  } = useCarousel(works.length);
  const { mixins } = useTheme();
  const [, setLocation] = useLocation();

  const isMd = useMediaQuery(({ create }) => create('minWidth', 'md'));
  const isLg = useMediaQuery(({ create }) => create('minWidth', 'lg'));

  const breakpoint = (() => {
    if (isLg) return 'lg';
    if (isMd) return 'md';
    return 'xs';
  })();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Typography
            variant={{
              lg: 'h1',
              md: 'h3',
              xs: 'h4'
            }[breakpoint]}
          >
            {TEXT.HOME.TITLE}
          </Typography>
          <Typography
            variant={{
              lg: 'h4',
              md: 'h6',
              xs: 'body'
            }[breakpoint]}
          >
            {TEXT.HOME.DESCRIPTION}
          </Typography>
          <div className={classes.buttons}>
            {[
              { key: 'ABOUT', location: ROUTES.ABOUT },
              { key: 'WORKS', location: ROUTES.WORKS },
              { key: 'CONTACT', location: ROUTES.CONTACT }
            ].map(({ key, location }) => (
              <Button
                key={key}
                label={key}
                variant={isMd ? 'h6' : 'body'}
                onClick={() => setLocation(location)}
                className={classes.button}
              />
            ))}
          </div>
        </div>
        <div className={classes.body}>
          <Carousel
            width={(isMd ?
              mixins.carousel['2x'] :
              mixins.carousel['1x']
            )}
            height={(isMd ?
              mixins.carousel['2x'] :
              mixins.carousel['1x']
            )}
            className={classes.carousel}
            images={works}
            showBars
            index={index}
            onClick={handleClick}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
          <Typography
            variant={isMd ? 'h4' : 'h6'}
            align="center"
            component="a"
            href="/"
            className={classes.link}
          >
            {works[index].alt}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
