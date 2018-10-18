import React from 'react';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WbCloudy from '@material-ui/icons/WbCloudy';
import StatusIcon from '../shared/StatusIcon';
import Status from '../../helpers/Status';
import Divider from '@material-ui/core/Divider';

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
      <ListItemIcon style={{ fontSize: '40px' }}>
        <WbCloudy />
      </ListItemIcon>
      <ListItemText primary="14&deg;C" secondary="Overskyet" />
    </ListItem>
    <Divider />
    {items.map(({ name, status, message }) => (
      <ExternalResourceItem
        key={name}
        name={name}
        status={status}
        message={message}
      />
    ))}
    <Divider />
    <ListItem button>
      <ListItemIcon style={{ fontSize: '40px' }}>
        <StatusIcon status={Status.OK} />
      </ListItemIcon>
      <ListItemText>
        Beredskapsstatus (2 dager)
      </ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ fontSize: '40px' }}>
        <StatusIcon status={Status.WARNING} />
      </ListItemIcon>
      <ListItemText>
        Beredskapsstatus (4 dager)
      </ListItemText>
    </ListItem>
  </List>
);
