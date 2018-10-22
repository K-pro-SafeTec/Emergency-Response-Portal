import { exerciseScenarioList } from './exerciseScenario';
import { getDateFormatYMD, getDateRelatedToThisDate } from '../helpers/calendar-helper';


export const exerciseInstanceList = [
  {
    scenario: 11,
    start: getDateRelatedToThisDate(0, -4, 20),
    end: getDateRelatedToThisDate(0, -4, 21),
  },
  {
    scenario: 11,
    start: getDateRelatedToThisDate(0, -2, 20),
    end: getDateRelatedToThisDate(0, -2, 21),
  },
  {
    scenario: 11,
    start: getDateRelatedToThisDate(0, -0, 20),
    end: getDateRelatedToThisDate(0, -0, 21),
  },
  {
    scenario: 8,
    start: getDateRelatedToThisDate(0, 2, 20),
    end: getDateRelatedToThisDate(0, 2, 21),
  },
  {
    scenario: 8,
    start: getDateRelatedToThisDate(0, 4, 20),
    end: getDateRelatedToThisDate(0, 4, 21),
  },
  {
    scenario: 8,
    start: getDateRelatedToThisDate(0, 6, 20),
    end: getDateRelatedToThisDate(0, 6, 21),
  },
  {
    scenario: 9,
    start: getDateRelatedToThisDate(4, 7, 21),
    end: getDateRelatedToThisDate(4, 7, 22),
  },
  {
    scenario: 9,
    start: getDateRelatedToThisDate(4, 9, 21),
    end: getDateRelatedToThisDate(4, 9, 22),
  },
  {
    scenario: 9,
    start: getDateRelatedToThisDate(4, 11, 21),
    end: getDateRelatedToThisDate(4, 11, 22),
  },
  {
    scenario: 6,
    start: getDateRelatedToThisDate(0, 14, 20),
    end: getDateRelatedToThisDate(0, 14, 21),
  },
  {
    scenario: 6,
    start: getDateRelatedToThisDate(0, 16, 20),
    end: getDateRelatedToThisDate(0, 16, 21),
  },
  {
    scenario: 6,
    start: getDateRelatedToThisDate(0, 18, 20),
    end: getDateRelatedToThisDate(0, 18, 21),
  },
];

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
exerciseInstanceList.forEach(exerciseInstance => {
  keyLookup[key(exerciseInstance.scenario, getDateFormatYMD(exerciseInstance.start))] = exerciseInstance;
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
