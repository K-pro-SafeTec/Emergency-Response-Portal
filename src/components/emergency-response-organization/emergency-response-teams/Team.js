import React from 'react';
import Paper from '@material-ui/core/Paper';
import Person from "./Person";
import { personById } from "../../../dummy-data/person"

const styles = {
  margin: '1em',
  padding: '1em',
  width: '17em'
};

const Team = ({team}) => {
  const teamMembers = team.members.map(memberId => personById[memberId]);
  return(
    <Paper style={styles}>
      <h2>{team.name}</h2>
      {teamMembers.map(member => (
        <Person key={member.id} name={member.name}/>
      ))}
    </Paper>
  )
};

export default Team;
