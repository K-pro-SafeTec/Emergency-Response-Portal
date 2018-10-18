import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconExercise from '../../icons/main-menu/exerciseScenarios.svg';
import { exerciseScenarioById } from '../../dummy-data/exerciseScenario';
import { getExerciseInstanceByKey } from '../../dummy-data/exerciseInstance';


const Exercise = ({ match }) => {
  const instance = getExerciseInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = exerciseScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Øvelser" back="../..">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconExercise} alt="Øvelse" {...props} />}>
            <Typography variant="headline">{scenario.scenario}</Typography>
            <Typography variant="subheading">DFU {scenario.dfu}</Typography>
          </EntityInfo>
          <Typography variant="subheading">Scenariobeskrivelse:</Typography>
          <Typography variant="body1" paragraph>{scenario.description}</Typography>
          <Typography variant="subheading">Forberedelser:</Typography>
          <Typography variant="body1" paragraph>{scenario.preparations}</Typography>
          <Typography variant="subheading">Ytelseskrav:</Typography>
          <Typography variant="body1" paragraph>{scenario.performanceRequirements}</Typography>
          <Typography variant="subheading">Parametere:</Typography>
          <ul>
            <li>
              <Typography variant="body1">Vind: {scenario.parameters.wind}</Typography>
            </li>
            <li>
              <Typography variant="body1">Bølger: {scenario.parameters.waves}</Typography>
            </li>
            <li>
              <Typography variant="body1">POB: {scenario.parameters.pob}</Typography>
            </li>
            <li>
              <Typography variant="body1">Pågående aktiviteter: {scenario.parameters.ongoingActivities}</Typography>
            </li>
          </ul>
          <Typography variant="subheading">Fokusområder:</Typography>
          <Typography variant="body1" paragraph>{scenario.focusAreas}</Typography>
          <Typography variant="subheading">Utvikling:</Typography>
          <Typography variant="body1" paragraph>{scenario.development}</Typography>
        </Paper>
      </AppPage>
    );
  }
  return (
    <AppPage title="Øvelser" back="../..">
      <Typography>Fant ikke øvelse</Typography>
    </AppPage>
  );
};

export default Exercise;
