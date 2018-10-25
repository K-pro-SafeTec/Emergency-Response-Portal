import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Teams from './Teams';
import Team from './Team';
import Instance from './Instance';
import Debrief from './Debrief';
import UnknownPage from '../shared/UnknownPage';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}/teams/`} component={Teams} />
    <Route path={`${match.url}/teams/:teamId/`} component={Team} />
    <Route exact path={`${match.url}/scenarios/:scenarioId/:date/`} component={Instance} />
    <Route path={`${match.url}/scenarios/:scenarioId/:date/debrief/`} component={Debrief} />
    <Route component={UnknownPage} />
  </Switch>
);

export default Routes;
