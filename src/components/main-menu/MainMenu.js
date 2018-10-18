import React from 'react';
import IconCalendar from '../../icons/main-menu/calendar.svg';
import IconLivefeed from '../../icons/main-menu/livefeed.svg';
import IconExperiencelog from '../../icons/main-menu/experiencelog.svg';
import IconTraining from '../../icons/main-menu/training.svg';
import IconExerciseScenarios from '../../icons/main-menu/exerciseScenarios.svg';
import IconTableTops from '../../icons/main-menu/tableTops.svg'
import IconDocuments from '../../icons/main-menu/documents.svg';
import IconEmergencyResponseOrganization from '../../icons/main-menu/emergencyResponseOrg.svg';
import IconCompetenceOverview  from '../../icons/main-menu/competenceOverview.svg';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';

import '../../raw-data/test';


export default () => (
  <AppPage title="Safetec Beredskapsportal">
    <NavMenu>
      <NavMenuItem name="Kalender" icon={IconCalendar} to="calendar/" />
      <NavMenuItem name="Live feed" icon={IconLivefeed} to="livefeed/" />
      <NavMenuItem name="Erfaringslogg" icon={IconExperiencelog} to="experience-log/" />
      <NavMenuItem name="Trening" icon={IconTraining} to="training/teams/" />
      <NavMenuItem name="Øvelser" icon={IconExerciseScenarios} to="exercises/" />
      <NavMenuItem name="Table tops" icon={IconTableTops} to="table-tops/teams/" />
      <NavMenuItem name="Beredskapsdokumenter" icon={IconDocuments} to="documents/" />
      <NavMenuItem name="Beredskapsorganisasjon" icon={IconEmergencyResponseOrganization} to="emergency-response-organization/" />
      <NavMenuItem name="Kompetanseoversikt" icon={IconCompetenceOverview} to="competence-overview/" />
    </NavMenu>
  </AppPage>
);
