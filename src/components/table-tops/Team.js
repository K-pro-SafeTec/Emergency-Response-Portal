import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import { tableTopInstanceList } from '../../dummy-data/tableTopInstance';
import { teamById } from '../../dummy-data/team';
import { tableTopScenarioById } from '../../dummy-data/tableTopScenario';
import TableTopTable from "./TableTopTable";


const Team = ({ match }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    const instances = tableTopInstanceList.filter(instance => tableTopScenarioById[instance.scenario].team === team.id);
    return (
      <AppPage title="Table top" back="..">
        <TableTopTable
          instances={instances}
        />
      </AppPage>
    );
  }
  return (
    <AppPage title="Table top" back="..">
      <Typography>Fant ikke noe lag med denne IDen</Typography>
    </AppPage>
  )
};

export default Team;
