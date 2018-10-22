import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReportGenerator from './ReportGenerator';
import Report from './Report';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={ReportGenerator} />
    <Route path={`${match.url}/report/:performanceRequirementId/`} component={Report} />
  </Switch>
);

export default Routes;