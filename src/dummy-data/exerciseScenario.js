export const exerciseScenarioList = [
  {
    id: 11,
    dfu: '11',
    title: 'Alvorlig syk/skadet person',
    scenario: 'Personskade',
    description: 'Klemskade som følge av løfteoperasjon. Kontainer svinger ukontrollert og treffer en ' +
      'dekksarbeider. Personen er bevistløs og har synlige blødninger.',
    preparations: 'Sminke  markør\n' +
      'Avtale med kranfører og forberede et skadested\n' +
      'Avtale med dekksmannskap om varsling til kontrollrom, husk ""Øvelse-øvelse-øvelse""\n' +
      'Om mulig, simuler at markør ligger fast og må frigjøres',
    performanceRequirements: '',
    parameters:
      {
        wind: '6 m/s SØ',
        waves: '2m Hs',
        pob: '112',
        ongoingActivities: 'Interne løfteoperasjoner'
      },
    focusAreas: 'Livreddende stabilisering på skadested\n' +
      'Koordinere frigjøring av forulykket med S&R lag\n' +
      'Skånsom transport til hospital\n' +
      'Forberede for MEDEVAC',
    development: 'Potensiell alvorlig skade på forulykket, herunder brudd og indre blødninger\n' +
      'Situasjonen forverrer seg grunnet indre blødning\n' +
      'Sykepleier må følge helikopter til land med pasient\n' +
      'Tiltak på innretningen når sykepleier ikke lenger er tilstede'
  },
  {
    id: 8,
    dfu: '8',
    title: 'Mann over bord',
    scenario: 'Mann over bord ved arbeid over sjø',
    description: 'Ved planlagt arbeid over sjø, faller en stillasarbeider over bord. Sikkerhetsvakt varsler iht. ' +
      'etablerte rutiner. Livbøye er kastet ut.',
    preparations: 'Dukke, som slippes over bord hvor hendelsen intreffer\n' +
      'Sikkerhetsvakt,  utstyrt som ved arbeid over sjø\n' +
      'Livbøye\n' +
      'Forhåndsvarsel av MOB ressurser som ved arbeid over sjø',
    performanceRequirements: 'R.YK-3 Personell som utfører planlagt arbeid over sjø skal kunne plukkes opp fra sjøen ' +
      'innen 8 minutter.',
    parameters:
      {
        wind: 'mangler',
        waves: 'mangler',
        pob: 'mangler',
        ongoingActivities: 'mangler'
      },
    focusAreas: 'Egensikkerhet \n' +
      'Sikker sjøsetting av MOB båt\n' +
      'Kommunikasjon \n' +
      'Manøvrering og redning av person i sjø',
    development: '1) Personen blir bevisstløs i fallet (treffer strukturen i fallet) og drukner. \n' +
      '2) Kald temperatur i vannet fører til at tiden fra personen faller i vannet til vedkommende må hentes opp er kritisk.'
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
    preparations: 'Avtale med helikopteroperatør, bruk av traffikkmaskin ved en regulær mannskapsskifte flyvning. \n' +
      'Simulere krasj med passasjerer om bord.\n' +
      'Briefe passasjerer og piloter om øvelsen før avreise fra land.\n' +
      'Avtale med et utvalg av passasjerer om markørroller.',
    performanceRequirements: 'B.YK-3 Søk- og redningslag skal være klar til innsats fra mønstringssted innen 7 ' +
      'minutter etter at PA-melding er gitt.',
    parameters:
      {
        wind: 'mangler',
        waves: 'mangler',
        pob: 'mangler',
        ongoingActivities: 'mangler'
      },
    focusAreas: 'Egensikkerhet for helidekk mannskap ved landing og avgang\n' +
      'Sikring av helikopter på helidekk, fare for brann\n' +
      'Redning av passasjerer ut av helikopter\n' +
      'Kommunikajson\n' +
      'Samhandling mellom beredskapslag\n' +
      'Båretrasport\n' +
      'Bruk av hospital/nødhospital',
    development: 'Potensielle alvorlige skader på helikopter og brann kan oppstå dersom brenselslekkasje antennes ' +
      'av kollisionsenergien eller annen tenningskilde (for eksempel helikopterturbiner).'
  },

  {
    id: 9,
    dfu: '9',
    title: 'Brann i hjelpesystemer',
    scenario: 'Brann i generator',
    description: 'Det oppstår brann i en dieseldrevet generator. Brannen detekteres av branndetektorer. ' +
      'Maskinrommet har fast slukkesystem som må utløses manuelt. Brannspjeld skal lukke automatisk.',
    preparations: 'Forbered AT for vedlikehold på brannspjeld, slik at disse er (simulert) utkoplet i øvelsen.',
    performanceRequirements: 'B.YK-2 Skadestedsleder skal opprette skadestedssenter innen 5 minutter etter at ' +
      'PA-melding er gitt.',
    parameters:
      {
        wind: 'mangler',
        waves: 'mangler',
        pob: 'mangler',
        ongoingActivities: 'mangler'
      },
    focusAreas: 'Bruk av fast slukkesystem\n' +
      'Sjekk av AT, for å avklare om det er noe som kan begrense effekt av fast slukkesystem. (Liten betydning for watermist)\n' +
      'Kjennskap til og bruk av ventil for avstengning av dieseltilførsel til maskinrom.\n' +
      'Egensikkerhet ved røykdykking i maskinrom.',
    development: 'Potensiell spredning av mye røyk ved åpne brannspjeld\n' +
      'Ved åpne brannspjeld, meget begrenset virkning ved utløsning av Argonite eller inergen \n' +
      'Store lokale materielle skader'
  },
];

export const exerciseScenarioById = {};
exerciseScenarioList.forEach(exercise => exerciseScenarioById[exercise.id] = exercise);
