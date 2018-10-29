import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exercises from './Exercises';
import Exercise from './Exercise';
import Debrief from "./Debrief";
import UnknownPage from '../shared/UnknownPage';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={Exercises} />
    <Route exact path={`${match.url}/:scenarioId/:date/`} component={Exercise} />
    <Route path={`${match.url}/:scenarioId/:date/debrief/`} component={Debrief} />
    <Route component={UnknownPage} />
  </Switch>
);

export default Routes;
