import React from 'react';
import StatusIcon from '../../shared/StatusIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Person = ({ status, name }) => (
  <ListItem>
    <ListItemIcon>
      <StatusIcon status={status} />
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body1">{name}</Typography>
    </ListItemText>
  </ListItem>
);

export default Person;
