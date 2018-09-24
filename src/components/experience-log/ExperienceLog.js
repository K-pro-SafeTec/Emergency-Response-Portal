import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';
import { Switch, Route } from 'react-router-dom';

//Icons
import IconExerciseReports from '../../icons/experience-log/exercise-reports.svg';
import IconPerformanceConditions from '../../icons/experience-log/performance-conditions.svg';
import IconLessonsLearned from '../../icons/experience-log/lessons-learned.svg';
import IconReportGenerator from '../../icons/experience-log/report-generator.svg';
import IconEmergencyResponseActions from '../../icons/experience-log/emergency-response-action.svg';
import IconBranchInformation from '../../icons/experience-log/branch-information.svg';



export default () => (

      <AppPage title="Erfaringslogg">
        <NavMenu>
          <NavMenuItem name="Øvingsrapporter" icon={IconExerciseReports} to="competence-status/" />
          <NavMenuItem name="Ytelseskrav" icon={IconPerformanceConditions} to="competence-status/" />
          <NavMenuItem name="Lært leksa si" icon={IconLessonsLearned} to="competence-status/" />
          <NavMenuItem name="Rapportgenerator" icon={IconReportGenerator} to="competence-status/" />
          <NavMenuItem name="Beredskapsrelaterte aksjoner" icon={IconEmergencyResponseActions} to="competence-status/" />
          <NavMenuItem name="Bransjeinformasjon" icon={IconBranchInformation} to="competence-status/" />
        </NavMenu>
      </AppPage>

);
