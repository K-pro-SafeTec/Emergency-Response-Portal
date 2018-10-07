import React from 'react';
import { Link } from 'react-router-dom';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Status, { mostSevere } from '../../helpers/Status';

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

export default ({ match }) => {
  const person = personById[match.params.personId];
  if (person) {
    return (
      <AppPage title={`Kompetanseoversikt - ${person.name}`} back="../..">
        <List>
          {person.teams.map(teamId => (
            <TeamItem key={teamId} team={teamById[teamId]} person={person} />
          ))}
        </List>
      </AppPage>
    );
  }
  return <p>Fant ikke noen person med denne IDen.</p>
};
