import Status from '../helpers/Status';

export const personList = [
  {
    id: 0,
    name: 'Navn Navnesen',
    teams: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    competence: {
      0: Status.OK,
      1: Status.WARNING,
    },
  },
  {
    id: 1,
    name: 'Otto',
    teams: [],
    competence: {},
  },
  {
    id: 2,
    name: 'Anne Turid',
    teams: [],
    competence: {},
  },
  {
    id: 3,
    name: 'Gustav',
    teams: [],
    competence: {},
  },
  {
    id: 4,
    name: 'Petter',
    teams: [],
    competence: {},
  },
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
