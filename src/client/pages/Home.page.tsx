import React, { Fragment } from 'react';

// Core
import { BackgroundDither } from '../components';

// Modules
import {
  HomeLanding,
  HomeWorks,
  HomeLinks,
  HomeAbout
} from '../modules';

// Utils
import { TEXT } from '../utils/const';

// Assets
import gifTuhn2x from '../assets/tunh@2x.gif';
import pngDoombox2x from '../assets/doombox@2x.png';
import pngThesis2x from '../assets/thesis@2x.png';

const HomePage = () => {
  const works = [{
    key: 'tuhn',
    src: gifTuhn2x,
    alt: TEXT.WORKS.TUHN.TITLE,
    description: TEXT.WORKS.TUHN.DESCRIPTION
  }, {
    key: 'doombox',
    src: pngDoombox2x,
    alt: TEXT.WORKS.DOOMBOX.TITLE,
    description: TEXT.WORKS.DOOMBOX.DESCRIPTION
  }, {
    key: 'thesis',
    src: pngThesis2x,
    alt: TEXT.WORKS.THESIS.TITLE,
    description: TEXT.WORKS.THESIS.DESCRIPTION
  }];

  return (
    <Fragment>
      <HomeLanding works={works} />
      <HomeAbout />
      <BackgroundDither flip />
      <HomeWorks works={works} />
      <BackgroundDither />
      <HomeLinks />
      <BackgroundDither flip />
    </Fragment>
  );
};

export default HomePage;
