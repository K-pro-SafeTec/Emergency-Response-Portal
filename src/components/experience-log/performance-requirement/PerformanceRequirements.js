import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { performanceRequirementList } from '../../../dummy-data/performanceRequirement';


const PerformanceRequirements = () => (
  <AppPage title="Ytelseskrav" back="..">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Nr.
          </TableCell>
          <TableCell>
            Ytelseskrav
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {performanceRequirementList.map(performanceRequirement => (
          <TableRow key={performanceRequirement.id}>
            <TableCell>
              {performanceRequirement.id}
            </TableCell>
            <TableCell>
              {performanceRequirement.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default PerformanceRequirements;
