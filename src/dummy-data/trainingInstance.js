import { trainingScenarioList } from './trainingScenario';
import { getDateFormatYMD, getDateRelatedToThisDate } from '../helpers/calendar-helper';

function createData(scenario, weekday, numberOfWeeks) {
  return {
    scenario,
    start: getDateRelatedToThisDate(weekday, numberOfWeeks, 20),
    end: getDateRelatedToThisDate(weekday, numberOfWeeks, 21),
  };
}

export let trainingInstanceList = [];

for (let numberOfWeeks = -6; numberOfWeeks < 18; numberOfWeeks += 2) {
  trainingInstanceList.push(createData(0, 1, numberOfWeeks));
  trainingInstanceList.push(createData(1, 2, numberOfWeeks));
  trainingInstanceList.push(createData(2, 3, numberOfWeeks));
  trainingInstanceList.push(createData(3, 2, numberOfWeeks + 1));
  trainingInstanceList.push(createData(4, 3, numberOfWeeks + 1));
}

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
trainingInstanceList.forEach(trainingInstance => {
  keyLookup[key(trainingInstance.scenario, getDateFormatYMD(trainingInstance.start))] = trainingInstance;
});

export function getTrainingInstanceByKey(scenario, date) {
  return keyLookup[key(scenario, date)];
}

const scenarioLookup = {};
trainingScenarioList.forEach(trainingScenario => {
  scenarioLookup[trainingScenario.id] = [];
});
trainingInstanceList.forEach(trainingInstance => {
  scenarioLookup[trainingInstance.scenario].push(trainingInstance);
});

export function getTrainingInstancesByScenario(scenario) {
  return scenarioLookup[scenario];
}
