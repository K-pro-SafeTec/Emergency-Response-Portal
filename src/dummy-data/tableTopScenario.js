import { teamList } from './team';

export const tableTopScenarioList = [
  {
    id: 0,
    dfuNr: "1",
    dfuTitle: "Tittel på dfu",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 0,
  },
  {
    id: 1,
    dfuNr: "1",
    dfuTitle: "Tittel på dfu",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    team: 1,
  },
];

export const tableTopScenarioById = {};
tableTopScenarioList.forEach(tableTopScenario => tableTopScenarioById[tableTopScenario.id] = tableTopScenario);

export const tableTopScenarioByTeamId = {};
teamList.forEach(team => tableTopScenarioByTeamId[team.id] = []);
tableTopScenarioList.forEach(tableTopScenario => {
  tableTopScenarioByTeamId[tableTopScenario.team].push(tableTopScenario);
});
