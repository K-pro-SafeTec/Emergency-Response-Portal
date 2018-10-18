import { tableTopScenarioList } from './tableTopScenario';

export const tableTopInstanceList = [
  {
    scenario: 0,
    date: '2018-10-11',
    start: new Date('2018-10-11T09:00:00Z'),
    end: new Date('2018-10-11T11:45:00Z'),
    development: "Trenger data"
  },
  {
    scenario: 1,
    date: '2018-10-12',
    start: new Date('2018-10-12T09:00:00Z'),
    end: new Date('2018-10-12T11:45:00Z'),
    development: "Trenger data"
  },
  {
    scenario: 0,
    date: '2018-10-23',
    start: new Date('2018-10-23T09:00:00Z'),
    end: new Date('2018-10-23T11:45:00Z'),
    development: "Trenger data"
  },
  {
    scenario: 1,
    date: '2018-10-24',
    start: new Date('2018-10-24T09:00:00Z'),
    end: new Date('2018-10-24T11:45:00Z'),
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
