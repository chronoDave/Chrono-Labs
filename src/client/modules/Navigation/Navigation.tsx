import React from 'react';

// Core
import { Link } from '../../components';

// Utils
import { ROUTES } from '../../utils/const';

// Styles
import classes from './Navigation.styles';

const Navigation = () => (
  <div className={classes.root}>
    <Link href={ROUTES.HOME}>
      HOME
    </Link>
    <Link href={ROUTES.ABOUT}>
      ABOUT
    </Link>
    <Link href={ROUTES.WORKS}>
      WORKS
    </Link>
    <Link href={ROUTES.CONTACT}>
      CONTACT
    </Link>
  </div>
);

export default Navigation;
