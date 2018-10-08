export const scenarios = [
  {
    id: 0,
    week: 2,
    type: 'Øvelse',
    dfu: 4,
    scenario: 'Fartøy på kollisjonskurs'
  },
  {
    id: 1,
    week: 3,
    type: 'Table top',
    dfu: 15,
    scenario: 'Ekstremvær over design-/operasjonskriterier'
  },
  {
    id: 2,
    week: 8,
    type: 'Øvelse',
    dfu: 11,
    scenario: 'Alvorlig syk/skadet person'
  },
  {
    id: 3,
    week: 9,
    type: 'Table top',
    dfu: 7,
    scenario: 'Helikopterulykke i sjø'
  },
  {
    id: 4,
    week: 14,
    type: 'Øvelse',
    dfu: 10,
    scenario: 'Mann over bord'
  },
  {
    id: 5,
    week: 15,
    type: 'Table top',
    dfu: '12',
    scenario: 'Sikringstrussel/terror'
  },
  {
    id: 6,
    week: 20,
    type: 'Øvelse',
    dfu: 9,
    scenario: 'Brann i boligkvarter'
  },
  {
    id: 7,
    week: 21,
    type: 'Table top',
    dfu: 14,
    scenario: 'Strukturhendelse'
  }
];

export const exerciseScenarioById = {};
scenarios.forEach(scenario => exerciseScenarioById[scenario.id] = scenario);
