import React from 'react';
import { useLocation } from 'wouter';

// Core
import { Typography, Button } from '../../components';

// Modules
import { CarouselHome } from '../../modules';

// Utils
import { ROUTES } from '../../utils/const';

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
    alt: 'Touhou: Star of Destiny',
    description: '東方運命の星 (Touhou: Star of Destiny) is a Touhou fangame made with the PICO-8 fantasy console, where you shoot bullets at the enemy whilst avoiding getting shot yourself.'
  }, {
    key: 'doombox',
    src: pngDoombox2x,
    alt: 'Doombox',
    description: 'Doombox is a music player designed and built to support a large, personal music collection. It\'s free, open source and high customizable.'
  }, {
    key: 'thesis',
    src: pngThesis2x,
    alt: 'Thesis',
    description: 'How can a game be developed where the story makes use of the interactivity the medium provides?'
  }];

  const [, setLocation] = useLocation();

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div>
          <Typography variant="h1">
            CHRONODAVE
          </Typography>
          <Typography variant="h4">
            MULTIMEDIA DESIGNER
          </Typography>
          <div className={classes.titleButtons}>
            <Button
              label="ABOUT"
              variant="h6"
              onClick={() => setLocation(ROUTES.ABOUT)}
              className={classes.button}
            />
            <Button
              label="WORKS"
              variant="h6"
              onClick={() => setLocation(ROUTES.WORKS)}
              className={classes.button}
            />
            <Button
              label="CONTACT"
              variant="h6"
              onClick={() => setLocation(ROUTES.CONTACT)}
              className={classes.button}
            />
          </div>
        </div>
        <div className={classes.containerCarousel}>
          <CarouselHome images={images} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
