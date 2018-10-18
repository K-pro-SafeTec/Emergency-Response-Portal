import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getTimeFormat} from './../../helpers/calendar-helper';

const DisplayEvent = (props) => {
  const event = props.event;
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
      <Button style={{marginRight: '5px'}} variant="outlined" color="primary" onClick={() => props.onChangeEvent(event.id)}>
        Endre
      </Button>
      <Button href="https://drive.google.com/file/d/1SIy2luM50jY-_od88vfXg5k7l0oT8C0s/view?usp=sharing" target="_blank"
              style={{marginRight: '5px'}} variant="outlined" color="primary"
              onClick={() => props.onReviewButtonClick(event.id)}>
        Se debrief
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => props.onDeleteButtonClick(event.id)}>
        Slett
      </Button>
    </Paper>
  )
};

DisplayEvent.propTypes = {
  event: PropTypes.object.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onReviewButtonClick: PropTypes.func.isRequired
};

export default DisplayEvent;
