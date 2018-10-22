import React  from 'react';

export default ({match}) => (
  <div>
    <h2>Debrief report for scenario {match.params.scenarioId} on date {match.params.date}.</h2>
  </div>
)
