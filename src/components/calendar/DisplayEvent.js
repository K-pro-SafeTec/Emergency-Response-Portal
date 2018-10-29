import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getTimeFormat} from './../../helpers/calendar-helper';

const DisplayEvent = ({ event, onChangeEvent, onReviewButtonClick, onDeleteButtonClick }) => {
  return (
    <Paper className="paper-small">
      <Typography variant="headline">
        {event.title}
      </Typography>
      <Typography component="p">
        {getTimeFormat(event.start)}-{getTimeFormat(event.end)}
      </Typography>
      <Typography component="p">
        Deltakere: {event.participants}
      </Typography>
      {event.href && (
        <Button style={{marginRight: '5px'}} variant="outlined" color="primary" component={Link} to={event.href}>
          Vis
        </Button>
      )}
      {event.debrief && (
        <Button
          style={{marginRight: '5px'}}
          variant="outlined"
          color="primary"
          component={Link}
          to={event.debrief}
        >
          Debrief
        </Button>
      )}
      <Button style={{marginRight: '5px'}} variant="outlined" color="primary" onClick={() => onChangeEvent(event.id)}>
        Endre
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => onDeleteButtonClick(event.id)}>
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
