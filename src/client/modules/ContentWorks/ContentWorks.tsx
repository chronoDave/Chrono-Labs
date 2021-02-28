import React, { Fragment } from 'react';

// Core
import { Typography } from '../../components';

import { ContentWork } from '../ContentWork';

// Hooks
import { useMediaQuery } from '../../hooks';

// Utils
import { TEXT, WORKS } from '../../utils/const';

// Styles
import classes from './ContentWorks.styles';

const ContentWorks = () => {
  const isMd = useMediaQuery('minWidth', 'md');

  const works = [{
    key: 'tuhn',
    src: isMd ?
      'assets/images/tunh@2x.gif' :
      'assets/images/tunh.gif',
    title: WORKS.TUHN.title,
    description: WORKS.TUHN.description,
    href: WORKS.TUHN.href
  }, {
    key: 'doombox',
    src: isMd ?
      'assets/images/doombox@2x.png' :
      'assets/images/doombox.png',
    title: WORKS.DOOMBOX.title,
    description: WORKS.DOOMBOX.description,
    href: WORKS.DOOMBOX.href
  }, {
    key: 'thesis',
    src: isMd ?
      'assets/images/thesis@2x.png' :
      'assets/images/thesis.png',
    title: WORKS.THESIS.title,
    description: WORKS.THESIS.description,
    href: WORKS.THESIS.href
  }];

  return (
    <Fragment>
      <Typography variant={isMd ? 'h2' : 'h4'} className={classes.title}>
        {TEXT.HOME.WORKS.TITLE}
      </Typography>
      <div className={classes.body}>
        {works.map(work => (
          <ContentWork
            key={work.key}
            title={work.title}
            description={work.description}
            href={work.href}
            src={work.src}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ContentWorks;
