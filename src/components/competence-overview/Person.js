import React from 'react';
import { Link } from 'react-router-dom';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Status, { mostSevere } from '../../helpers/Status';
import EntityInfo from '../shared/EntityInfo';
import CompetenceStatus from './CompetenceStatus';
import { competenceTypeById } from '../../dummy-data/competenceType';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TeamItem = ({ team, person }) => (
  <ListItem button component={Link} to={`../../teams/${team.id}/`}>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon
        status={
          team.requiredCompetence
            .map(competenceId => (person.competence[competenceId] && person.competence[competenceId].status) || Status.ERROR)
            .reduce(mostSevere) || Status.ERROR
        }
      />
    </ListItemIcon>
    <ListItemText primary={team.name} />
  </ListItem>
);

const Person = ({ match }) => {
  const person = personById[match.params.personId];
  if (person) {
    return (
      <AppPage title="Kompetanseoversikt" back="../..">
        <EntityInfo Icon={PersonIcon}>
          <Typography variant="headline">{person.name}</Typography>
          <Typography variant="subheading">
            {person.roles}
          </Typography>
        </EntityInfo>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Kompetanse
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(person.competence).map(competenceId => (
              <TableRow key={competenceId}>
                <TableCell>
                  {competenceTypeById[competenceId].name}
                </TableCell>
                <TableCell>
                  <CompetenceStatus competence={person.competence[competenceId]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <List>
          <ListItem>
            <Typography variant="title">Beredskapslag</Typography>
          </ListItem>
          {person.teams.map(teamId => (
            <TeamItem key={teamId} team={teamById[teamId]} person={person} />
          ))}
        </List>
      </AppPage>
    );
  }
  return <p>Fant ikke noen person med denne IDen.</p>
};

export default Person;
