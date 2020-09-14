import React, { Fragment } from 'react';

// Core
import { Hidden } from '@material-ui/core';

// Private
import NavigationDesktop from './NavigationDesktop/NavigationDesktop';
import NavigationMobile from './NavigationMobile/NavigationMobile';

const Navigation = () => (
  <Fragment>
    <Hidden lgUp>
      <NavigationMobile />
    </Hidden>
    <Hidden mdDown>
      <NavigationDesktop />
    </Hidden>
  </Fragment>
);

export default Navigation;
