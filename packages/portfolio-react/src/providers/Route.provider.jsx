import React from 'react';
import { Switch, Route } from 'wouter';

// Pages
import { MarkdownPage, PageNotFound } from '../pages';

// Utils
import { PATHS } from '../utils/const';

const RouteProvider = () => (
  <Switch>
    <Route path={PATHS.DOOMBOX}>
      <MarkdownPage id="doombox" />
    </Route>
    <Route path={PATHS.THESIS}>
      <MarkdownPage id="thesis" />
    </Route>
    <Route path={PATHS.KIZUNA_AI}>
      <MarkdownPage id="kai" />
    </Route>
    <Route path={PATHS.ABOUT}>
      <MarkdownPage id="about" />
    </Route>
    <Route component={PageNotFound} />
  </Switch>
);

export default RouteProvider;
