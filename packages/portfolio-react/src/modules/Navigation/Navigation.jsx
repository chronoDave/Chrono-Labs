import React, { Fragment } from 'react';

// Core
import { Hidden } from '@material-ui/core';

// Modules
import { NavigationDesktop } from '../NavigationDesktop';
import { NavigationMobile } from '../NavigationMobile';

const Navigation = () => (
  <Fragment>
    <Hidden smDown>
      <NavigationDesktop />
    </Hidden>
    <Hidden mdUp>
      <NavigationMobile />
    </Hidden>
  </Fragment>
);

export default Navigation;
