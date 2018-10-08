import React from 'react';
import AppPage from '../shared/AppPage';
import { exercises } from '../../dummy-data/exercises';
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Route, Switch} from "react-router-dom";
import Table from "@material-ui/core/Table/Table";
import Exercise from "./Exercise";
import LinkTableRow from '../shared/LinkTableRow';

const ExerciseList = () => (
    <Table component="div">
      <TableHead component="div">
        <TableRow component="div">
          <TableCell component="div">
            DFU
          </TableCell>
          <TableCell component="div">
            Scenario
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody component="div">
        {exercises.map(exercise => (
          <LinkTableRow
            key={exercise.id}
            to={`${exercise.id}/`}
          >
            <TableCell component="div">
              {exercise.dfu}
            </TableCell>
            <TableCell component="div">
              {exercise.scenario}
            </TableCell>
          </LinkTableRow>
        ))}
      </TableBody>
    </Table>
);

export default ({ match }) => (
    <Switch>
      <Route exact path={match.path}>
        <AppPage title="Øvelser">
            <ExerciseList/>
        </AppPage>
      </Route>
      <Route path={`${match.url}/:id/`} component={Exercise} />
    </Switch>
);
