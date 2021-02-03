import React from 'react';

// Core
import { LinkNavigation } from '../../components';

// Utils
import { ROUTES } from '../../utils/const';

// Styles
import classes from './Navigation.styles';

const Navigation = () => (
  <div className={classes.root}>
    <LinkNavigation href={ROUTES.HOME} className={classes.link}>
      HOME
    </LinkNavigation>
    <LinkNavigation href={ROUTES.ABOUT} className={classes.link}>
      ABOUT
    </LinkNavigation>
    <LinkNavigation href={ROUTES.WORKS} className={classes.link}>
      WORKS
    </LinkNavigation>
    <LinkNavigation href={ROUTES.CONTACT} className={classes.link}>
      CONTACT
    </LinkNavigation>
  </div>
);

export default Navigation;
