import React from 'react';
import Paper from '@material-ui/core/Paper';
import Person from "./Person";

const styles = {
  margin: '1em',
  padding: '1em',
  width: '15em'
};

const Team = (props) => {
  return(
    <Paper style={styles}>
      <h2>{props.name}</h2>
      {props.backups.map(({ id, name, status }) => (
        <Person key={id} name={name} status={status}/>
      ))}
    </Paper>
  )
};

export default Team;
