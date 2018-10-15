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
import IconTableTop from '../../icons/main-menu/tableTops.svg';
import { tableTopScenarioById } from '../../dummy-data/tableTopScenario';
import { getTableTopInstanceByKey } from '../../dummy-data/tableTopInstance';
import { teamById } from '../../dummy-data/team';


const Instance = ({ match }) => {
  const instance = getTableTopInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = tableTopScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Table top" back="../../../teams/">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconTableTop} alt="Table Top" {...props} />}>
            <Typography variant="headline">DFU {scenario.dfuNr}</Typography>
            <Typography variant="subheading">{scenario.dfuTitle}</Typography>
          </EntityInfo>
          <Typography variant="subheading" gutterBottom>Scenario:</Typography>
          <Typography variant="body1" paragraph>{scenario.scenario}</Typography>
          <Typography variant="subheading" gutterBottom>Scenariobeskrivelse:</Typography>
          <Typography variant="body1" paragraph>{scenario.description}</Typography>
          <Typography variant="subheading" gutterBottom>Utvikling:</Typography>
          <Typography variant="body1" paragraph>{instance.development}</Typography>
        </Paper>
        <List>
          <ListItem>
            <Typography variant="title">Deltakerlag</Typography>
          </ListItem>
          {scenario.teams.map(teamId => {
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
    <AppPage title="Table top" back="..">
      <Typography>Fant ikke table top</Typography>
    </AppPage>
  )
};

export default Instance;
