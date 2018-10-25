import { teamList } from './team';

export const trainingScenarioList = [
  {
    id: 0,
    theme: "Utstyrstrening",
    goals: "Være kjent med eget utstyr  og bruken av dette",
    setup: "Påkledning av innsatsbekledning\n" +
      "Gjennomgang av bruk av røykdykkerapparat\n" +
      "Bytte av luftflaske - røykdykkerapparat\n" +
      "Gjennomgang og test av kommunikasjon\n" +
      "Bli kjent runde ved behov",
    team: 6,
  },
  {
    id: 1,
    theme: "Kutt og klemskade",
    goals: "Repetisjon av kutt og klemskade behandling",
    setup: "Bruk av trykkbandasje og strips for større kuttskader\n" +
      "Gjennomgå og repetere symptomer på indre klemskader",
    team: 7,
  },
  {
    id: 2,
    theme: "MOB grunntrening for hver offshore periode",
    goals: "Bli kjent med hvor utstyret er lagret, hvordan det brukes og ikle seg personlig utstyr",
    setup: "Gjennomgang MOB instruks\n" +
      "Befaring på MOB stasjoner\n" +
      "Påkledning av MOB båt drakter\n" +
      "Introduksjon og test av radiokommunikasjon \n" +
      "Om været tillater det, låre MOB-båt og simulere redning av person i sjø\n" +
      "Tilbakeføring av utstyr til stand-by for beredskap",
    team: 8,
  },
  {
    id: 3,
    theme: "Helidekk grunntrening for hver offshore periode",
    goals: "Bli kjent med og trene på bruk av spesialutstyr (crash-kit) og dual-agent aggregat",
    setup: "\"Gjennomgå og trene på bruk av crash-kit\n" +
      "Gjennomgå bruk av dual-agent aggregat\n" +
      "Test av faste brannmonitorer\n" +
      "Gjennomgang av aksjonsrutiner ved helikopterkras.",
    team: 3,
  },
  {
    id: 4,
    theme: "Livbåt, klargjøring og bruk",
    goals: "Bli kjent med betjening og bruk av livbåtene",
    setup: "Gjennomgå klargjøring av livbåt\n" +
      "Gjennomgå startprosedyre for fremdrift, lufttilførsel og manøvrering\n" +
      "Gjennomgå rutiner for utløsning/låring av livbåt\n" +
      "Gjennomgå rutiner for ombordstigning og plassering av passasjerer\n" +
      "Gjennomgå og trene på kommunikasjonsprosedyre",
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
