import React from 'react';

// Core
import { Typography, Link } from '../../components';

// Utils
import { EXTERNAL, WORKS } from '../../utils/const';

// Styles
import classes from './Footer.styles';

const Footer = () => (
  <div className={classes.root}>
    <Typography variant="caption">
      Created by&nbsp;
      <Link
        variant="caption"
        href={EXTERNAL.TWITTER.href}
      >
        {EXTERNAL.TWITTER.handle}
      </Link>
    </Typography>
    <Link variant="caption" href={WORKS.PORTFOLIO.href}>
      {WORKS.PORTFOLIO.description}
    </Link>
  </div>
);

export default Footer;
