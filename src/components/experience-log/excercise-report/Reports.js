import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Switch, Route } from 'react-router-dom';


const Reports = ({ match, reports }) => (
  <Switch>
    <Route exact path={`${match.url}/`}>
      <AppPage title="Øvingsrapporter">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Dato
              </TableCell>
              <TableCell>
                Tema
              </TableCell>
              <TableCell>
                Informasjon
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map(report => (
              <TableRow key={report.id}>
                <TableCell>
                  {report.id}
                </TableCell>
                <TableCell>
                  {report.date}
                </TableCell>
                <TableCell>
                  {report.subject}
                </TableCell>
                <TableCell>
                  {report.content}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AppPage>
    </Route>
  </Switch>
);

export default Reports;
