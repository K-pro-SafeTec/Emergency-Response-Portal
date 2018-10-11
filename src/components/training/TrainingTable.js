import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinkTableRow from '../shared/LinkTableRow';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';


const TrainingTable = ({ instances }) => (
  <Table component="div">
    <TableHead component="div">
      <TableRow component="div">
        <TableCell component="div">Dato</TableCell>
        <TableCell component="div">ID</TableCell>
        <TableCell component="div">Tema</TableCell>
      </TableRow>
    </TableHead>
    <TableBody component="div">
      {instances
        .map(instance => [trainingScenarioById[instance.scenario], instance])
        .map(([scenario, instance]) => (
          <LinkTableRow
            key={`${instance.scenario}/${instance.date}`}
            to={`../../scenarios/${instance.scenario}/${instance.date}/`}
          >
            <TableCell component="div">
              {instance.date}
            </TableCell>
            <TableCell component="div">
              {`${instance.scenario}/${instance.date}`}
            </TableCell>
            <TableCell component="div">
              {scenario.theme}
            </TableCell>
          </LinkTableRow>
        ))
      }
    </TableBody>
  </Table>
);

export default TrainingTable;
