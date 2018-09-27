import React from 'react';
import IconCalendar from '../../icons/main-menu/calendar.svg';
import IconLivefeed from '../../icons/main-menu/livefeed.svg';
import IconExperiencelog from '../../icons/main-menu/experiencelog.svg';
import IconExercise from '../../icons/main-menu/exercise.svg';
import IconExerciseScenarios from '../../icons/main-menu/exerciseScenarios.svg';
import IconDocuments from '../../icons/main-menu/documents.svg';
import IconEmergencyResponseOrganization from '../../icons/main-menu/emergencyResponseOrg.svg';
import IconCompetenceOverview  from '../../icons/main-menu/competenceOverview.svg';
import IconDrawings from '../../icons/main-menu/drawings.svg';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';



export default () => (
  <AppPage title="Safetec Beredskapsportal">
    <NavMenu>
      <NavMenuItem name="Kalender" icon={IconCalendar} to="calendar/" />
      <NavMenuItem name="Live feed" icon={IconLivefeed} to="livefeed/" />
      <NavMenuItem name="Erfaringslogg" icon={IconExperiencelog} to="experience-log/" />
      <NavMenuItem name="Øvelser" icon={IconExercise} to="exercises/" />
      <NavMenuItem name="Øvelsesscenarier" icon={IconExerciseScenarios} to="exercise-scenarios/" />
      <NavMenuItem name="Beredskapsdokumenter" icon={IconDocuments} to="documents/" />
      <NavMenuItem name="Beredskapsorganisasjon" icon={IconEmergencyResponseOrganization} to="emergency-response-organization/" />
      <NavMenuItem name="Kompetanseoversikt" icon={IconCompetenceOverview} to="competence-overview/" />
      <NavMenuItem name="Beredskapsrelaterte tegninger" icon={IconDrawings} to="drawings/" />
    </NavMenu>
  </AppPage>
);
