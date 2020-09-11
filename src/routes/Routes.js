import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import LandingPage from 'pages/landing/LandingPage';
import NotFoundPage from 'pages/notfound/NotFoundPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}