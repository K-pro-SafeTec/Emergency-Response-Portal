import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import AppPage from "../../shared/AppPage";
import scenarios from "../../../dummy-data/lessons-learned.js";
import {descByValue, getSorting, stableSort} from "../../../helpers/table-sort-helper";

const TableHeadCell = ({orderBy, order, tableHeadClicked, id, label}) => (
  <TableCell>
    <Tooltip
      title="Sortér"
      enterDelay={300}
    >
      <TableSortLabel
        active={orderBy === id}
        direction={order}
        onClick={() => tableHeadClicked(id)}
      >
        {label}
      </TableSortLabel>
    </Tooltip>
  </TableCell>
);

export default ({order, orderBy, tableHeadClicked}) => (
  <AppPage title="Lessons learned" back="..">
    <Paper style={{margin: '1em'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell
              orderBy={orderBy}
              order={order}
              tableHeadClicked={tableHeadClicked}
              id={"dfu"}
              label={"DFU / Ytelseskrav"}
            />
            <TableHeadCell
              orderBy={orderBy}
              order={order}
              tableHeadClicked={tableHeadClicked}
              id={"learned"}
              label={"Læring"}
            />
            <TableHeadCell
              orderBy={orderBy}
              order={order}
              tableHeadClicked={tableHeadClicked}
              id={"action"}
              label={"Videre aksjoner / Tiltak"}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(scenarios, getSorting(order, orderBy, descByValue))
            .map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.dfu}</TableCell>
                <TableCell>{row.learned}</TableCell>
                <TableCell>{row.action}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </AppPage>
);
