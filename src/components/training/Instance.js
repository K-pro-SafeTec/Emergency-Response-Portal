import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import People from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconTraining from '../../icons/main-menu/training.svg';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';
import { getTrainingInstanceByKey } from '../../dummy-data/trainingInstance';
import { teamById } from '../../dummy-data/team';


const Instance = ({ match }) => {
  const instance = getTrainingInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = trainingScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Trening" back="../../../teams/">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconTraining} alt="Trening" {...props} />}>
            <Typography variant="headline">{scenario.theme}</Typography>
            <Typography variant="subheading">{instance.date}</Typography>
          </EntityInfo>
          <Typography variant="subheading" gutterBottom>Mål:</Typography>
          <Typography variant="body1" paragraph>{scenario.goals}</Typography>
          <Typography variant="subheading" gutterBottom>Oppsett:</Typography>
          <Typography variant="body1" paragraph>{scenario.setup}</Typography>
        </Paper>
        <List>
          <ListItem>
            <Typography variant="title">Deltakerlag</Typography>
          </ListItem>
          {scenario.participatingTeams.map(teamId => {
            const team = teamById[teamId];
            return (
              <ListItem
                key={team.id}
                button
                component={Link}
                to={`../../../teams/${team.id}/`}
              >
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText>
                  {team.name}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </AppPage>
    );
  }
  return (
    <AppPage title="Trening" back="..">
      <Typography>Fant ikke trening</Typography>
    </AppPage>
  )
};

export default Instance;
