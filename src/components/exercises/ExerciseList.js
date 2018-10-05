import React from 'react';
import AppPage from '../shared/AppPage';
import { exercises } from '../../dummy-data/exercises';
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Link, Route, Switch} from "react-router-dom";
import Table from "@material-ui/core/Table/Table";
import Exercise from "./Exercise";

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
          <TableRow
            key={exercise.id}
            hover
            component={Link}
            style={{textDecoration: 'none'}}
            to={`${exercise.id}/`}
          >
            <TableCell component="div">
              {exercise.dfu}
            </TableCell>
            <TableCell component="div">
              {exercise.scenario}
            </TableCell>
          </TableRow>
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
