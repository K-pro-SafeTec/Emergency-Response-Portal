import React from 'react';
import AppPage from '../../shared/AppPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
          <TableCell>
            Rapport
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
            <TableCell>
              {performanceRequirement.report && (
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`../report-generator/report/${performanceRequirement.id}/`}
                >
                  Generér rapport
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default PerformanceRequirements;
