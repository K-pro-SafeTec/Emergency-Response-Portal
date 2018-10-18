import React from 'react';
import AppPage from "../../shared/AppPage";
import { teamList } from "../../../dummy-data/team";
import Team from "./Team"

const styles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

const EmergencyResponseTeams = () => (
  <AppPage title="Beredskapslag" back="..">
    <div style={styles}>
        {teamList.map(team => (
          <Team key={team.id} team={team} />
        ))}
    </div>
  </AppPage>
);

export default EmergencyResponseTeams;
