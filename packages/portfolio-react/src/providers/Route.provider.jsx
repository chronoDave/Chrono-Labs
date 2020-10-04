import React, { Fragment } from 'react';
import { Switch, Route } from 'wouter';

// Core
import { Box } from '@material-ui/core';

import { Background } from '../components';

// Modules
import { Navigation } from '../modules';

// Pages
import { MarkdownPage, PageNotFound, HomePage } from '../pages';

// Utils
import { PATHS } from '../utils/const';

const RouteProvider = () => (
  <Fragment>
    <Background />
    <Switch>
      <Route path={PATHS.HOME}>
        <HomePage />
      </Route>
      <Box display="flex" flexDirection="column">
        <Navigation />
        <Route path={PATHS.DOOMBOX}>
          <MarkdownPage id="doombox" />
        </Route>
        <Route path={PATHS.THESIS}>
          <MarkdownPage id="thesis" />
        </Route>
        <Route path={PATHS.TECH_LAB}>
          <MarkdownPage id="techlab" />
        </Route>
        <Route path={PATHS.ABOUT}>
          <MarkdownPage id="about" />
        </Route>
        <Route component={PageNotFound} />
      </Box>
    </Switch>
  </Fragment>
);

export default RouteProvider;
