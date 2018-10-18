import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from './Exercises';
import Exercise from './Exercise';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={Exercises} />
    <Route path={`${match.url}/:scenarioId/:date/`} component={Exercise} />
  </Switch>
);

export default Routes;
