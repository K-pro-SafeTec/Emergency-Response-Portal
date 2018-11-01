import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import TeamContainer from './TeamContainer';
import Person from './Person';
import { teamList, teamById } from '../../dummy-data/team';
import UnknownPage from '../shared/UnknownPage';

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
          {teamList.filter(team => team.id !== 7 && team.id !==9).map(team => (
            <TeamItem key={team.id} team={team} />
          ))}
        </List>
      </AppPage>
    </Route>
    <Route path={`${match.url}/teams/:teamId/`} component={TeamContainer} />
    <Route path={`${match.url}/people/:personId/`} component={Person} />
    <Route component={UnknownPage} />
  </Switch>
);
