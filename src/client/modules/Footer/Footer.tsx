import React from 'react';

// Core
import { Typography, Link } from '../../components';

// Styles
import classes from './Footer.styles';

const Footer = () => (
  <div className={classes.root}>
    <Typography variant="caption">
      Created by Chronocide
    </Typography>
    <Link variant="caption" href="https://github.com/chronoDave/Portfolio">
      Source (GitHub)
    </Link>
  </div>
);

export default Footer;
