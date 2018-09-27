import React from 'react';
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

export default ({ match }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    const competenceTypeList = team.requiredCompetence.map(requiredCompetenceId => competenceTypeById[requiredCompetenceId]);
    return (
      <AppPage title={`Kompetanseoversikt - ${team.name}`}>
        <Table>
          <TableHead>
            <TableCell>Medlem</TableCell>
            {competenceTypeList.map(competenceType => (
              <TableCell key={competenceType.id}>{competenceType.name}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {team.members.map(memberId => {
              const person = personById[memberId];
              return person ? (
                <TableRow key={memberId}>
                  <TableCell>{person.name}</TableCell>
                  {competenceTypeList.map(competenceType => (
                    <TableCell key={competenceType.id}>
                      <StatusIcon status={person.competence[competenceType.id] || Status.ERROR} />
                    </TableCell>
                  ))}
                </TableRow>
              ) : (
                <TableRow key={memberId}>
                  <TableCell>?</TableCell>
                  <TableCell>Ukjent person</TableCell>
                  {competenceTypeList.map(competenceType => (
                    <TableCell key={competenceType.id}>{competenceType.name}</TableCell>
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
