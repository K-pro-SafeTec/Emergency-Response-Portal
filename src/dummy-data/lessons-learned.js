const scenarios = [
  {
    id: 0,
    dfu: 'DFU 01',
    learned: 'ARL ble sendt inn i området selv om SKR hadde sterke indikasjoner på at det var en reell lekkasje i ' +
      'området',
    action: 'Fokusere på bruk av ARL, med tilhørende risiko, i kommunikasjon med SKR'
  },
  {
    id: 1,
    dfu: 'R.YK-1',
    learned: 'Feil ved opptelling av POB hos beredskapsledelsen',
    action: 'Stressmestringskurs. Vurdere å benytte annen ressurs til POB kontroll'
  },
  {
    id: 2,
    dfu: 'Annet',
    learned: 'SAR-helikopter meldte ikke fra til andre enheter i området når det forlot feltet',
    action: 'Tydeliggjøre SAR-helikopterets varslingsansvar'
  },
  {
    id: 3,
    dfu: 'DFU 05',
    learned: 'Område var ikke tilstrekkelig avsperret var løfteoperasjon og personell kom for nært hengende last',
    action: 'Forbedre prosedyre'
  }
];

export default scenarios;
