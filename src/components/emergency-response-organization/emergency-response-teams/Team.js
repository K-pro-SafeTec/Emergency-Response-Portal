import React from 'react';
import Paper from '@material-ui/core/Paper';
import Person from "./Person";
import { personById } from "../../../dummy-data/person"

const styles = {
  margin: '1em',
  padding: '1em',
  width: '17em'
};

const Team = (props) => {
  const teamMembers = [];
  props.team.members.forEach(memberId => teamMembers.push(personById[memberId]));
  return(
    <Paper style={styles}>
      <h2>{props.team.name}</h2>
      {teamMembers.map(({ id, name }) => (
        <Person key={id} name={name}/>
      ))}
    </Paper>
  )
};

export default Team;
