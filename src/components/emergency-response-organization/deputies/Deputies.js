import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AppPage from '../../shared/AppPage';
import { roleList, roleById } from '../../../dummy-data/role';
import { personById } from '../../../dummy-data/person';
import LinkTableRow from '../../shared/LinkTableRow';


const Deputies = () => (
  <AppPage title="Stedfortredere" back="..">
    <Table component="div">
      <TableHead component="div">
        <TableRow component="div">
          <TableCell component="div">
            Beredskapsrolle
          </TableCell>
          <TableCell component="div">
            Stedfortrederrolle
          </TableCell>
          <TableCell component="div">
            Stedfortredere
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody component="div">
        {
          roleList
            .filter(role => role.replacementRole !== null)
            .map(role => {
              const replacementRole = roleById[role.replacementRole];
              return (
                <LinkTableRow
                  key={role.id}
                  to={`/competence-overview/people/${replacementRole.person}/`}
                >
                  <TableCell component="div">
                    {role.name}
                  </TableCell>
                  <TableCell component="div">
                    {replacementRole.name}
                  </TableCell>
                  <TableCell component="div">
                    {personById[replacementRole.person].name}
                  </TableCell>
                </LinkTableRow>
              );
            })
        }
      </TableBody>
    </Table>
  </AppPage>
);

export default Deputies;
