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
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Status from '../../helpers/Status';
import { withStyles } from '@material-ui/core';


const styles = {
  noPad: {
    padding: 0,
  },
  tablePad: {
    display: 'table-cell',
    padding: '4px 56px 4px 24px',
  },
}

const Team = ({ match, classes }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    const competenceTypeList = team.requiredCompetence.map(requiredCompetenceId => competenceTypeById[requiredCompetenceId]);
    return (
      <AppPage title={`Kompetanseoversikt - ${team.name}`}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Medlem</TableCell>
              {competenceTypeList.map(competenceType => (
                <TableCell key={competenceType.id}>{competenceType.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {team.members.map(memberId => {
              const person = personById[memberId];
              return (
                <TableRow hover key={memberId}>
                  <TableCell className={classes.noPad}>
                    <Link className={classes.tablePad} to={`../../people/${memberId}/`}>
                      {person.name}
                    </Link>
                  </TableCell>
                  {competenceTypeList.map(competenceType => (
                    <TableCell key={competenceType.id} className={classes.noPad}>
                      <Link className={classes.tablePad} to={`../../people/${memberId}/`}>
                        <StatusIcon status={person.competence[competenceType.id] || Status.ERROR} />
                      </Link>
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
