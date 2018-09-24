import React from 'react';
import IconCalendar from '../../icons/calendar.svg';
import IconLivefeed from '../../icons/livefeed.svg';
import IconExperiencelog from '../../icons/experiencelog.svg';
import IconExercise from '../../icons/exercise.svg';
import IconExerciseScenarios from '../../icons/exerciseScenarios.svg';
import IconEmergencyResponseDocuments from '../../icons/emergencyResponseDocs.svg';
import IconEmergencyResponseOrganization from '../../icons/emergencyResponseOrg.svg';
import IconCompetanceOverview  from '../../icons/competanceOverview.svg';
import IconEmergencyResponseDrawings from '../../icons/emergencyResponseDrawings.svg';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';



export default () => (
  <AppPage title="Safetec Beredskapsportal">
    <NavMenu>
      <NavMenuItem name="Kalender" icon={IconCalendar} to="calendar/" />
      <NavMenuItem name="Live feed" icon={IconLivefeed} to="livefeed/" />
      <NavMenuItem name="Beredskapsorganisasjon" icon={IconEmergencyResponseOrganization} to="emergency-response-organization/" />
      <NavMenuItem name="Erfaringslogg" icon={IconExperiencelog} to="experience-log/" />
      <NavMenuItem name="Øvelser" icon={IconExercise} to="excercises/" />
      <NavMenuItem name="Øvelsesscenarier" icon={IconExerciseScenarios} to="exercise-scenarios/" />
      <NavMenuItem name="Beredskapsdokumenter" icon={IconEmergencyResponseDocuments} to="emergency-response-documents/" />
      <NavMenuItem name="Beredskapsorganisasjon" icon={IconEmergencyResponseOrganization} to="emergency-response-organization/" />
      <NavMenuItem name="Kompetanseoversikt" icon={IconCompetanceOverview} to="competance-overview/" />
      <NavMenuItem name="Beredskapsrelaterte tegninger" icon={IconEmergencyResponseDrawings} to="emergency-response-drawings/" />
    </NavMenu>
  </AppPage>
);
