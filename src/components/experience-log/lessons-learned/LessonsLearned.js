import React from 'react';
import AppPage from "../../shared/AppPage";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

export default () => (
  <AppPage title="Lessons learned">
    <Paper style={{margin: '1em'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DFU / Ytelseskrav</TableCell>
            <TableCell>Læring</TableCell>
            <TableCell>Videre aksjoner / Tiltak</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scenarios.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.dfu}</TableCell>
                <TableCell>{row.learned}</TableCell>
                <TableCell>{row.dfu}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </AppPage>
);
