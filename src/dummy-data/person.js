export const personList = [
  {
    id: 0,
    name: "Navn Navnesen",
  }
];

export const personById = {};
personList.forEach(person => personById[person.id] = person);
