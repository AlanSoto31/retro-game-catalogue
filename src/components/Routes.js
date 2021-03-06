import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import GameList from '../containers/GameList';
import GameDet from '../containers/GameDet';

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={GameList} exact />
      <Route path="/:guid" exact component={GameDet} />
      <Route component={Error} />
    </Switch>
  </>
);

export default Routes;
