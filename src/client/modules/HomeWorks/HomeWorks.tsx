import React from 'react';

// Core
import { Typography, Link } from '../../components';

// Styles
import classes from './HomeWorks.styles';

type Work = {
  src: string,
  alt: string,
  key: string,
  description: string
};

export interface HomeWorksProps {
  works: Work[]
}

const HomeWorks = ({ works }: HomeWorksProps) => (
  <div className={classes.root}>
    <Typography
      variant="h2"
      align="center"
      className={classes.title}
    >
      WORKS
    </Typography>
    <div className={classes.body}>
      {works.map(work => (
        <div key={work.key} className={classes.work}>
          <Typography
            variant="h4"
            align="center"
            className={classes.workTitle}
          >
            {work.alt}
          </Typography>
          <img
            src={work.src}
            alt={work.alt}
            className={classes.image}
          />
          <Typography variant="h6" className={classes.description}>
            {work.description}
          </Typography>
          <div className={classes.linkContainer}>
            <Link href="/about" className={classes.link}>
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomeWorks;
