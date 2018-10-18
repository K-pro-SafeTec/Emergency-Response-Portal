import { exerciseScenarioList } from './exerciseScenario';

export const exerciseInstanceList = [
  {
    scenario: 0,
    date: '2018-10-11',
    start: new Date('2018-10-11T09:00:00Z'),
    end: new Date('2018-10-11T11:45:00Z'),
  },
  {
    scenario: 1,
    date: '2018-10-12',
    start: new Date('2018-10-12T09:00:00Z'),
    end: new Date('2018-10-12T11:45:00Z'),
  },
  {
    scenario: 0,
    date: '2018-10-23',
    start: new Date('2018-10-23T09:00:00Z'),
    end: new Date('2018-10-23T11:45:00Z'),
  },
  {
    scenario: 1,
    date: '2018-10-24',
    start: new Date('2018-10-24T09:00:00Z'),
    end: new Date('2018-10-24T11:45:00Z'),
  },
];

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
exerciseInstanceList.forEach(exerciseInstance => {
  keyLookup[key(exerciseInstance.scenario, exerciseInstance.date)] = exerciseInstance;
});

export function getExerciseInstanceByKey(scenario, date) {
  return keyLookup[key(scenario, date)];
}

const scenarioLookup = {};
exerciseScenarioList.forEach(exercise => {
  scenarioLookup[exercise.id] = [];
});
exerciseInstanceList.forEach(exerciseInstance => {
  scenarioLookup[exerciseInstance.scenario].push(exerciseInstance);
});
