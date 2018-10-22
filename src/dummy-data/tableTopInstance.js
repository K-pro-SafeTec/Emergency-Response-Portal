import { tableTopScenarioList } from './tableTopScenario';
import { getDateFormatYMD, getDateRelatedToThisDate } from '../helpers/calendar-helper';


export const tableTopInstanceList = [
  {
    scenario: 9,
    start: getDateRelatedToThisDate(3, -6, 18),
    end: getDateRelatedToThisDate(3, -6, 19),
    development: "Trenger data"
  },
  {
    scenario: 4,
    start: getDateRelatedToThisDate(1, -5, 20),
    end: getDateRelatedToThisDate(1, -5, 21),
    development: "Trenger data"
  },
  {
    scenario: 9,
    start: getDateRelatedToThisDate(3, -4, 18),
    end: getDateRelatedToThisDate(3, -4, 19),
    development: "Trenger data"
  },
  {
    scenario: 4,
    start: getDateRelatedToThisDate(1, -3, 20),
    end: getDateRelatedToThisDate(1, -3, 21),
    development: "Trenger data"
  },
  {
    scenario: 9,
    start: getDateRelatedToThisDate(3, -2, 18),
    end: getDateRelatedToThisDate(3, -2, 19),
    development: "Trenger data"
  },
  {
    scenario: 4,
    start: getDateRelatedToThisDate(1, -1, 20),
    end: getDateRelatedToThisDate(1, -1, 21),
    development: "Trenger data"
  },
  {
    scenario: 1,
    start: getDateRelatedToThisDate(3, 0, 18),
    end: getDateRelatedToThisDate(3, 0, 19),
    development: "Trenger data"
  },
  {
    scenario: 3,
    start: getDateRelatedToThisDate(1, 1, 20),
    end: getDateRelatedToThisDate(1, 1, 21),
    development: "Trenger data"
  },
  {
    scenario: 1,
    start: getDateRelatedToThisDate(3, 2, 18),
    end: getDateRelatedToThisDate(3, 2, 19),
    development: "Trenger data"
  },
  {
    scenario: 3,
    start: getDateRelatedToThisDate(1, 3, 20),
    end: getDateRelatedToThisDate(1, 3, 21),
    development: "Trenger data"
  },
  {
    scenario: 1,
    start: getDateRelatedToThisDate(3, 4, 18),
    end: getDateRelatedToThisDate(3, 4, 19),
    development: "Trenger data"
  },
  {
    scenario: 3,
    start: getDateRelatedToThisDate(1, 5, 20),
    end: getDateRelatedToThisDate(1, 5, 21),
    development: "Trenger data"
  },
  {
    scenario: 13,
    start: getDateRelatedToThisDate(3, 6, 18),
    end: getDateRelatedToThisDate(3, 6, 19),
    development: "Trenger data"
  },
  {
    scenario: 12,
    start: getDateRelatedToThisDate(1, 7, 20),
    end: getDateRelatedToThisDate(1, 7, 21),
    development: "Trenger data"
  },
  {
    scenario: 13,
    start: getDateRelatedToThisDate(3, 8, 18),
    end: getDateRelatedToThisDate(3, 8, 19),
    development: "Trenger data"
  },
  {
    scenario: 12,
    start: getDateRelatedToThisDate(1, 9, 20),
    end: getDateRelatedToThisDate(1, 9, 21),
    development: "Trenger data"
  },
  {
    scenario: 13,
    start: getDateRelatedToThisDate(3, 10, 18),
    end: getDateRelatedToThisDate(3, 10, 19),
    development: "Trenger data"
  },
  {
    scenario: 12,
    start: getDateRelatedToThisDate(1, 11, 20),
    end: getDateRelatedToThisDate(1, 11, 21),
    development: "Trenger data"
  },
  {
    scenario: 2,
    start: getDateRelatedToThisDate(3, 12, 18),
    end: getDateRelatedToThisDate(3, 12, 19),
    development: "Trenger data"
  },
  {
    scenario: 14,
    start: getDateRelatedToThisDate(1, 13, 20),
    end: getDateRelatedToThisDate(1, 13, 21),
    development: "Trenger data"
  },
  {
    scenario: 2,
    start: getDateRelatedToThisDate(3, 14, 18),
    end: getDateRelatedToThisDate(3, 14, 19),
    development: "Trenger data"
  },
  {
    scenario: 14,
    start: getDateRelatedToThisDate(1, 15, 20),
    end: getDateRelatedToThisDate(1, 15, 21),
    development: "Trenger data"
  },
  {
    scenario: 2,
    start: getDateRelatedToThisDate(3, 16, 18),
    end: getDateRelatedToThisDate(3, 16, 19),
    development: "Trenger data"
  },
  {
    scenario: 14,
    start: getDateRelatedToThisDate(1, 17, 20),
    end: getDateRelatedToThisDate(1, 17, 21),
    development: "Trenger data"
  },
];

function key(scenario, date) {
  return `${scenario}/${date}`;
}

const keyLookup = {};
tableTopInstanceList.forEach(tableTopInstance => {
  keyLookup[key(tableTopInstance.scenario, getDateFormatYMD(tableTopInstance.start))] = tableTopInstance;
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
