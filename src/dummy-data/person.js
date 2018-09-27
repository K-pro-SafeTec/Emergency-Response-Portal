import Status from '../helpers/Status';

export const personList = [
  {
    id: 0,
    name: "Navn Navnesen",
    competence: {
      0: Status.OK,
      1: Status.WARNING,
    }
  }
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
