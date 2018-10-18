import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconExercise from '../../icons/main-menu/exerciseScenarios.svg';
import { exerciseScenarioById } from '../../dummy-data/exerciseScenario';
import { getExerciseInstanceByKey } from '../../dummy-data/exerciseInstance';
import '../../styles/Exercise.css'


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
          <p><span className="bold">Scenariobeskrivelse:</span> {scenario.description}</p>
          <p><span className="bold">Forberedelser:</span> {scenario.preparations}</p>
          <p><span className="bold">Ytelseskrav:</span> {scenario.performanceRequirements}</p>
          <p><span className="bold">Parametere:</span></p>
          <ul>
            <li>
              <p>Vind: {scenario.parameters.wind}</p>
            </li>
            <li>
              <p>Bølger: {scenario.parameters.waves}</p>
            </li>
            <li>
              <p>POB: {scenario.parameters.pob}</p>
            </li>
            <li>
              <p>Pågående aktiviteter: {scenario.parameters.ongoingActivities}</p>
            </li>
          </ul>
          <p><span className="bold">Fokusområder:</span> {scenario.focusAreas}</p>
          <p><span className="bold">Utvikling:</span> {scenario.development}</p>
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
