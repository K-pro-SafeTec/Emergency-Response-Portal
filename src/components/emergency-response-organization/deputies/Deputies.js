import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AppPage from '../../shared/AppPage';
import { roleList, roleById } from '../../../dummy-data/role';
import { personById } from '../../../dummy-data/person';
import LinkTableRow from '../../shared/LinkTableRow';
import { getSorting, stableSort, deputiesDesc } from '../../../helpers/table-sort-helper';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";

class TableHeadCell extends React.Component {
  createSortHandler = property => {
    this.props.onRequestSort(property);
  };

  render() {
  const { id, label, order, orderBy } = this.props;
    return (
      <TableCell
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
          onClick={() => this.createSortHandler(id)}
        >
          {label}
          </TableSortLabel>
          </Tooltip>
      </TableCell>

    )
  }
}

class Deputies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: "beredskapsrolle",
      order: "asc",
    };
  }

  handleRequestSort = orderBy => {
    let order = "asc";
    if (this.state.orderBy === orderBy && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  render() {
    return (
      <AppPage title="Stedfortredere" back="..">
        <Table component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableHeadCell id={"beredskapsrolle"} label={"Beredskapsrolle"} orderBy={this.state.orderBy}
                             order={this.state.order} onRequestSort={this.handleRequestSort}/>
              <TableHeadCell id={"stedsfortrederrolle"} label={"Stedfortrederrolle"} orderBy={this.state.orderBy}
                             order={this.state.order} onRequestSort={this.handleRequestSort}/>
              <TableHeadCell id={"stedfortredere"} label={"Stedfortredere"} orderBy={this.state.orderBy}
                             order={this.state.order} onRequestSort={this.handleRequestSort}/>
            </TableRow>
          </TableHead>
          <TableBody component="div">
            {stableSort(roleList
              .filter(role => role.replacementRole !== null), getSorting(this.state.order, this.state.orderBy, deputiesDesc))
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
    )
  }
}

export default Deputies;
