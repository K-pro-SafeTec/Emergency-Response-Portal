import React from 'react';
import { teamById } from '../../dummy-data/team';
import { personById } from '../../dummy-data/person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StatusIcon from '../shared/StatusIcon';

export default ({ match }) => {
  const team = teamById[match.params.teamId];
  return team ? (
    <List>
      {team.members.map(memberId => {
        const person = personById[memberId];
        return person ? (
          <ListItem key={memberId}>
            <ListItemIcon style={{ fontSize: '40px' }}>
              <StatusIcon status={team.status} />
            </ListItemIcon>
            <ListItemText primary={person.name} />
          </ListItem>
        ) : (
          <ListItem key={memberId}>
            <ListItemText>Ukjent person</ListItemText>
          </ListItem>
        );
      })}
    </List>
  ) : (
    <p>Fant ikke noe lag med denne IDen.</p>
  );
};
