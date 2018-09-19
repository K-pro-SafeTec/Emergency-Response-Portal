import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusIcon from './StatusIcon';

const PreparednessSummaryItem = ({ name, status, message }) => (
  <ListItem button>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon status={status} />
    </ListItemIcon>
    <ListItemText primary={name} secondary={message} />
  </ListItem>
);

export default ({ teams }) => (
  <List>
    <ListItem>
      <Typography variant="title">Beredskapsorganisasjon</Typography>
    </ListItem>
    {teams.map(({ name, status }) => (
      <PreparednessSummaryItem
        key={name}
        name={name}
        status={status}
      />
    ))}
  </List>
);
