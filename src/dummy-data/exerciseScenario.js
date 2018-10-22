export const exerciseScenarioList = [
  {
    id: 11,
    dfu: '11',
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
    id: 8,
    dfu: '8',
    scenario: 'Mann over bord',
    description: 'Mangler beskrivelse',
    preparations: 'Mangle data.',
    performanceRequirements: 'Mangler data',
    parameters:
      {
        wind: 'mangler',
        waves: 'mangler',
        pob: 'mangler',
        ongoingActivities: 'mangler'
      },
    focusAreas: 'Mangler',
    development: 'Mangler'
  },
  {
    id: 6,
    dfu: '6',
    scenario: 'Helikopterulykke på helidekk',
    description: 'Mangler beskrivelse',
    preparations: 'Mangle data.',
    performanceRequirements: 'Mangler data',
    parameters:
      {
        wind: 'mangler',
        waves: 'mangler',
        pob: 'mangler',
        ongoingActivities: 'mangler'
      },
    focusAreas: 'Mangler',
    development: 'Mangler'
  },
];

export const exerciseScenarioById = {};
exerciseScenarioList.forEach(exercise => exerciseScenarioById[exercise.id] = exercise);
