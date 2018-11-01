import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const reports = [
  {
    "id": 0,
    "date": "",
    "dfuNr": 6,
    "dfuTitle": "Helikopterulykke på helidekk",
    "scenario": "Personskade på helidekk"
  },
  {
    "id": 1,
    "date": "",
    "dfuNr": 2,
    "dfuTitle": "Brønnhendelse",
    "scenario": "Lekkasje i moon-pool"
  },
  {
    "id": 2,
    "date": "",
    "dfuNr": 8,
    "dfuTitle": "Mann over bord",
    "scenario": "Mann over bord ved arbeid over sjø"
  },
  {
    "id": 3,
    "date": "",
    "dfuNr": 4,
    "dfuTitle": "Fare for kollisjon",
    "scenario": "Fiskefartøy på kollisjonskurs"
  },
  {
    "id": 4,
    "date": "",
    "dfuNr": 1,
    "dfuTitle": "Uantent/antent hydrokarbonlekkasje",
    "scenario": "Lekkasje i turret"
  },
  {
    "id": 5,
    "date": "",
    "dfuNr": 9,
    "dfuTitle": "Brann i hjelpesystemer",
    "scenario": "Brann i HVAC"
  },
  {
    "id": 6,
    "date": "",
    "dfuNr": 11,
    "dfuTitle": "Alvorlig syk/skadet person",
    "scenario": "Psykisk lidelse"
  },
  {
    "id": 7,
    "date": "",
    "dfuNr": 6,
    "dfuTitle": "Helikopterulykke på helidekk",
    "scenario": "Brann i helikopter"
  },
  {
    "id": 8,
    "date": "",
    "dfuNr": 10,
    "dfuTitle": "Brann i boligkvarter",
    "scenario": "Brann på lugar"
  },
  {
    "id": 9,
    "date": "",
    "dfuNr": 7,
    "dfuTitle": "Helikopterulykke i sjø",
    "scenario": "Helikopterulykke i sjø"
  },
  {
    "id": 10,
    "date": "",
    "dfuNr": 11,
    "dfuTitle": "Alvorlig syk/skadet person",
    "scenario": "Alvorlig sykdom"
  },
  {
    "id": 11,
    "date": "",
    "dfuNr": 9,
    "dfuTitle": "Brann i hjelpesystemer",
    "scenario": "Brann i maskinrom"
  },
  {
    "id": 12,
    "date": "",
    "dfuNr": 4,
    "dfuTitle": "Fare for kollisjon",
    "scenario": "Passerende fartøy på kollisjonskurs"
  },
  {
    "id": 13,
    "date": "",
    "dfuNr": 8,
    "dfuTitle": "Mann over bord",
    "scenario": "Mann over bord ved arbeid over sjø"
  },
  {
    "id": 14,
    "date": "",
    "dfuNr": 10,
    "dfuTitle": "Brann i boligkvarter",
    "scenario": "Brann på røykerom"
  }
];

const Exercises = () => (
  <AppPage title="Øvingsrapporter - Øvelser">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Dato
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

export default Exercises;
