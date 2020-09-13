import React, { Fragment } from 'react';

// Core
import { Hidden } from '@material-ui/core';

// Private
import NavigationDesktop from './NavigationDesktop/NavigationDesktop';
import NavigationMobile from './NavigationMobile/NavigationMobile';

const Navigation = () => (
  <Fragment>
    <Hidden mdUp>
      <NavigationMobile />
    </Hidden>
    <Hidden smDown>
      <NavigationDesktop />
    </Hidden>
  </Fragment>
);

export default Navigation;
