import Status from '../helpers/Status';
import { roleList } from './role';

function getRolesForPerson(id) {
  return roleList
    .filter(role => role.person === id)
    .map(role => role.id);
}

export const personList = [
  {
    id: 0,
    name: 'Navn Navnesen',
    teams: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    competence: {
      0: Status.OK,
      1: Status.WARNING,
    },
    roles: getRolesForPerson(0),
  },
  {
    id: 1,
    name: 'Otto',
    teams: [],
    competence: {},
    roles: getRolesForPerson(1),
  },
  {
    id: 2,
    name: 'Anne Turid',
    teams: [],
    competence: {},
    roles: getRolesForPerson(2),
  },
  {
    id: 3,
    name: 'Gustav',
    teams: [],
    competence: {},
    roles: getRolesForPerson(3),
  },
  {
    id: 4,
    name: 'Petter',
    teams: [],
    competence: {},
    roles: getRolesForPerson(4),
  },
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
