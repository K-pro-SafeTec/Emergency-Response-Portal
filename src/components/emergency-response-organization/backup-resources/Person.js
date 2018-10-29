import React from 'react';
import StatusIcon from '../../shared/StatusIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Person = ({ status, name }) => (
  <ListItem>
    <ListItemIcon>
      <StatusIcon status={status} />
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

export default Person;
