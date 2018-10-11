import React from 'react';
import AppPage from '../shared/AppPage';
import {exerciseScenarioById, scenarios} from '../../dummy-data/exercise-scenarios'
import { getSorting, stableSort, descByValue } from '../../helpers/table-sort-helper'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";

const rows = [
  { id: "week", numeric: true, label: "Uke" },
  { id: "type", numeric: false, label: "Type" },
  { id: "dfu", numeric: true, label: "DFU" },
  { id: "scenario", numeric: false, label: "Scenario" },
];

class ExerciseScenariosTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sortér"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  }
}

export default class ExerciseScenarios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      orderBy: "week",
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "asc";
    if (this.state.orderBy === property && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  handleClick = (event, id) => {
    const selected = exerciseScenarioById[id];
    console.log("Scenario " + selected.id + " is selected.")
  };

  render() {
    const { order, orderBy } = this.state;

    return (
      <AppPage title="Øvelsesscenarioer" back="..">
        <Paper>
          <div>
            <Table>
              <ExerciseScenariosTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={scenarios.length}
              />
              <TableBody>
                {stableSort(scenarios, getSorting(order, orderBy, descByValue))
                  .map(n => {
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        tabIndex={-1}
                        key={n.id}
                      >
                        <TableCell numeric>{n.week}</TableCell>
                        <TableCell>{n.type}</TableCell>
                        <TableCell numeric>{n.dfu}</TableCell>
                        <TableCell>{n.scenario}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </AppPage>
    );
  }
}
