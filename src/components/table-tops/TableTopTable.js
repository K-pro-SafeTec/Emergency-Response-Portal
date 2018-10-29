import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinkTableRow from '../shared/LinkTableRow';
import { tableTopScenarioById } from '../../dummy-data/tableTopScenario';
import {getDateFormatYMD} from "../../helpers/calendar-helper";


const TableTopTable = ({ instances }) => (
  <Table component="div">
    <TableHead component="div">
      <TableRow component="div">
        <TableCell component="div">Dato</TableCell>
        <TableCell component="div">DFU</TableCell>
        <TableCell component="div">Tittel</TableCell>
        <TableCell component="div">Scenario</TableCell>
      </TableRow>
    </TableHead>
    <TableBody component="div">
      {instances
        .map(instance => [tableTopScenarioById[instance.scenario], instance])
        .map(([scenario, instance]) => (
          <LinkTableRow
            key={`${instance.scenario}/${getDateFormatYMD(instance.start)}`}
            to={`../../scenarios/${instance.scenario}/${getDateFormatYMD(instance.start)}/`}
          >
            <TableCell component="div">
              {getDateFormatYMD(instance.start)}
            </TableCell>
            <TableCell component="div">
              {scenario.dfuNr}
            </TableCell>
            <TableCell component="div">
              {scenario.dfuTitle}
            </TableCell>
            <TableCell component="div">
              {scenario.scenario}
            </TableCell>
          </LinkTableRow>
        ))
      }
    </TableBody>
  </Table>
);

export default TableTopTable;
