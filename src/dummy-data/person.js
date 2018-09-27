import Status from '../helpers/Status';

export const personList = [
  {
    id: 0,
    name: "Navn Navnesen",
    teams: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    competence: {
      0: Status.OK,
      1: Status.WARNING,
    },
  }
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
