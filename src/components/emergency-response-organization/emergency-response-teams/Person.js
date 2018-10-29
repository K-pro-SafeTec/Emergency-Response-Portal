import React from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Person = ({ id, name }) => (
  <ListItem button component={Link} to={`/competence-overview/people/${id}/`}>
    <ListItemIcon>
      <PersonIcon/>
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

export default Person;
