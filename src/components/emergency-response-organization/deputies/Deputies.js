import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {deputiesDesc, getSorting, stableSort} from "../../../helpers/table-sort-helper";
import {roleById, roleList} from "../../../dummy-data/role";
import LinkTableRow from "../../shared/LinkTableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {personById} from "../../../dummy-data/person";
import AppPage from "../../shared/AppPage";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";

const TableHeadCell = ({ id, label, order, orderBy, handleRequestSort }) => {

    return (
      <TableCell component={"div"}
        sortDirection={orderBy === id ? order : false}
      >
        <Tooltip
          title="Sortér"
          placement={"bottom-start"}
          enterDelay={300}
        >
          <TableSortLabel
            active={orderBy === id}
            direction={order}
            onClick={() => handleRequestSort(id)}
          >
            {label}
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    )
};

const Deputies = ({ orderBy, order, handleRequestSort}) => (
  <AppPage title="Stedfortredere" back="..">
    <Table component="div">
      <TableHead component="div">
        <TableRow component="div">
          <TableHeadCell id={"beredskapsrolle"} label={"Beredskapsrolle"} orderBy={orderBy}
                         order={order} handleRequestSort={handleRequestSort}/>
          <TableHeadCell id={"stedsfortrederrolle"} label={"Stedfortrederrolle"} orderBy={orderBy}
                         order={order} handleRequestSort={handleRequestSort}/>
          <TableHeadCell id={"stedfortredere"} label={"Stedfortredere"} orderBy={orderBy}
                         order={order} handleRequestSort={handleRequestSort}/>
        </TableRow>
      </TableHead>
      <TableBody component="div">
        {stableSort(roleList
            .filter(role => role.replacementRole !== null),
          getSorting(order, orderBy, deputiesDesc))
          .map(role => {
              const replacementRole = roleById[role.replacementRole];
              return (
                <LinkTableRow
                  key={role.id}
                  to={`/competence-overview/people/${replacementRole.person}/`}
                >
                  <TableCell component="div">
                    {role.name}
                  </TableCell>
                  <TableCell component="div">
                    {replacementRole.name}
                  </TableCell>
                  <TableCell component="div">
                    {personById[replacementRole.person].name}
                  </TableCell>
                </LinkTableRow>
              );
            }
          )}
      </TableBody>
    </Table>
  </AppPage>
);

export default Deputies;
