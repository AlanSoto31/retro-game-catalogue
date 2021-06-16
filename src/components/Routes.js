import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={AnimeList} exact />
                <Route path="/details" component={AnimeDetails} />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default Routes

