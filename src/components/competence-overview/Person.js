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
import { withStyles } from '@material-ui/core';

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

const styles = {
  personInfoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '1em',
  },
  personAvatar: {
    height: '4em',
    flex: '0 0 4em',
  },
  personInfo: {
    flex: '1 1 24em',
    padding: '1em',
  },
};

const Person = ({ classes, match }) => {
  const person = personById[match.params.personId];
  if (person) {
    return (
      <AppPage title={`Kompetanseoversikt - ${person.name}`} back="../..">
        <div className={classes.personInfoContainer}>
          <PersonIcon className={classes.personAvatar} />
          <div className={classes.personInfo}>
            <Typography variant="headline">{person.name}</Typography>
            <Typography variant="subheading">
              {person.roles.map(role => roleById[role].name).join(", ")}
            </Typography>
          </div>
        </div>
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

export default withStyles(styles)(Person);
