import React from 'react';
import AppPage from "../../shared/AppPage";
import { teamList } from "../../../dummy-data/team";
import Team from "./Team"
import IllustrationEmergencyResonseteams from '../../../illustrations/emergencyResponsTeam.svg';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const EmergencyResponseTeams = ({ classes }) => (
  <AppPage title="Beredskapslag" back="..">
    <img
        src={IllustrationEmergencyResonseteams}
        alt="Emergency response team hierarchy"
    />
    <div className={classes.container}>
      {teamList.map(team => (
        <Team key={team.id} team={team} />
      ))}
    </div>
  </AppPage>
);

export default withStyles(styles)(EmergencyResponseTeams);
