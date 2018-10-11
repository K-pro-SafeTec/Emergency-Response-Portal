import { trainingScenarioList } from './trainingScenario';

export const trainingInstanceList = [
  {
    scenario: 0,
    date: '2018-10-9',
  },
  {
    scenario: 0,
    date: '2018-10-10',
  },
  {
    scenario: 0,
    date: '2018-10-22',
  },
  {
    scenario: 0,
    date: '2018-10-23',
  },
];

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
trainingInstanceList.forEach(trainingInstance => {
  keyLookup[key(trainingInstance.scenario, trainingInstance.date)] = trainingInstance;
});

export function getTrainingInstanceByKey(scenario, date) {
  return keyLookup[key(scenario, date)];
}

const scenarioLookup = {};
trainingScenarioList.forEach(trainingScenario => {
  scenarioLookup[trainingScenario.id] = [];
})
trainingInstanceList.forEach(trainingInstance => {
  scenarioLookup[trainingInstance.scenario].push(trainingInstance);
});

export function getTrainingInstancesByScenario(scenario) {
  return scenarioLookup[scenario];
}
