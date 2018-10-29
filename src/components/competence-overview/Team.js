import React from 'react';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import { competenceTypeById } from '../../dummy-data/competenceType';
import { getSorting, stableSort, competenceStatusDesc } from "../../helpers/table-sort-helper";
import CompetenceStatus from './CompetenceStatus';
import LinkTableRow from '../shared/LinkTableRow';
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/People';
import { withStyles } from '@material-ui/core';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';

const styles = {
  title: {
    padding: '12px 16px 12px 16px',
  },
  '@media (min-width: 600px)': {
    title: {
      paddingLeft: '24px',
      paddingRight: '24px',
    }
  }
};

const TableHeadCell = ({orderBy, order, tableHeadClicked, id}) => (
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
          {id === "name" ? "Medlem" : competenceTypeById[id].name}
        </TableSortLabel>
      </Tooltip>
    </TableCell>
  );

const Team = ({ teamId, orderBy, order, tableHeadClicked, classes }) => {
  const team = teamById[teamId];
  const teamMembers = [];
  team.members.forEach(memberId => teamMembers.push(personById[memberId]));
  if (team) {
    const competenceTypeList = team.requiredCompetence.map(requiredCompetenceId =>
      competenceTypeById[requiredCompetenceId]);
    return (
      <AppPage title="Kompetanseoversikt" back="../..">
        <EntityInfo Icon={GroupIcon}>
          <Typography variant="headline">{team.name}</Typography>
        </EntityInfo>
        <Typography variant="title" className={classes.title}>Medlemskompetanse</Typography>
        <Table component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableHeadCell orderBy={orderBy} order={order} tableHeadClicked={tableHeadClicked} id={"name"} />
              {competenceTypeList.map(competenceType => (
                <TableHeadCell
                  key={competenceType.id}
                  orderBy={orderBy}
                  order={order}
                  tableHeadClicked={tableHeadClicked}
                  id={competenceType.id}
                />
              ))}
            </TableRow>
          </TableHead>
          <TableBody component="div">
            {stableSort(teamMembers, getSorting(order, orderBy, competenceStatusDesc))
              .map(person => (
                  <LinkTableRow
                    key={person.id}
                    to={`../../people/${person.id}/`}
                  >
                    <TableCell component="div">
                      {person.name}
                    </TableCell>
                    {competenceTypeList.map(competenceType => (
                      <TableCell
                        key={competenceType.id}
                        component="div"
                      >
                        <CompetenceStatus competence={person.competence[competenceType.id]} />
                      </TableCell>
                    ))}
                  </LinkTableRow>
                ))}
          </TableBody>
        </Table>
      </AppPage>
    );
  }
  return (
    <p>Fant ikke noe lag med denne IDen.</p>
  );
};

export default withStyles(styles)(Team);
