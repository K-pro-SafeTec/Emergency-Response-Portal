import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class DisplayEvent extends Component {
  
  render() {
    const event = this.props.event;
    return (
      <Paper className="paper-small">
        <Typography variant="headline" component="h2">
          {event.title}
        </Typography>
        <Typography component="p">
          {getTimeFormat(event.start)}-{getTimeFormat(event.end)}
        </Typography>
        <Typography component="p">
          Deltakere: {event.participants}
        </Typography>
        <div>
          <Button style={{marginRight: '5px'}} variant="outlined" color="primary">
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