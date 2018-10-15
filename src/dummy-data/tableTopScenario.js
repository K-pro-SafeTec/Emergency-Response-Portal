import { teamList } from './team';

export const tableTopScenarioList = [
  {
    id: 0,
    dfuNr: "1",
    dfuTitle: "Tittel på dfu",
    scenario: "Motta scenario fra kunden.",
    description: "Motta beskrivelse fra kunden.",
    teams: [0, 1],
  },
];

export const tableTopScenarioById = {};
tableTopScenarioList.forEach(tableTopScenario => tableTopScenarioById[tableTopScenario.id] = tableTopScenario);

export const tableTopScenarioByTeamId = {};
teamList.forEach(team => tableTopScenarioByTeamId[team.id] = []);
tableTopScenarioList.forEach(tableTopScenario => {
  tableTopScenario.teams.forEach(teamId => {
    tableTopScenarioByTeamId[teamId].push(tableTopScenario);
  });
});
