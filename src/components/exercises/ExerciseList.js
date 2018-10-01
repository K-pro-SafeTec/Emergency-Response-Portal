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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            DFU
          </TableCell>
          <TableCell>
            Scenario
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exercises.map(exercise => (
          <TableRow
            key={exercise.id}
            hover
            className={classes.noUnderline}
            component={Link}
            to={`${exercise.id}/`}
          >
            <TableCell>
              {exercise.dfu}
            </TableCell>
            <TableCell>
              {exercise.scenario}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </AppPage>
);

export default withStyles(styles)(ExerciseList);
