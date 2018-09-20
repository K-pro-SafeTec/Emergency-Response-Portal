import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusIcon from './StatusIcon';

const ExternalResourceItem = ({ name, status, message }) => (
  <ListItem button>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon status={status} />
    </ListItemIcon>
    <ListItemText primary={name} secondary={message} />
  </ListItem>
);

export default ({ items }) => (
  <List>
    <ListItem>
      <Typography variant="title">Tilgjengelighet</Typography>
    </ListItem>
    {items.map(({ name, status, message }) => (
      <ExternalResourceItem
        key={name}
        name={name}
        status={status}
        message={message}
      />
    ))}
  </List>
);
