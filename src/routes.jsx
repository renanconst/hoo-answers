import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Form } from './pages/Form';
import { Landing } from './pages/Landing';
import { Questions } from './pages/Questions';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Landing} exact />
    <Route path="/questions" component={Questions} exact />
    <Route path="/questions/ask" component={Form} />
    <Route path="/questions/reply" component={Form} />
  </Switch>
);
