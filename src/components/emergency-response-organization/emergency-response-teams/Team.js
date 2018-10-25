import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Person from "./Person";
import { personById } from "../../../dummy-data/person"
import { withStyles } from '@material-ui/core';

const styles = {
  paper: {
    margin: '1em',
    flex: '1 0 20em',
  },
};

const Team = ({ classes, team }) => {
  const teamMembers = team.members.map(memberId => personById[memberId]);
  return(
    <Paper className={classes.paper}>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="title">{team.name}</Typography>
          </ListItemText>
        </ListItem>
        {teamMembers.map(member => (
          <Person key={member.id} name={member.name}/>
        ))}
      </List>
    </Paper>
  )
};

export default withStyles(styles)(Team);
