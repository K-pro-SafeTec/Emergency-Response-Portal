import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusIcon from '../shared/StatusIcon';
import { Link } from 'react-router-dom';

const PreparednessSummaryItem = ({ id, name, status, message }) => (
  <ListItem button component={Link} to={`/competence-overview/teams/${id}/`}>
    <ListItemIcon style={{ fontSize: '40px' }}>
      <StatusIcon status={status} />
    </ListItemIcon>
    <ListItemText primary={name} secondary={message} />
  </ListItem>
);

export default ({ teams }) => (
  <List>
    <ListItem component={Link} to="/emergency-response-organization/">
      <Typography variant="title">Beredskapsorganisasjon</Typography>
    </ListItem>
    {teams.map(({ id, name, status }) => (
      <PreparednessSummaryItem
        key={id}
        id={id}
        name={name}
        status={status}
      />
    ))}
  </List>
);
