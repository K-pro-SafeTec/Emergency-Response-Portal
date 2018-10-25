import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconExercise from '../../icons/main-menu/exerciseScenarios.svg';
import { exerciseScenarioById } from '../../dummy-data/exerciseScenario';
import { getExerciseInstanceByKey } from '../../dummy-data/exerciseInstance';
import { performanceRequirementById } from '../../dummy-data/performanceRequirement';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


export default ({ match }) => {
  const instance = getExerciseInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = exerciseScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Debrief">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconExercise} alt="Øvelse" {...props} />}>
            <Typography variant="headline">{scenario.title}</Typography>
            <Typography variant="subheading">DFU {scenario.dfu}</Typography>
          </EntityInfo>
          <Typography variant="title">Ytelseskrav:</Typography>
          {scenario.performanceRequirements.map(performanceRequirement => (
            <Typography key={performanceRequirement} variant="subheading">
              {performanceRequirement}
              {': '}
              {performanceRequirementById[performanceRequirement].description}
              {' '}
              <FormControl>
                <Input
                  required
                  type="number"
                  endAdornment={<InputAdornment position="end">min</InputAdornment>}
                />
              </FormControl>
            </Typography>
          ))}
          <TextField margin="normal" label="Identifiserte utfordringer" multiline fullWidth />
          <Typography variant="title">Spørsmål:</Typography>
          {scenario.questions.map((question, key) => (
            <TextField key={key} label={question} margin="normal" multiline fullWidth />
          ))}
          <TextField margin="normal" label="Læringspunkter" multiline fullWidth />
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
