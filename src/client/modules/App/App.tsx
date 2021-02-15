import React, { Fragment } from 'react';
import { Route } from 'wouter';

// Core
import { Block, Markdown } from '../../components';

import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { HomeLanding } from '../HomeLanding';
import { HomeAbout } from '../HomeAbout';
import { HomeWorks } from '../HomeWorks';
import { HomeLinks } from '../HomeLinks';

// Utils
import { ROUTES } from '../../utils/const';

// Styles
import classes from './App.styles';

const App = () => (
  <Fragment>
    <Navigation />
    <div className={classes.root}>
      <Route path={ROUTES.HOME}>
        <HomeLanding />
        <HomeAbout />
        <HomeWorks />
        <HomeLinks />
      </Route>
      <Route path={ROUTES.ABOUT}>
        <Block
          background="fadeInverse"
          width="md"
          className={classes.about}
        >
          <Markdown id="about" />
        </Block>
      </Route>
      <Route path={ROUTES.LINKS}>
        <HomeLinks />
      </Route>
    </div>
    <Footer />
  </Fragment>
);

export default App;
