import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import IconCompetanceStatus from '../../icons/emergency-response-organization/competance-status.svg';
import IconResponseTeams from '../../icons/emergency-response-organization/response-teams.svg';
import IconStats from '../../icons/emergency-response-organization/stats-1.svg';
import IconDeputies from '../../icons/emergency-response-organization/deputies.svg';
import IconCogs from '../../icons/emergency-response-organization/cogs.svg';
import AppPage from '../shared/AppPage';
import BackupResources from './backup-resources/BackupResources';
import CompatibilityMatrix from './compatibility-matrix/CompatibilityMatrix';
import CompetenceStatus from './competence-status/CompetenceStatus';
import Deputies from './deputies/Deputies';
import EmergencyResponseTeams from './emergency-response-teams/EmergencyResponseTeams';
import { Switch, Route } from 'react-router-dom';

export default ({ match }) => (
  <Switch>
    <Route exact path={match.path}>
      <AppPage title="Beredskapsorganisasjon" back="..">
        <NavMenu>
          <NavMenuItem name="Beredskapslag" icon={IconResponseTeams} to="emergency-response-teams/" />
          <NavMenuItem name="Kompetansestatus" icon={IconCompetanceStatus} to="competence-status/" />
          <NavMenuItem name="Forenlighetsmatrise" icon={IconStats} to="compatibility-matrix/" />
          <NavMenuItem name="Stedfortredere" icon={IconDeputies} to="deputies/" />
          <NavMenuItem name="Reserveressurser" icon={IconCogs} to="backup-resources/" />
        </NavMenu>
      </AppPage>
    </Route>
    <Route path={`${match.path}backup-resources/`} component={BackupResources} />
    <Route path={`${match.path}compatibility-matrix/`} component={CompatibilityMatrix} />
    <Route path={`${match.path}competence-status/`} component={CompetenceStatus} />
    <Route path={`${match.path}deputies/`} component={Deputies} />
    <Route path={`${match.path}emergency-response-teams/`} component={EmergencyResponseTeams} />
  </Switch>
);
