import React, { Fragment } from 'react';
import { Route } from 'wouter';

// Core
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { HomeLanding } from '../HomeLanding';
import { HomeAbout } from '../HomeAbout';
import { HomeWorks } from '../HomeWorks';
import { HomeLinks } from '../HomeLinks';
import { PageMarkdown } from '../PageMarkdown';

// Utils
import { ROUTES } from '../../utils/const';

const App = () => (
  <Fragment>
    <Navigation />
    <Route path={ROUTES.HOME}>
      <HomeLanding />
      <HomeAbout />
      <HomeWorks />
      <HomeLinks />
    </Route>
    <Route path={ROUTES.ABOUT}>
      <PageMarkdown id="about" />
    </Route>
    <Footer />
  </Fragment>
);

export default App;
