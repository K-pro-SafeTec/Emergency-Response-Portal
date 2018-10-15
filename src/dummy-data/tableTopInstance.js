import { tableTopScenarioList } from './tableTopScenario';

export const tableTopInstanceList = [
  {
    scenario: 0,
    date: '2018-10-9',
    development: "Trenger data"
  },
  {
    scenario: 0,
    date: '2018-10-10',
    development: "Trenger data"
  },
  {
    scenario: 0,
    date: '2018-10-22',
    development: "Trenger data"
  },
  {
    scenario: 0,
    date: '2018-10-23',
    development: "Trenger data"
  },
];

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
tableTopInstanceList.forEach(tableTopInstance => {
  keyLookup[key(tableTopInstance.scenario, tableTopInstance.date)] = tableTopInstance;
});

export function getTableTopInstanceByKey(scenario, date) {
  return keyLookup[key(scenario, date)];
}

const scenarioLookup = {};
tableTopScenarioList.forEach(tableTop => {
  scenarioLookup[tableTop.id] = [];
});
tableTopInstanceList.forEach(tableTopInstance => {
  scenarioLookup[tableTopInstance.scenario].push(tableTopInstance);
});
