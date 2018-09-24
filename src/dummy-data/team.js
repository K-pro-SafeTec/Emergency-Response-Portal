import Status from '../helpers/Status';

export const teamList = [
  {
    id: 0,
    name: "Beredskapsledelse",
    status: Status.OK,
    members: [0],
  },
  {
    id: 1,
    name: "Kontrollromsoperatører",
    status: Status.WARNING,
    members: [0],
  },
  {
    id: 2,
    name: "Sykepleier",
    status: Status.OK,
    members: [0],
  },
  {
    id: 3,
    name: "Helidekklag",
    status: Status.OK,
    members: [0],
  },
  {
    id: 4,
    name: "Livbåtlag",
    status: Status.OK,
    members: [0],
  },
  {
    id: 5,
    name: "Skadestedsleder",
    status: Status.OK,
    members: [0],
  },
  {
    id: 6,
    name: "Søk- og redningslag",
    status: Status.ERROR,
    members: [0],
  },
  {
    id: 7,
    name: "Førstehjelpslag",
    status: Status.OK,
    members: [0],
  },
  {
    id: 8,
    name: "MOB-båtlag",
    status: Status.WARNING,
    members: [0],
  },
];

export const teamById = {};
teamList.forEach(team => teamById[team.id] = team);
