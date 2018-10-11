import React from 'react';
import AppPage from '../shared/AppPage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import { teamList } from '../../dummy-data/team';


const Teams = () => (
  <AppPage title="Trening" back="../..">
    <List>
      {teamList.filter(team => team.hasTraining).map(team => (
        <ListItem
          key={team.id}
          button
          component={Link}
          to={`${team.id}/`}
        >
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText>
            {team.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </AppPage>
);

export default Teams;