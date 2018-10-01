import React from 'react';
import AppPage from '../shared/AppPage';
import { exercises } from '../../dummy-data/exercises';
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table/Table";
import {withStyles} from "@material-ui/core";

const styles = {
  noUnderline: {
    textDecoration: 'none',
  },
};

const ExerciseList = ({ classes }) => (
  <AppPage title="Øvelser">
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
            className={classes.noUnderline}
            component={Link}
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
  </AppPage>
);

export default withStyles(styles)(ExerciseList);
