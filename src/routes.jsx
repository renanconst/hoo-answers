import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Landing} exact />
  </Switch>
);
