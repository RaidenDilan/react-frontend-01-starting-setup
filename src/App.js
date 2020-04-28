import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const app = () => {
  // return <h1>Let's start!</h1>;
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact>
          <Users />
        </Route>
        <Route
          path='/places/new'
          exact>
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default app;
