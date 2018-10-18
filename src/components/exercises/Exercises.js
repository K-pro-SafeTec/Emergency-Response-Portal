import React from 'react';
import AppPage from '../shared/AppPage';
import { exerciseInstanceList } from '../../dummy-data/exerciseInstance';
import { exerciseScenarioById } from '../../dummy-data/exerciseScenario';
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Table from "@material-ui/core/Table/Table";
import LinkTableRow from '../shared/LinkTableRow';

const Exercises = () => (
  <AppPage title="Øvelser" back="..">
    <Table component="div">
      <TableHead component="div">
        <TableRow component="div">
          <TableCell component="div">
            Dato
          </TableCell>
          <TableCell component="div">
            DFU
          </TableCell>
          <TableCell component="div">
            Scenario
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody component="div">
        {exerciseInstanceList
          .map(exercise => [exercise, exerciseScenarioById[exercise.scenario]])
          .map(([instance, scenario]) => (
            <LinkTableRow
              key={`${instance.scenario}/${instance.date}`}
              to={`${instance.scenario}/${instance.date}/`}
            >
              <TableCell component="div">
                {instance.date}
              </TableCell>
              <TableCell component="div">
                {scenario.dfu}
              </TableCell>
              <TableCell component="div">
                {scenario.scenario}
              </TableCell>
            </LinkTableRow>
          ))
        }
      </TableBody>
    </Table>
  </AppPage>
);

export default Exercises;
