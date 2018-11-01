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
    "team": "Søk- og redningslag",
    "subject": "Bruk av frigjøringsutstyr"
  },
  {
    "date": "",
    "id": 1,
    "team": "Livbåtlag",
    "subject": "Grunntrening"
  },
  {
    "date": "",
    "id": 2,
    "team": "Helidekklag",
    "subject": "Utstyrstrening"
  },
  {
    "date": "",
    "id": 3,
    "team": "Førstehjelpslag",
    "subject": "Grunntrening"
  },
  {
    "date": "",
    "id": 4,
    "team": "MOB-båt lag",
    "subject": "Sjøsetting av MOB-båt"
  },
  {
    "date": "",
    "id": 5,
    "team": "Søk- og redningslag",
    "subject": "Utstyrstrening"
  },
  {
    "date": "",
    "id": 6,
    "team": "Livbåtlag",
    "subject": "Kommunikasjonsprosedyrer"
  },
  {
    "date": "",
    "id": 7,
    "team": "Helidekklag",
    "subject": "Grunntrening"
  },
  {
    "date": "",
    "id": 8,
    "team": "Førstehjelpslag",
    "subject": "HLR"
  },
  {
    "date": "",
    "id": 9,
    "team": "MOB-båt lag",
    "subject": "Utstyrstrening"
  },
  {
    "date": "",
    "id": 10,
    "team": "Søk- og redningslag",
    "subject": "Grunntrening"
  },
  {
    "date": "",
    "id": 11,
    "team": "Livbåtlag",
    "subject": "Klargjøring og bruk av livbåt"
  },
  {
    "date": "",
    "id": 12,
    "team": "Helidekklag",
    "subject": "Bruk av frigjøringsutstyr"
  },
  {
    "date": "",
    "id": 13,
    "team": "Førstehjelpslag",
    "subject": "Kutt og klemskade"
  },
  {
    "date": "",
    "id": 14,
    "team": "MOB-båt lag",
    "subject": "Grunntrening"
  }
];

const Trainings = () => (
  <AppPage title="Øvingsrapporter - Trening">
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
            Tema
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
              {report.subject}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default Trainings;
