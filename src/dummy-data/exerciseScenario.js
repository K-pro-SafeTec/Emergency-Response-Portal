export const exerciseScenarioList = [
  {
    id: 11,
    dfu: '11',
    title: 'Alvorlig syk/skadet person',
    scenario: 'Personskade',
    description: 'Klemskade som følge av løfteoperasjon. Kontainer svinger ukontrollert og treffer en ' +
      'dekksarbeider. Personen er bevistløs og har synlige blødninger.',
    preparations: [
      "Sminke  markør",
      "Avtale med kranfører og forberede et skadested",
      "Avtale med dekksmannskap om varsling til kontrollrom, husk \"Øvelse-øvelse-øvelse\"",
      "Om mulig, simuler at markør ligger fast og må frigjøres",
    ],
    performanceRequirements: '',
    focusAreas: [
      "Livreddende stabilisering på skadested",
      "Koordinere frigjøring av forulykket med S&R lag",
      "Skånsom transport til hospital",
      "Forberede for MEDEVAC ",
    ],
    development: [
      "Potensiell alvorlig skade på forulykket, herunder brudd og indre blødninger",
      "Situasjonen forverrer seg grunnet indre blødning",
      "Sykepleier må følge helikopter til land med pasient",
      "Tiltak på innretningen når sykepleier ikke lenger er tilstede",
    ],
    questions: [
      "Hvordan ble det varslet (GA, pager, radio, telefon eller personlig oppmøte)?",
      "Mønstring, tid brukt?",
      "Hvordan fikk vi informasjon om skadested og var dette tilstrekkelig utfyllende, hadde vi med oss riktig utstyr?",
      "Hvilken livreddende førstehjelp ble gitt, hvilket skadebilde identifiserte vi?",
      "Hvordan var samordning med S&R-lag, frigjøring av forulykket og transport til hospital?",
      "Egensikkerhet, var det utfordringer knyttet til dette?",
      "Ble MEDEVAC vurdert/besluttet?",
      "Var det andre utfordringer som ikke er dekket av punktene over?",
      "Hvilke lærepunkter var det, hvilke skal vi overføre til andre som ikke var med på øvelsen?",
      "Hvordan ville oppfølging av involverte blitt utført om det hadde vært en reell hendelse?",
    ],
  },
  {
    id: 8,
    dfu: '8',
    title: 'Mann over bord',
    scenario: 'Mann over bord ved arbeid over sjø',
    description: 'Ved planlagt arbeid over sjø, faller en stillasarbeider over bord. Sikkerhetsvakt varsler iht. ' +
      'etablerte rutiner. Livbøye er kastet ut.',
    preparations: [
      "Dukke, som slippes over bord hvor hendelsen intreffer",
      "Sikkerhetsvakt,  utstyrt som ved arbeid over sjø",
      "Livbøye",
      "Forhåndsvarsel av MOB ressurser som ved arbeid over sjø",
    ],
    performanceRequirements: 'R.YK-3 Personell som utfører planlagt arbeid over sjø skal kunne plukkes opp fra sjøen ' +
      'innen 8 minutter.',
    focusAreas: [
      "Egensikkerhet",
      "Sikker sjøsetting av MOB båt",
      "Kommunikasjon",
      "Manøvrering og redning av person i sjø",
    ],
    development: [
      "1) Personen blir bevisstløs i fallet (treffer strukturen i fallet) og drukner.",
      "2) Kald temperatur i vannet fører til at tiden fra personen faller i vannet til vedkommende må hentes opp er " +
      "kritisk.",
    ],
    questions: [],
  },
  {
    id: 6,
    dfu: '6',
    title: 'Helikopterulykke på helidekk',
    scenario: 'Krasjlanding på helidekk',
    description: 'Ved avgang  fra installsjonen mister helikopteret motorkraft og oppdrfit umiddelbart etter avgang. ' +
      'Helikopteret faller ned på helidekk med full kraft fra ca. 10 meters høyde. Landingsunderstell på ene siden ' +
      'knekker og helikopteret tipper delvis over slik at rotor treffer dekk og blir delvis ødelagt. Ubalanse i ' +
      'rotoren medfører krafting vibrasjon i helikopetert før den stanser opp. Helikopteret har 21 personer om bord ' +
      '(19 passasjerer og 2 piloter).',
    preparations: [
      "Avtale med helikopteroperatør, bruk av traffikkmaskin ved en regulær mannskapsskifte flyvning.",
      "Simulere krasj med passasjerer om bord.",
      "Briefe passasjerer og piloter om øvelsen før avreise fra land.",
      "Avtale med et utvalg av passasjerer om markørroller."
    ],
    performanceRequirements: 'B.YK-3 Søk- og redningslag skal være klar til innsats fra mønstringssted innen 7 ' +
      'minutter etter at PA-melding er gitt.',
    focusAreas: [
      "Egensikkerhet for helidekk mannskap ved landing og avgang",
      "Sikring av helikopter på helidekk, fare for brann",
      "Redning av passasjerer ut av helikopter",
      "Kommunikajson",
      "Samhandling mellom beredskapslag",
      "Båretrasport",
      "Bruk av hospital/nødhospital",
    ],
    development: [
      "Potensielle alvorlige skader på helikopter og brann kan oppstå dersom brenselslekkasje antennes av " +
      "kollisionsenergien eller annen tenningskilde (for eksempel helikopterturbiner)."
    ],
    questions: [],
  },

  {
    id: 9,
    dfu: '9',
    title: 'Brann i hjelpesystemer',
    scenario: 'Brann i generator',
    description: 'Det oppstår brann i en dieseldrevet generator. Brannen detekteres av branndetektorer. ' +
      'Maskinrommet har fast slukkesystem som må utløses manuelt. Brannspjeld skal lukke automatisk.',
    preparations: [
      "Forbered AT for vedlikehold på brannspjeld, slik at disse er (simulert) utkoplet i øvelsen."
    ],
    performanceRequirements: 'B.YK-2 Skadestedsleder skal opprette skadestedssenter innen 5 minutter etter at ' +
      'PA-melding er gitt.',
    focusAreas: [
      "Bruk av fast slukkesystem",
      "Sjekk av AT, for å avklare om det er noe som kan begrense effekt av fast slukkesystem. (Liten betydning for watermist)",
      "Kjennskap til og bruk av ventil for avstengning av dieseltilførsel til maskinrom.",
      "Egensikkerhet ved røykdykking i maskinrom.",
    ],
    development: [
      "Potensiell spredning av mye røyk ved åpne brannspjeld",
      "Ved åpne brannspjeld, meget begrenset virkning ved utløsning av Argonite eller inergen",
      "Store lokale materielle skader",
    ],
    questions: [],
  },
];

export const exerciseScenarioById = {};
exerciseScenarioList.forEach(exercise => exerciseScenarioById[exercise.id] = exercise);
