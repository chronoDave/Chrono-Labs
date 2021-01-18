import React from 'react';

// Core
import {
  Typography,
  Carousel,
  CarouselBar,
  Container
} from '../../components';

// Hooks
import { useCarousel } from '../../hooks';

// Assets
import gifTuhn2x from '../../assets/tunh@2x.gif';
import pngDoombox2x from '../../assets/doombox@2x.png';
import pngThesis2x from '../../assets/thesis@2x.png';

// Styles
import classes from './Home.styles';

const HomePage = () => {
  const images = [{
    key: 'tuhn',
    src: gifTuhn2x,
    alt: 'Touhou Unmei no Hoshi'
  }, {
    key: 'doombox',
    src: pngDoombox2x,
    alt: 'Doombox'
  }, {
    key: 'thesis',
    src: pngThesis2x,
    alt: 'Thesis'
  }];
  const descriptions = [
    '東方運命の星 (Touhou Unmei no Hoshi) is a Touhou fangame made with the PICO-8 fantasy console, where you shoot bullets at the enemy whilst avoiding getting shot yourself.',
    'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable. It\'s built with Electron and React and supports both Windows and Mac operating systems.',
    'How can a game be developed where the story makes use of the interactivity the medium provides?'
  ];

  const {
    index,
    handleClick,
    handleNext,
    handlePrevious
  } = useCarousel(images.length);

  return (
    <Container
      maxWidth="xl"
      className={{
        root: classes.root,
        body: classes.body
      }}
    >
      <div className={classes.header}>
        <Typography color="inherit" variant="h1">
          CHRONODAVE
        </Typography>
        <Typography color="inherit" variant="h4">
          DESIGNER &amp; DEVELOPER
        </Typography>
      </div>
      <Container
        maxWidth="sm"
        className={{
          root: classes.containerRoot,
          body: classes.containerBody
        }}
      >
        <Typography variant="h4" align="center">
          {images[index].alt}
        </Typography>
        <Carousel
          width={512}
          height={512}
          index={index}
          className={classes.carousel}
          images={images}
          onClick={handleClick}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        <CarouselBar
          keys={images.map(({ key }) => key)}
          active={images[index].key}
          onClick={(_, newIndex) => handleClick(newIndex)}
          className={classes.carouselBar}
        />
        <Typography align="center" variant="h6" className={classes.description}>
          {descriptions[index]}
        </Typography>
      </Container>
    </Container>
  );
};

export default HomePage;
