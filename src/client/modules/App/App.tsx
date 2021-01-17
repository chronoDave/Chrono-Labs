import React from 'react';
import { Route } from 'wouter';

// Modules
import { Navigation } from '../Navigation';

// Pages
import { HomePage } from '../../pages';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route path="/">
        <HomePage />
      </Route>
    </div>
  );
};

export default App;
