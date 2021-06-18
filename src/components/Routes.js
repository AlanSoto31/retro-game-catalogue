import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';
import GameDet from './GameDet';

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={AnimeList} exact />
      <Route path="/details" component={AnimeDetails} />
      <Route path="/:guid" component={GameDet} />
      <Route component={Error} />
    </Switch>
  </>
);

export default Routes;
