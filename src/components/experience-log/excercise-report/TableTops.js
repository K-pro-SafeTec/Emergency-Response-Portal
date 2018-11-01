import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const reports = [
  {
    "date": "",
    "id": 0,
    "team": "Beredskapsledelse",
    "dfuNr": 3,
    "dfuTitle": "Akutt utslipp",
    "scenario": "Oljeutslipp fra innretninig"
  },
  {
    "date": "",
    "id": 1,
    "team": "Beredskapsledelse",
    "dfuNr": 4,
    "dfuTitle": "Fare for kollisjon",
    "scenario": "Drivende lekter på kollisjonskurs"
  },
  {
    "date": "",
    "id": 2,
    "team": "Beredskapsledelse",
    "dfuNr": 12,
    "dfuTitle": "Kriminell handling",
    "scenario": "Bombetrussel"
  },
  {
    "date": "",
    "id": 3,
    "team": "Beredskapsledelse",
    "dfuNr": 13,
    "dfuTitle": "Tap av posisjon",
    "scenario": "Ankerlinebrudd"
  },
  {
    "date": "",
    "id": 4,
    "team": "Beredskapsledelse",
    "dfuNr": 14,
    "dfuTitle": "Tap av stabilitet",
    "scenario": "Vanninntrengning"
  },
  {
    "date": "",
    "id": 5,
    "team": "Kontrollromsoperatører",
    "dfuNr": 1,
    "dfuTitle": "Uantent/antent hydrokarbonlekkasje",
    "scenario": "Lekkasje i turret"
  },
  {
    "date": "",
    "id": 6,
    "team": "Kontrollromsoperatører",
    "dfuNr": 3,
    "dfuTitle": "Akutt utslipp",
    "scenario": "Oljeutslipp fra subsea utstyr"
  },
  {
    "date": "",
    "id": 7,
    "team": "Kontrollromsoperatører",
    "dfuNr": 13,
    "dfuTitle": "Tap av posisjon",
    "scenario": "Ankerlinebrudd"
  },
  {
    "date": "",
    "id": 8,
    "team": "Kontrollromsoperatører",
    "dfuNr": 14,
    "dfuTitle": "Tap av stabilitet",
    "scenario": "Vanninntrengning"
  },
  {
    "date": "",
    "id": 9,
    "team": "Kontrollromsoperatører",
    "dfuNr": 2,
    "dfuTitle": "Brønnhendelse",
    "scenario": "Tap av brønnkontroll"
  }
];

const TableTops = () => (
  <AppPage title="Øvingsrapporter - Table Tops">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Dato
          </TableCell>
          <TableCell>
            ID
          </TableCell>
          <TableCell>
            Beredskapslag
          </TableCell>
          <TableCell>
            DFU Nr
          </TableCell>
          <TableCell>
            DFU Tittel
          </TableCell>
          <TableCell>
            Scenario
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reports.map(report => (
          <TableRow key={report.id}>
            <TableCell>
              {report.date}
            </TableCell>
            <TableCell>
              {report.id}
            </TableCell>
            <TableCell>
              {report.team}
            </TableCell>
            <TableCell>
              {report.dfuNr}
            </TableCell>
            <TableCell>
              {report.dfuTitle}
            </TableCell>
            <TableCell>
              {report.scenario}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default TableTops;
