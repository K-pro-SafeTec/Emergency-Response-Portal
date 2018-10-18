export const exerciseScenarioList = [
  {
    id: 0,
    dfu: 11,
    scenario: 'Alvorlig syk/skadet person',
    description: 'Deler av et stillas raser sammen. Person som jobbet i stillaset ligger skadet under\n' +
      'stillasdelene.',
    preparations: 'Klargjøre dukke og stillasdeler.',
    performanceRequirements: 'Beredskapslag skal være klar til innsats, ferdig påkledd på mønstringssted, innen 10 minutter etter\n' +
      'at varsel er gitt.',
    parameters:
      {
        wind: '6 m/s SØ',
        waves: '2m Hs',
        pob: '112',
        ongoingActivities: 'Interne løfteoperasjoner'
      },
    focusAreas: 'Redning, transport og behandling av skadet person',
    development: 'Skadet person mister bevissthet'
  },
  {
    id: 1,
    dfu: 4,
    scenario: 'Fartøy på kollisjonskurs',
    description: 'En båt holder på å kræsje i et isfjell',
    preparations: 'Ingen forberedelser',
    performanceRequirements: 'Beredskapslag skal være klar til innsats, ferdig påkledd på mønstringssted, innen 10 minutter etter\n' +
      'at varsel er gitt.',
    parameters:
      {
        wind: '10 m/s SØ',
        waves: '4m Hs',
        pob: '113',
        ongoingActivities: 'Interne løfteoperasjoner'
      },
    focusAreas: 'Få fartøyet på rett kurs igjen',
    development: 'Kommer nærmere og nærmere isfjellet'
  }
];

export const exerciseScenarioById = {};
exerciseScenarioList.forEach(exercise => exerciseScenarioById[exercise.id] = exercise);
