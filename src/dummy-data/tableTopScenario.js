import { teamList } from './team';

export const tableTopScenarioList = [
  {
    id: 1,
    dfuNr: "1",
    dfuTitle: "Uantent/Antent hydrokarbonlekkasje",
    scenario: "Lekkasje i turret",
    description: "",
    team: 1,
    questions: [],
    debrief: [],
  },
  {
    id: 2,
    dfuNr: "2",
    dfuTitle: "Brønnhendelse",
    scenario: "Tap av brønnkontroll",
    description: "",
    team: 1,
    questions: [],
    debrief: [],
  },
  {
    id: 3,
    dfuNr: "3",
    dfuTitle: "Akutt utslipp",
    scenario: "Oljeutslipp til sjø fra innretninig",
    description: "Scenarioet omhandler oljeutslipp fra innretningen. I initiell fase er ikke lekksjekilde kjent. Et " +
      "større søl brer seg utover sjø. Værfold er 6 m/s vind fra nordvest, smul sjø (1-1,5m bølger). Hendelsen blir " +
      "varslet kontrollrom av uteoperatør.",
    team: 0,
    questions: [
      "Hvordan blir et slikt varsel til kontrollrom/radio håndtert og varslet videre?",
      "Hvem mobiliserer?",
      "Hva iverksettes av tiltak / avklaringer (Påse at tiltak ivaretar bore-/produksjonstilatk for å stoppe kilde)?",
      "Skal evakuering / avmanning iversettes?",
      "Hva gjøres for å avdekke størrelse på utslipp?",
      "Hvordan håndteres en avmanning?",
      "Hvilke ressurser kan brukes og hvordan varsles de?",
      "Involvering av 2. linje, HRS etc.?",
      "Mottaksapparat på land - evakuerte?",
      "Helseskade - avdampning fra utslipp - hvordan er dette?",
    ],
    debrief: [],
  },
  {
    id: 4,
    dfuNr: "4",
    dfuTitle: "Fare for kollisjon",
    scenario: "Drivende fartøy på kollisjonskurs",
    description: "Slepet til en en stor lekter (110 meter lang) har røket, og denne driver nå mot inretningen. " +
      "Installasjonen er varslet iht. gjeldene ytelseskrav ved en avtand på 20 nm. Det blåser kuling i området " +
      "(18-20 m/s).",
    team: 0,
    questions: [
      "Hvordan blir et slikt varsel til kontrollrom/radio håndtert og varslet videre?",
      "Hvem mobiliserer?",
      "Hva iverksettes av tiltak/avklaringer (Påse at tiltak ivaretar sikring av installsjon og produksjon. " +
      "Tidsfaktor før sammenstøt, avmanning (ressuser og tid til dette))?",
      "Skal alle forlate innretningen?",
      "Hvordan håndteres en avmanning?",
      "Hvilke ressurser kan brukes, hvordan varsles de?",
      "Involvering av 2. linje, HRS etc.?",
      "Mottaksapparat på land - evakuerte?",
      "Vil debrief iverksettes etter en slik hendelse?",
    ],
    debrief: [
      "Gjennomgang av det vi så fungerte bra",
      "Gjennomgang av det som kan bli bedre",
      "Gjennomgang av det som vi ikke fikk til",
      "Hvilke aksjoner/lærepunkter skal tas videre (oppdatering av planer, sjekkliste, varslingsrutiner etc.",
      "Hva bør vi trene mer på",
      "Erfaringer vi skal dele med andre som ikke var med på øvelsen",
    ],
  },
  {
    id: 9,
    dfuNr: "9",
    dfuTitle: "Brann i hjelpesystemer",
    scenario: "",
    description: "",
    team: 1,
    questions: [],
    debrief: [],
  },
  {
    id: 12,
    dfuNr: "12",
    dfuTitle: "Kriminell handling",
    scenario: "Bombetrussel",
    description: "Installasjonen mottar varsel om at det skal være utplassert en bombe på installsjonen. Trusslene " +
      "er ringt inn til lokal avis. Media ringer til oljeselskapet og spør hva de vil gjøre med dette. Så langt er " +
      "ikke politiet etc. varslet.",
    team: 0,
    questions: [
      "Hvordan blir et slikt varsel til sentralbord håndtert, når tid blir installasjonen, politiet etc. varslet?",
      "Har sentralbord skjema for mottak og videre varsling?",
      "Hvem mobiliserer?",
      "Hva iverksettes av tiltak/avklaringer?",
      "Hvordan vurderes trusslen?",
      "Skal innretningen avmannes/evakueres?",
      "Hvordan håndteres en avmanning?",
      "Hvilke ressurser kan brukes, hvordan varsles de?",
      "Involvering av 2. linje, HRS etc.?",
      "Mottaksapparat på land - evakuerte?",
      "Vil debrief iverksettes etter en slik hendelse?",
    ],
    debrief: [],
  },
  {
    id: 13,
    dfuNr: "13",
    dfuTitle: "Tap av posisjon",
    scenario: "Ankerlinebrudd",
    description: "",
    team: 1,
    questions: [],
    debrief: [],
  },
  {
    id: 14,
    dfuNr: "14",
    dfuTitle: "Tap av stabilitet",
    scenario: "Vanninntrengning",
    description: "",
    team: 0,
    questions: [],
    debrief: [],
  },
];

export const tableTopScenarioById = {};
tableTopScenarioList.forEach(tableTopScenario => tableTopScenarioById[tableTopScenario.id] = tableTopScenario);

export const tableTopScenarioByTeamId = {};
teamList.forEach(team => tableTopScenarioByTeamId[team.id] = []);
tableTopScenarioList.forEach(tableTopScenario => {
  tableTopScenarioByTeamId[tableTopScenario.team].push(tableTopScenario);
});
