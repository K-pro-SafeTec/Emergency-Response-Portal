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
    "dfuNr": 6,
    "dfuTitle": "Helikopterulykke på helidekk",
    "scenario": "Personskade på helidekk"
  },
  {
    "date": "",
    "dfuNr": 2,
    "dfuTitle": "Brønnhendelse",
    "scenario": "Lekkasje i moon-pool"
  },
  {
    "date": "",
    "dfuNr": 8,
    "dfuTitle": "Mann over bord",
    "scenario": "Mann over bord ved arbeid over sjø"
  },
  {
    "date": "",
    "dfuNr": 4,
    "dfuTitle": "Fare for kollisjon",
    "scenario": "Fiskefartøy på kollisjonskurs"
  },
  {
    "date": "",
    "dfuNr": 1,
    "dfuTitle": "Uantent/antent hydrokarbonlekkasje",
    "scenario": "Lekkasje i turret"
  },
  {
    "date": "",
    "dfuNr": 9,
    "dfuTitle": "Brann i hjelpesystemer",
    "scenario": "Brann i HVAC"
  },
  {
    "date": "",
    "dfuNr": 11,
    "dfuTitle": "Alvorlig syk/skadet person",
    "scenario": "Psykisk lidelse"
  },
  {
    "date": "",
    "dfuNr": 6,
    "dfuTitle": "Helikopterulykke på helidekk",
    "scenario": "Brann i helikopter"
  },
  {
    "date": "",
    "dfuNr": 10,
    "dfuTitle": "Brann i boligkvarter",
    "scenario": "Brann på lugar"
  },
  {
    "date": "",
    "dfuNr": 7,
    "dfuTitle": "Helikopterulykke i sjø",
    "scenario": "Helikopterulykke i sjø"
  },
  {
    "date": "",
    "dfuNr": 11,
    "dfuTitle": "Alvorlig syk/skadet person",
    "scenario": "Alvorlig sykdom"
  },
  {
    "date": "",
    "dfuNr": 9,
    "dfuTitle": "Brann i hjelpesystemer",
    "scenario": "Brann i maskinrom"
  },
  {
    "date": "",
    "dfuNr": 4,
    "dfuTitle": "Fare for kollisjon",
    "scenario": "Passerende fartøy på kollisjonskurs"
  },
  {
    "date": "",
    "dfuNr": 8,
    "dfuTitle": "Mann over bord",
    "scenario": "Mann over bord ved arbeid over sjø"
  },
  {
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
          <TableRow key={report.dfuNr}>
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
