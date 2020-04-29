import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import NewPlace from './places/pages/NewPlace/NewPlace';
import UserPlaces from './places/pages/UserPlaces/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace/UpdatePlace';

const app = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route
            path='/'
            exact>
            <Users />
          </Route>
          <Route
            path='/:userId/places'
            exact>
            <UserPlaces />
          </Route>
          <Route
            path='/places/new'
            exact>
            <NewPlace />
          </Route>
          <Route
            path='/places/:placeId'
            exact>
            <UpdatePlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default app;
