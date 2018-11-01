import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppPage from '../../shared/AppPage';
import NavMenu from '../../shared/NavMenu';
import NavMenuItem from '../../shared/NavMenuItem';
import IconTraining from '../../../icons/main-menu/training.svg';
import IconExerciseScenarios from '../../../icons/main-menu/exerciseScenarios.svg';
import IconTableTops from '../../../icons/main-menu/tableTops.svg';
import UnknownPage from '../../shared/UnknownPage';
import ReportList from './Reports';


const ExerciseReports = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}/`}>
      <AppPage title="Øvingsrapporter" back="..">
        <NavMenu>
          <NavMenuItem name="Øvingsrapporter - Trening" icon={IconTraining} to="training/" />
          <NavMenuItem name="Øvingsrapporter - Øvelser" icon={IconExerciseScenarios} to="exercises/" />
          <NavMenuItem name="Øvingsrapporter - Table Tops" icon={IconTableTops} to="table-tops/" />
        </NavMenu>
      </AppPage>
    </Route>
    <Route path={`${match.url}/training/`} render={props => <ReportList {...props} reports={[]} />} />
    <Route path={`${match.url}/exercises/`} render={props => <ReportList {...props} reports={[]} />} />
    <Route path={`${match.url}/table-tops/`} render={props => <ReportList {...props} reports={[]} />} />
    <Route component={UnknownPage} />
  </Switch>
)

export default ExerciseReports;
