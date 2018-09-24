import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import IconShield from '../../icons/shield.svg';
import IconHierarchy from '../../icons/hierarchy.svg';
import IconStats from '../../icons/stats-1.svg';
import IconProfileGroup from '../../icons/profile-group.svg';
import IconCogs from '../../icons/cogs.svg';
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
      <AppPage title="Beredskapsorganisasjon">
        <NavMenu>
          <NavMenuItem name="Beredskapslag" icon={IconHierarchy} to="emergency-response-teams/" />
          <NavMenuItem name="Kompetansestatus" icon={IconShield} to="competence-status/" />
          <NavMenuItem name="Forenlighetsmatrise" icon={IconStats} to="compatibility-matrix/" />
          <NavMenuItem name="Stedfortredere" icon={IconProfileGroup} to="deputies/" />
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
