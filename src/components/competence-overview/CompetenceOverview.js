import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import Team from './Team';
import Person from './Person';
import { teamList } from '../../dummy-data/team';

const TeamItem = ({ team }) => (
  <ListItem button component={Link} to={`teams/${team.id}/`}>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon status={team.status} />
    </ListItemIcon>
    <ListItemText primary={team.name} />
  </ListItem>
);

export default ({ match }) => (
  <Switch>
    <Route exact path={match.path}>
      <AppPage title="Kompetanseoversikt" back="..">
        <List>
          <ListItem>
            <Typography variant="title">Beredskapslag</Typography>
          </ListItem>
          {teamList.map(team => (
            <TeamItem key={team.id} team={team} />
          ))}
        </List>
      </AppPage>
    </Route>
    <Route path={`${match.url}/teams/:teamId/`} component={Team} />
    <Route path={`${match.url}/people/:personId/`} component={Person} />
  </Switch>
);
