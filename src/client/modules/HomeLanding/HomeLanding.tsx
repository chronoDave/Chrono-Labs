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
  const isMd = useMediaQuery(({ create }) => create('minWidth', 'md'));
  const { mixins } = useTheme();
  const [, setLocation] = useLocation();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div>
          <Typography variant="h1">
            {TEXT.HOME.TITLE}
          </Typography>
          <Typography variant="h4">
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
                variant="h6"
                onClick={() => setLocation(location)}
                className={classes.button}
              />
            ))}
          </div>
        </div>
        <div className={classes.body}>
          <Carousel
            width={(isMd ?
              mixins.carousel.md :
              mixins.carousel.xs
            )}
            height={(isMd ?
              mixins.carousel.md :
              mixins.carousel.xs
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
            variant="h4"
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
