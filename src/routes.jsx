import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PokemonsIndex from './pages/PokemonsIndex';
import PokemonProfile from './pages/PokemonProfile';
import ErrorNotFound from './pages/ErrorNotFound';
import ErrorGeneral from './pages/ErrorGeneral';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/pokemon" />
      <Route exact path="/404" component={ErrorNotFound} />
      <Route exact path="/500" component={ErrorGeneral} />
      <Route exact path="/pokemon" component={PokemonsIndex} />
      <Route exact path="/pokemon/:name" component={PokemonProfile} />
      <Route component={ErrorNotFound} />
    </Switch>
  </Router>
);

export default Routes;
