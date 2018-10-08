import React from 'react';
import { Link } from 'react-router-dom';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import { roleById } from '../../dummy-data/role';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Status, { mostSevere } from '../../helpers/Status';
import EntityInfo from './EntityInfo';

const TeamItem = ({ team, person }) => (
  <ListItem button component={Link} to={`../../teams/${team.id}/`}>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon
        status={
          team.requiredCompetence
            .map(competenceId => person.competence[competenceId] || Status.ERROR)
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
      <AppPage title={`Kompetanseoversikt - ${person.name}`} back="../..">
        <EntityInfo Icon={PersonIcon}>
          <Typography variant="headline">{person.name}</Typography>
          <Typography variant="subheading">
            {person.roles.map(role => roleById[role].name).join(", ")}
          </Typography>
        </EntityInfo>
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
