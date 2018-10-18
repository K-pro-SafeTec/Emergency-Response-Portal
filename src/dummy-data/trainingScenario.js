import { teamList } from './team';

export const trainingScenarioList = [
  {
    id: 0,
    theme: "Lage eksempeltema",
    goals: "Lage tekst som ser ut som faktiske mål. Oppnå en struktur som er representativ for faktisk data som kommer inn i systemet, slik at eksemplet ser realistisk ut. Skrive lang nok eksempeltekst slik at teksten bryter.",
    setup: "Motta eksempeldata fra kunden.",
    team: 3,
  },
  {
    id: 1,
    theme: "Lage eksempeltema",
    goals: "Lage tekst som ser ut som faktiske mål. Oppnå en struktur som er representativ for faktisk data som kommer inn i systemet, slik at eksemplet ser realistisk ut. Skrive lang nok eksempeltekst slik at teksten bryter.",
    setup: "Motta eksempeldata fra kunden.",
    team: 4,
  },
];

export const trainingScenarioById = {};
trainingScenarioList.forEach(trainingScenario => trainingScenarioById[trainingScenario.id] = trainingScenario);

export const trainingScenariosByTeamId = {};
teamList.forEach(team => trainingScenariosByTeamId[team.id] = []);
trainingScenarioList.forEach(trainingScenario => {
  trainingScenariosByTeamId[trainingScenario.team].push(trainingScenario);
});
