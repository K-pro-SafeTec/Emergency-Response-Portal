import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { industryInformationList } from '../../../dummy-data/industryInformation';


const IndustryInformation = () => (
  <AppPage title="Bransjeinformasjon" back="..">
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
        {industryInformationList.map(industryInformation => (
          <TableRow key={industryInformation.id}>
            <TableCell>
              {industryInformation.id}
            </TableCell>
            <TableCell>
              {industryInformation.date}
            </TableCell>
            <TableCell>
              {industryInformation.subject}
            </TableCell>
            <TableCell>
              {industryInformation.content}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default IndustryInformation;
