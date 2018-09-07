import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export class DisplayEvent extends Component {
  
  render() {
    const event = this.props.event;
    return (
      <Paper className="paper">
        <h1>{event.type}</h1>
        <h2>{getTimeFormat(event.start)}-{getTimeFormat(event.end)}</h2>
        <h2>Deltakere: {event.participants}</h2>
        <div>
          <Button variant="outlined" color="primary">
            Endre
          </Button>
          <Button variant="outlined" color="secondary">
            Slett
          </Button>
        </div>
      </Paper>
    )
  }
}



// Takes javascript date object and returns nice time
function getTimeFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
}