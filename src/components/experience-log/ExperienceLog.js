import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';
import { Switch, Route } from 'react-router-dom';

// Components
import ExerciseReport from './excercise-report/ExerciseReport';
import PerformanceRequirement from './performance-requirement/PerformanceRequirements';
import ReportGenerator from './report-generator/ReportGenerator';
import EmergencyResponseAction from './emergency-response-action/EmergencyResponseAction';
import LessonsLearnedContainer from "./lessons-learned/LessonsLearnedContainer"
import IndustryInformation from './industry-information/IndustryInformation';

// Icons
import IconExerciseReports from '../../icons/experience-log/exercise-reports.svg';
import IconPerformanceConditions from '../../icons/experience-log/performance-conditions.svg';
import IconLessonsLearned from '../../icons/experience-log/lessons-learned.svg';
import IconReportGenerator from '../../icons/experience-log/report-generator.svg';
import IconEmergencyResponseActions from '../../icons/experience-log/emergency-response-action.svg';
import IconIndustryInformation from '../../icons/experience-log/industry-information.svg';



export default ({ match }) => (
  <Switch>
    <Route exact path={match.path}>
      <AppPage title="Erfaringslogg" back="..">
        <NavMenu>
          <NavMenuItem name="Øvingsrapporter" icon={IconExerciseReports} to="exercise-report/" />
          <NavMenuItem name="Ytelseskrav" icon={IconPerformanceConditions} to="performance-requirements/" />
          <NavMenuItem name="Lessons learned" icon={IconLessonsLearned} to="lessons-learned/" />
          <NavMenuItem name="Rapportgenerator" icon={IconReportGenerator} to="report-generator/" />
          <NavMenuItem name="Beredskapsrelaterte aksjoner" icon={IconEmergencyResponseActions} to="emergency-response-action/" />
          <NavMenuItem name="Bransjeinformasjon" icon={IconIndustryInformation} to="industry-information/" />
        </NavMenu>
      </AppPage>
    </Route>
    <Route path={`${match.path}exercise-report/`} component={ExerciseReport} />
    <Route path={`${match.path}performance-requirements/`} component={PerformanceRequirement} />
    <Route path={`${match.path}lessons-learned/`} component={LessonsLearnedContainer} />
    <Route path={`${match.path}report-generator/`} component={ReportGenerator} />
    <Route path={`${match.path}emergency-response-action/`} component={EmergencyResponseAction} />
    <Route path={`${match.path}industry-information/`} component={IndustryInformation} />
  </Switch>
);
