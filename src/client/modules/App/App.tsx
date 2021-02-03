import React, { Fragment } from 'react';
import { Route } from 'wouter';

// Modules
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { HomeLanding } from '../HomeLanding';
import { HomeAbout } from '../HomeAbout';
import { HomeWorks } from '../HomeWorks';
import { HomeLinks } from '../HomeLinks';

const App = () => (
  <Fragment>
    <Navigation />
    <Route path="/">
      <HomeLanding />
      <HomeAbout />
      <HomeWorks />
      <HomeLinks />
      <Footer />
    </Route>
  </Fragment>
);

export default App;
