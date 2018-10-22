import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinkTableRow from '../shared/LinkTableRow';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';
import {getDateFormatYMD} from "../../helpers/calendar-helper";


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
            key={`${instance.scenario}/${getDateFormatYMD(instance.start)}`}
            to={`../../scenarios/${instance.scenario}/${getDateFormatYMD(instance.start)}/`}
          >
            <TableCell component="div">
              {getDateFormatYMD(instance.start)}
            </TableCell>
            <TableCell component="div">
              {`${instance.scenario}/${getDateFormatYMD(instance.start)}`}
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
