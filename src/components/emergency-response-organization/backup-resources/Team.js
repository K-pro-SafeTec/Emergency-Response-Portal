import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Person from "./Person";
import { withStyles } from '@material-ui/core'

const styles = {
  paper: {
    margin: '1em',
    flex: '1 0 20em',
  },
};

const Team = ({ classes, name, backups }) => {
  return(
    <Paper className={classes.paper}>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="title">{name}</Typography>
          </ListItemText>
        </ListItem>
        {backups.map(({ id, name, status }) => (
          <Person key={id} name={name} status={status}/>
        ))}
      </List>
    </Paper>
  )
};

export default withStyles(styles)(Team);
