import React from 'react';
import { Link } from 'react-router-dom';
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
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Status from '../../helpers/Status';
import EntityInfo from './EntityInfo';
import { withStyles } from '@material-ui/core';


const styles = {
  noUnderline: {
    textDecoration: 'none',
  },
  title: {
    padding: '12px 16px 12px 16px',
  },
  '@media (min-width: 600px)': {
    title: {
      paddingLeft: '24px',
      paddingRight: '24px',
    }
  }
}

const Team = ({ match, classes }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    const competenceTypeList = team.requiredCompetence.map(requiredCompetenceId => competenceTypeById[requiredCompetenceId]);
    return (
      <AppPage title={`Kompetanseoversikt - ${team.name}`} back="../..">
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
            {team.members.map(memberId => {
              const person = personById[memberId];
              return (
                <TableRow
                  key={memberId}
                  hover
                  component={Link}
                  to={`../../people/${memberId}/`}
                  className={classes.noUnderline}
                >
                  <TableCell component="div">
                    {person.name}
                  </TableCell>
                  {competenceTypeList.map(competenceType => (
                    <TableCell
                      key={competenceType.id}
                      component="div"
                    >
                      <StatusIcon status={person.competence[competenceType.id] || Status.ERROR} />
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
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
