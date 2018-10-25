import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReportGenerator from './ReportGenerator';
import Report from './Report';
import UnknownPage from './components/shared/UnknownPage';

const Routes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={ReportGenerator} />
    <Route path={`${match.url}/report/:performanceRequirementId/`} component={Report} />
    <Route component={UnknownPage} />
  </Switch>
);

export default Routes;