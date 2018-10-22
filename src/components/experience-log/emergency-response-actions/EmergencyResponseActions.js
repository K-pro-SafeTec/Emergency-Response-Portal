import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { emergencyResponseActionList } from '../../../dummy-data/emergencyResponseAction';


const EmergencyResponseAction = () => (
  <AppPage title="Beredskapsrelaterte aksjoner" back="..">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            ID
          </TableCell>
          <TableCell>
            Ansvarlig
          </TableCell>
          <TableCell>
            Beskrivelse
          </TableCell>
          <TableCell>
            Gitt av
          </TableCell>
          <TableCell>
            Relatert til
          </TableCell>
          <TableCell>
            Etablert dato
          </TableCell>
          <TableCell>
            Frist
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {emergencyResponseActionList.map(emergencyResponseAction => (
          <TableRow key={emergencyResponseAction.id}>
            <TableCell>
              {emergencyResponseAction.id}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.responsible}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.description}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.givenBy}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.relatedTo}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.established}
            </TableCell>
            <TableCell>
              {emergencyResponseAction.deadline}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default EmergencyResponseAction;
