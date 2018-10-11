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
      0: {
        status: Status.OK,
        validUntil: new Date('2019-10-20'),
        comment: null,
      },
      1: {
        status: Status.WARNING,
        validUntil: new Date('2018-11-18'),
        comment: 'Eksempelkommentar',
      },
    },
    roles: getRolesForPerson(0),
  },
  {
    id: 1,
    name: 'Otto',
    teams: [6],
    competence: {
      0: {
        status: Status.OK,
        validUntil: new Date('2019-10-21'),
        comment: null,
      },
      1: {
        status: Status.OK,
        validUntil: null,
        comment: 'Eksempelkommentar',
      },
      2: {
        status: Status.OK,
        validUntil: new Date('2020-04-18'),
        comment: 'Eksempelkommentar',
      },
    },
    roles: getRolesForPerson(1),
  },
  {
    id: 2,
    name: 'Anne Turid',
    teams: [6],
    competence: {
      1: {
        status: Status.OK,
        validUntil: new Date('2019-10-20'),
        comment: null,
      },
      2: {
        status: Status.WARNING,
        validUntil: new Date('2018-11-18'),
        comment: 'Eksempelkommentar',
      },
    },
    roles: getRolesForPerson(2),
  },
  {
    id: 3,
    name: 'Gustav',
    teams: [6],
    competence: {
      0: {
        status: Status.WARNING,
        validUntil: new Date('2019-02-22'),
        comment: null,
      },
      1: {
        status: Status.WARNING,
        validUntil: new Date('2018-12-18'),
        comment: 'Eksempelkommentar',
      },
      2: {
        status: Status.OK,
        validUntil: new Date('2020-11-18'),
        comment: 'Eksempelkommentar',
      },
    },
    roles: getRolesForPerson(3),
  },
  {
    id: 4,
    name: 'Petter',
    teams: [6],
    competence: {},
    roles: getRolesForPerson(4),
  },
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
