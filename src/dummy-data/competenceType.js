export const competenceTypeList = [
  {
    id: 0,
    name: "Offshore grunnkurs",
  },
  {
    id: 1,
    name: "Røykdykkerkurs",
  },
  {
    id: 2,
    name: "Modultrening",
  }
];

export const competenceTypeById = {};
competenceTypeList.forEach(competenceType => competenceTypeById[competenceType.id] = competenceType);
