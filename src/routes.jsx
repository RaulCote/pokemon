import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PokemonsIndex from './pages/PokemonsIndex';
import PokemonProfile from './pages/PokemonProfile';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/pokemon" />
      <Route path="/pokemon" component={PokemonsIndex} />
      <Route path="/pokemon/:id" component={PokemonProfile} />
    </Switch>
  </Router>
);

export default Routes;
