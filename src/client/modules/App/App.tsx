import React, { Fragment } from 'react';
import { Switch, Route } from 'wouter';

// Core
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

// Pages
import {
  HomePage,
  LinksPage,
  NotFoundPage,
  MarkdownPage,
  WorksPage
} from '../../pages';

// Utils
import { ROUTES } from '../../utils/const';

// Styles
import classes from './App.styles';

const App = () => (
  <Fragment>
    <Navigation />
    <div className={classes.root}>
      <Switch>
        <Route path={ROUTES.HOME}>
          <HomePage />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <MarkdownPage id="about" />
        </Route>
        <Route path={ROUTES.WORKS}>
          <WorksPage />
        </Route>
        <Route path={ROUTES.WORK()}>
          {({ id }) => <MarkdownPage id={id} />}
        </Route>
        <Route path={ROUTES.LINKS}>
          <LinksPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Fragment>
);

export default App;
