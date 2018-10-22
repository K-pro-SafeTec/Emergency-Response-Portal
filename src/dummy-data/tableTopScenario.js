import { teamList } from './team';

export const tableTopScenarioList = [
  {
    id: 1,
    dfuNr: "1",
    dfuTitle: "Uantent/Antent hydrokarbonlekkasje",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 1,
  },
  {
    id: 2,
    dfuNr: "2",
    dfuTitle: "Brønnhendelse",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 1,
  },
  {
    id: 3,
    dfuNr: "3",
    dfuTitle: "Akutt utslipp",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 0,
  },
  {
    id: 4,
    dfuNr: "4",
    dfuTitle: "Fare for kollisjon",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 0,
  },
  {
    id: 9,
    dfuNr: "9",
    dfuTitle: "Brann i hjelpesystemer",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 1,
  },

  {
    id: 12,
    dfuNr: "12",
    dfuTitle: "Kriminell handling",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 0,
  },
  {
    id: 13,
    dfuNr: "13",
    dfuTitle: "Tap av posisjon",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 1,
  },
  {
    id: 14,
    dfuNr: "14",
    dfuTitle: "Tap av stabilitet",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 0,
  },
];

export const tableTopScenarioById = {};
tableTopScenarioList.forEach(tableTopScenario => tableTopScenarioById[tableTopScenario.id] = tableTopScenario);

export const tableTopScenarioByTeamId = {};
teamList.forEach(team => tableTopScenarioByTeamId[team.id] = []);
tableTopScenarioList.forEach(tableTopScenario => {
  tableTopScenarioByTeamId[tableTopScenario.team].push(tableTopScenario);
});
