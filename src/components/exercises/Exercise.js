import React from 'react';
import AppPage from '../shared/AppPage';
import { exercises } from '../../dummy-data/exercises';


const Exercise = (props) => {
  const exercise = exercises.find(exercise => exercise.id == props.match.params.id);
  return(
    <AppPage title="Øvelser">
      <h1>DFU {exercise.dfu} {exercise.scenario}</h1>
      <h2>Scenariobeskrivelse: {exercise.description}</h2>
      <h2>Forberedelser: {exercise.preparations}</h2>
      <h2>Ytelseskrav: {exercise.performanceRequirements}</h2>
      <h2>Parametere:</h2>
      <h3>Vind: {exercise.parameters.wind}</h3>
      <h3>Bølger: {exercise.parameters.waves}</h3>
      <h3>POB: {exercise.parameters.pob}</h3>
      <h3>Pågående aktiviteter: {exercise.parameters.ongoingActivities}</h3>
      <h2>Fokusområder: {exercise.focusAreas}</h2>
      <h2>Utvikling: {exercise.development}</h2>
    </AppPage>
  )
};

export default Exercise;
