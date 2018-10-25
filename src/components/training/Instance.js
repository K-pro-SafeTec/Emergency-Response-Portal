import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconTraining from '../../icons/main-menu/training.svg';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';
import { getTrainingInstanceByKey } from '../../dummy-data/trainingInstance';


const Instance = ({ match }) => {
  const instance = getTrainingInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = trainingScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Trening" back="../../../teams/">
        <Paper style={{margin: '1em', padding: '1em', whiteSpace: 'pre-line'}}>
          <EntityInfo Icon={(props) => <img src={IconTraining} alt="Trening" {...props} />}>
            <Typography variant="headline">{scenario.theme}</Typography>
            <Typography variant="subheading">{instance.date}</Typography>
          </EntityInfo>
          <Typography variant="subheading" gutterBottom>Mål:</Typography>
          <Typography variant="body1" paragraph>{scenario.goals}</Typography>
          <Typography variant="subheading" gutterBottom>Oppsett:</Typography>
          <Typography variant="body1" paragraph>{scenario.setup}</Typography>
          <Button variant="contained" color="primary" component={Link} to={`${match.url}debrief/`}>Vis rapport</Button>
        </Paper>
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
