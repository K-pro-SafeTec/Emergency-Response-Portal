export const roleList = [
  {
    id: 0,
    name: 'Beredskapsleder',
    replacementRole: 1,
    person: 0,
  },
  {
    id: 1,
    name: 'Loggfører',
    replacementRole: null,
    person: 1,
  },
  {
    id: 2,
    name: 'Skadestedsleder',
    replacementRole: 3,
    person: 4,
  },
  {
    id: 3,
    name: 'Leder søk- og redningslag',
    replacementRole: 2,
    person: 2,
  },
  {
    id: 4,
    name: 'Sykepleier',
    replacementRole: 5,
    person: 0,
  },
  {
    id: 5,
    name: 'Førstehjelper',
    replacementRole: null,
    person: 3,
  },
];

export const roleById = {};
roleList.forEach(person => roleById[person.id] = person);
