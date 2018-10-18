import React from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PersonIcon from '@material-ui/icons/Person';

const Person = ({name}) => (
  <ListItem>
    <PersonIcon/>
    <ListItemText primary={name} />
  </ListItem>
);

export default Person;
