import React from 'react';

// Core
import { ButtonBase, Carousel, Typography } from '../../components';

// Hooks
import { useCarousel, useTheme, useMediaQuery } from '../../hooks';

// Styles
import classes from './CarouselHome.styles';

type Image = {
  src: string,
  alt: string,
  key: string,
  description: string
};

export interface CarouselHomeProps {
  images: Image[]
}

const CarouselHome = ({ images }: CarouselHomeProps) => {
  const isMd = useMediaQuery(({ create }) => create('minWidth', 'md'));
  const { mixins } = useTheme();
  const {
    index,
    handleClick,
    handleNext,
    handlePrevious
  } = useCarousel(images.length);

  return (
    <div className={classes.root}>
      <ButtonBase onClick={() => null} className={classes.title}>
        <Typography variant="h4" align="center">
          {images[index].alt}
        </Typography>
      </ButtonBase>
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
        images={images}
        showBars
        index={index}
        onClick={handleClick}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <div className={classes.description}>
        <Typography variant="h6">
          {images[index].description}
        </Typography>
      </div>
    </div>
  );
};

export default CarouselHome;
