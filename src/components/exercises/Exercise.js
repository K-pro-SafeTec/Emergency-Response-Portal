import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppPage from '../shared/AppPage';
import { exerciseById } from '../../dummy-data/exercises';
import '../../styles/Exercise.css'


const Exercise = (props) => {
  const exercise = exerciseById[parseInt(props.match.params.id, 10)];
  return(
    <AppPage title="Øvelser">
      <Paper style={{margin: '1em', padding: '1em'}}>
        <h2>DFU {exercise.dfu} {exercise.scenario}</h2>
        <p><span className="bold">Scenariobeskrivelse:</span> {exercise.description}</p>
        <p><span className="bold">Forberedelser:</span> {exercise.preparations}</p>
        <p><span className="bold">Ytelseskrav:</span> {exercise.performanceRequirements}</p>
        <p><span className="bold">Parametere:</span></p>
        <ul>
          <li>
            <p>Vind: {exercise.parameters.wind}</p>
          </li>
          <li>
            <p>Bølger: {exercise.parameters.waves}</p>
          </li>
          <li>
            <p>POB: {exercise.parameters.pob}</p>
          </li>
          <li>
            <p>Pågående aktiviteter: {exercise.parameters.ongoingActivities}</p>
          </li>
        </ul>
        <p><span className="bold">Fokusområder:</span> {exercise.focusAreas}</p>
        <p><span className="bold">Utvikling:</span> {exercise.development}</p>
      </Paper>
    </AppPage>
  )
};

export default Exercise;
