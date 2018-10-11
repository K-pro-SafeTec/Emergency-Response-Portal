import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import TrainingTable from './TrainingTable';
import { trainingInstanceList } from '../../dummy-data/trainingInstance';
import { teamById } from '../../dummy-data/team';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';


const Team = ({ match }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    const instances = trainingInstanceList.filter(instance => trainingScenarioById[instance.scenario].teams.indexOf(team.id) !== -1);
    return (
      <AppPage title="Trening" back="..">
        <TrainingTable
          instances={instances}
        />
      </AppPage>
    );
  }
  return (
    <AppPage title="Trening" back="..">
      <Typography>Fant ikke noe lag med denne IDen</Typography>
    </AppPage>
  )
};

export default Team;
