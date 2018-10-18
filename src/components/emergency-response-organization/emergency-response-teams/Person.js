import React from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PersonIcon from '@material-ui/icons/Person';

const Person = (person) => {
    return(
      <ListItem>
        <PersonIcon/>
        <ListItemText primary={person.name} />
      </ListItem>
    )
};

export default Person;
