import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default ({ items }) => (
  <List>
    {items.map(({ id, message }) => (
      <ListItem key={id}>{message}</ListItem>
    ))}
  </List>
);
