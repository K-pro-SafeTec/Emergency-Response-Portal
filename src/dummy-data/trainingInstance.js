import { trainingScenarioList } from './trainingScenario';

export const trainingInstanceList = [
  {
    scenario: 0,
    date: '2018-10-09',
    start: new Date('2018-10-09T09:00:00Z'),
    end: new Date('2018-10-09T11:45:00Z'),
  },
  {
    scenario: 1,
    date: '2018-10-10',
    start: new Date('2018-10-10T09:00:00Z'),
    end: new Date('2018-10-10T11:45:00Z'),
  },
  {
    scenario: 0,
    date: '2018-10-22',
    start: new Date('2018-10-22T09:00:00Z'),
    end: new Date('2018-10-22T11:45:00Z'),
  },
  {
    scenario: 1,
    date: '2018-10-23',
    start: new Date('2018-10-23T09:00:00Z'),
    end: new Date('2018-10-23T11:45:00Z'),
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
