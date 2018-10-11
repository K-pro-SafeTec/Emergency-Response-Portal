import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import LinkTableRow from '../shared/LinkTableRow';
import {getSorting, stableSort, documentsDesc} from "../../helpers/table-sort-helper";

const TableHeadCell = ({orderBy, order, tableHeadClicked, id, label}) => (
  <TableCell component="div">
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

// Material UI lets us create tables without using the actual table DOM elements.
// We can use Links as table rows to link to the documents, but a Link cannot appear as a child of <tbody> (as React will complain).
// To use Links as table rows, we'll use divs for everything else.
const DocumentTable = ({ documents, orderBy, order, tableHeadClicked }) => (
  <Table component="div">
    <TableHead component="div">
      <TableRow component="div">
        <TableHeadCell
          orderBy={orderBy}
          order={order}
          tableHeadClicked={tableHeadClicked}
          id={"id"}
          label={"Dok. Nr."}/>
        <TableHeadCell
          orderBy={orderBy}
          order={order}
          tableHeadClicked={tableHeadClicked}
          id={"rev"}
          label={"Rev."}/>
        <TableHeadCell
          orderBy={orderBy}
          order={order}
          tableHeadClicked={tableHeadClicked}
          id={"date"}
          label={"Dato"}/>
        <TableHeadCell
          orderBy={orderBy}
          order={order}
          tableHeadClicked={tableHeadClicked}
          id={"title"}
          label={"Tittel"}/>
      </TableRow>
    </TableHead>
    <TableBody component="div">
      {stableSort(documents, getSorting(order, orderBy, documentsDesc))
        .map(document => (
          <LinkTableRow
            key={document.id}
            to={`${document.id}/`}
          >
            <TableCell component="div">
              {document.id}
            </TableCell>
            <TableCell component="div">
              {document.rev}
            </TableCell>
            <TableCell component="div">
              {document.date}
            </TableCell>
            <TableCell component="div">
              {document.title}
            </TableCell>
          </LinkTableRow>
      ))}
    </TableBody>
  </Table>
);

export default DocumentTable;
