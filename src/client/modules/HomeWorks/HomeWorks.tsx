import React from 'react';

// Core
import { BlockHome, Typography, LinkButton } from '../../components';

// Hooks
import { useMediaQuery } from '../../hooks';

// Utils
import { TEXT, WORKS } from '../../utils/const';

// Assets
import gifTuhn2x from '../../assets/images/tunh@2x.gif';
import gifTuhn from '../../assets/images/tunh.gif';
import pngDoombox2x from '../../assets/images/doombox@2x.png';
import pngDoombox from '../../assets/images/doombox.png';
import pngThesis2x from '../../assets/images/thesis@2x.png';
import pngThesis from '../../assets/images/thesis.png';

// Styles
import classes from './HomeWorks.styles';

const HomeWorks = () => {
  const isMd = useMediaQuery('minWidth', 'md');

  const works = [{
    key: 'tuhn',
    src: isMd ?
      gifTuhn2x :
      gifTuhn,
    title: WORKS.TUHN.title,
    description: WORKS.TUHN.description,
    href: WORKS.TUHN.href
  }, {
    key: 'doombox',
    src: isMd ?
      pngDoombox2x :
      pngDoombox,
    title: WORKS.DOOMBOX.title,
    description: WORKS.DOOMBOX.description,
    href: WORKS.DOOMBOX.href
  }, {
    key: 'thesis',
    src: isMd ?
      pngThesis2x :
      pngThesis,
    title: WORKS.THESIS.title,
    description: WORKS.THESIS.description,
    href: WORKS.THESIS.href
  }];

  return (
    <BlockHome background="fade" className={classes.root} disableSpacer>
      <Typography variant={isMd ? 'h2' : 'h4'} className={classes.title}>
        {TEXT.HOME.WORKS.TITLE}
      </Typography>
      <div className={classes.body}>
        {works.map(work => (
          <div key={work.key} className={classes.item}>
            <Typography variant={isMd ? 'h4' : 'h6'} className={classes.itemTitle}>
              {work.title}
            </Typography>
            <img src={work.src} alt={work.title} className={classes.itemImage} />
            <Typography variant={isMd ? 'h6' : 'body'} className={classes.itemDescription}>
              {work.description}
            </Typography>
            <LinkButton
              href={work.href}
              variant={isMd ? 'h6' : 'body'}
              className={classes.itemButton}
            >
              Read more
            </LinkButton>
          </div>
        ))}
      </div>
    </BlockHome>
  );
};

export default HomeWorks;
