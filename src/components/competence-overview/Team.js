import React from 'react';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import { competenceTypeById } from '../../dummy-data/competenceType';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/People';
import AppPage from '../shared/AppPage';
import EntityInfo from './EntityInfo';
import { withStyles } from '@material-ui/core';
import CompetenceStatus from './CompetenceStatus';
import LinkTableRow from '../shared/LinkTableRow';
import {getSorting, stableSort} from "../../helpers/table-sort-helper";

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

const Team = ({ teamId, orderBy, order, classes }) => {
  const team = teamById[teamId];
  const teamMembers = [];
  team.members.forEach(memberId => teamMembers.push(personById[memberId]));
  if (team) {
    const competenceTypeList = team.requiredCompetence.map(requiredCompetenceId => competenceTypeById[requiredCompetenceId]);
    return (
      <AppPage title="Kompetanseoversikt" back="../..">
        <EntityInfo Icon={GroupIcon}>
          <Typography variant="headline">{team.name}</Typography>
          <Typography variant="subheading">Noe mer info her?</Typography>
        </EntityInfo>
        <Typography variant="title" className={classes.title}>Medlemskompetanse</Typography>
        <Table component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableCell component="div">
                Medlem
              </TableCell>
              {competenceTypeList.map(competenceType => (
                <TableCell
                  key={competenceType.id}
                  component="div"
                >
                  {competenceType.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody component="div">
            {stableSort(teamMembers, getSorting(order, orderBy))
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
                ))
            }
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
