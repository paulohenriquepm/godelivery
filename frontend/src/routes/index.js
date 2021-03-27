import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Orders from '../pages/Orders';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/orders" component={Orders} />
  </Switch>
);

export default Routes;
