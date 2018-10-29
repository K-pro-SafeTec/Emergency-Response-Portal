import { teamList } from './team';

export const trainingScenarioList = [
  {
    id: 0,
    theme: "Utstyrstrening",
    goals: "Være kjent med eget utstyr  og bruken av dette",
    setup: [
      "Påkledning av innsatsbekledning",
      "Gjennomgang av bruk av røykdykkerapparat",
      "Bytte av luftflaske - røykdykkerapparat",
      "Gjennomgang og test av kommunikasjon",
      "Bli kjent runde ved behov",
    ],
    team: 2,
  },
  {
    id: 1,
    theme: "Kutt og klemskade",
    goals: "Repetisjon av kutt og klemskade behandling",
    setup: [
      "Bruk av trykkbandasje og strips for større kuttskader",
      "Gjennomgå og repetere symptomer på indre klemskader",
    ],
    team: 12,
  },
  {
    id: 2,
    theme: "MOB grunntrening for hver offshore periode",
    goals: "Bli kjent med hvor utstyret er lagret, hvordan det brukes og ikle seg personlig utstyr",
    setup: [
      "Gjennomgang MOB instruks",
      "Befaring på MOB stasjoner",
      "Påkledning av MOB båt drakter",
      "Introduksjon og test av radiokommunikasjon",
      "Om været tillater det, låre MOB-båt og simulere redning av person i sjø",
      "Tilbakeføring av utstyr til stand-by for beredskap",
    ],
    team: 3,
  },
  {
    id: 3,
    theme: "Helidekk grunntrening for hver offshore periode",
    goals: "Bli kjent med og trene på bruk av spesialutstyr (crash-kit) og dual-agent aggregat",
    setup: [
      "Gjennomgå og trene på bruk av crash-kit",
      "Gjennomgå bruk av dual-agent aggregat",
      "Test av faste brannmonitorer",
      "Gjennomgang av aksjonsrutiner ved helikopterkras.",
    ],
    team: 6,
  },
  {
    id: 4,
    theme: "Livbåt, klargjøring og bruk",
    goals: "Bli kjent med betjening og bruk av livbåtene",
    setup: [
      "Gjennomgå klargjøring av livbåt",
      "Gjennomgå startprosedyre for fremdrift, lufttilførsel og manøvrering",
      "Gjennomgå rutiner for utløsning/låring av livbåt",
      "Gjennomgå rutiner for ombordstigning og plassering av passasjerer",
      "Gjennomgå og trene på kommunikasjonsprosedyre",
    ],
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
