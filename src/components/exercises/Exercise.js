import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconExercise from '../../icons/main-menu/exerciseScenarios.svg';
import { exerciseScenarioById } from '../../dummy-data/exerciseScenario';
import { getExerciseInstanceByKey } from '../../dummy-data/exerciseInstance';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";


const Exercise = ({ match }) => {
  const instance = getExerciseInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = exerciseScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Øvelser" back="../..">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconExercise} alt="Øvelse" {...props} />}>
            <Typography variant="headline">{scenario.title}</Typography>
            <Typography variant="subheading">DFU {scenario.dfu}</Typography>
          </EntityInfo>
          <Typography variant="subheading">Scenario:</Typography>
          <Typography variant="body1" paragraph>{scenario.scenario}</Typography>
          <Typography variant="subheading">Scenariobeskrivelse:</Typography>
          <Typography variant="body1" paragraph>{scenario.description}</Typography>
          <Typography variant="subheading">Forberedelser:</Typography>
          {scenario.preparations.map(preparation => (
            <Typography variant="body1">{preparation}</Typography>
          ))}
          <Typography variant="subheading" style={{marginTop: '12px'}}>Ytelseskrav:</Typography>
          <Typography variant="body1" paragraph>{scenario.performanceRequirements}</Typography>
          <Typography variant="subheading">Fokusområder:</Typography>
          {scenario.focusAreas.map(focusArea => (
            <Typography variant="body1">{focusArea}</Typography>
          ))}
          <Typography variant="subheading" style={{marginTop: '12px'}}>Utvikling:</Typography>
          <Typography variant="body1" paragraph>{scenario.development}</Typography>
          <Button variant="contained" color="primary" component={Link} to={`${match.url}debrief/`}>Vis rapport</Button>
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
