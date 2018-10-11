import { teamList } from './team';

export const trainingScenarioList = [
  {
    id: 0,
    theme: "Lage eksempeltema",
    goals: "Lage tekst som ser ut som faktiske mål. Oppnå en struktur som er representativ for faktisk data som kommer inn i systemet, slik at eksemplet ser realistisk ut. Skrive lang nok eksempeltekst slik at teksten bryter.",
    setup: "Motta eksempeldata fra kunden.",
    teams: [3, 4, 6, 7, 8],
  },
];

export const trainingScenarioById = {};
trainingScenarioList.forEach(trainingScenario => trainingScenarioById[trainingScenario.id] = trainingScenario);

export const trainingScenariosByTeamId = {};
teamList.forEach(team => trainingScenariosByTeamId[team.id] = []);
trainingScenarioList.forEach(trainingScenario => {
  trainingScenario.teams.forEach(teamId => {
    trainingScenariosByTeamId[teamId].push(trainingScenario);
  });
});
