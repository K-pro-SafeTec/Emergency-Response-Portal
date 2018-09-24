import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StatusIcon from '../shared/StatusIcon';
import AppPage from '../shared/AppPage';
import { teamList } from '../../dummy-data/team';

const TeamItem = ({ team }) => (
  <ListItem button>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon status={team.status} />
    </ListItemIcon>
    <ListItemText primary={team.name} />
  </ListItem>
);

export default () => (
  <AppPage title="Kompetanseoversikt">
    <List>
      {teamList.map(team => (
        <TeamItem key={team.id} team={team} />
      ))}
    </List>
  </AppPage>
);
