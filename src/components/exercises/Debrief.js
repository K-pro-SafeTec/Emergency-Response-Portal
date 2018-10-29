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
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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
          {scenario.performanceRequirements.length > 0 && (
            <React.Fragment>
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
            </React.Fragment>
          )}
          <TextField margin="normal" label="Identifiserte utfordringer" multiline fullWidth />
          {scenario.questions.length > 0 && (
            <React.Fragment>
              <Typography variant="title">Spørsmål:</Typography>
              {scenario.questions.map((question, key) => (
                <TextField key={key} label={question} margin="normal" multiline fullWidth />
              ))}
            </React.Fragment>
          )}
          <TextField margin="normal" label="Læringspunkter" multiline fullWidth />
          <Button variant="contained" color="primary" style={{marginTop: '12px'}} component={Link} to="..">Fullfør</Button>
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
