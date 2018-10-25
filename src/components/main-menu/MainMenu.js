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
import EmergencyPortalLogo from '../../icons/emergencyPortal.svg'
import { withStyles } from '@material-ui/core/styles';

import '../../raw-data/preprocess_data';

// Seed random values globally to generate deteministic numbers
import seedrandom from 'seedrandom';
 //  Seed 4 gives OK distribution of courses having different statuses, but most being ok for max_offset 20, min_offset -2, num_days_warning -2
seedrandom(4, { global: true });



const styles = {
  logo: {
    margin: '15px 0 -15px 25px'
  },
};

const MainMenu = ({ classes }) => (
  <AppPage name="Safetec Beredskapsportal">
    <img className={classes.logo}
      src={EmergencyPortalLogo}
      alt="Levert av Safetec"
      height="40px"
    />
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

export default withStyles(styles)(MainMenu);
