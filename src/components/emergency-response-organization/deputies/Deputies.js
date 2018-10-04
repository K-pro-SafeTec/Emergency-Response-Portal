import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AppPage from '../../shared/AppPage';
import { roleList, roleById } from '../../../dummy-data/role';
import { personById } from '../../../dummy-data/person';

export default () => (
  <AppPage title="Stedfortredere" back="..">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Beredskapsrolle</TableCell>
          <TableCell>Stedfortrederrolle</TableCell>
          <TableCell>Stedfortredere</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          roleList
            .filter(role => role.replacementRole !== null)
            .map(role => {
              const replacementRole = roleById[role.replacementRole];
              return (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{replacementRole.name}</TableCell>
                  <TableCell>{personById[replacementRole.person].name}</TableCell>
                </TableRow>
              );
            })
        }
      </TableBody>
    </Table>
  </AppPage>
);
