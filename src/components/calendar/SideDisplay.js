import React from 'react';
import PropTypes from 'prop-types';
import DisplayEvent from './DisplayEvent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getEventsOnDate, getDateFormat, sortEvents} from './../../helpers/calendar-helper';

const SideDisplay = (props) => {
  let events = getEventsOnDate(props.events, props.date);
  events = sortEvents(events);
  return (
    <div>
      <Typography variant="headline">{getDateFormat(props.date)}</Typography>
      {events.length > 0 ? (
        <div style={{ margin: '20px 0'}}>
          {events.map((e, i) => (
            <DisplayEvent
              key={i}
              event={e}
              onChangeEvent={props.onChangeEvent}
              onDeleteButtonClick={props.onDeleteButtonClick}
              onReviewButtonClick={props.onReviewButtonClick}
            />
          ))}
        </div>
      ) : (
        <Typography variant="body1" paragraph>Det er ingen hendelser denne dagen.</Typography>
      )}
      <Button variant="contained" color="primary" onClick={() => props.onAddEventButtonClick()}>
        Legg til ny hendelse
      </Button>
    </div>
  )
};

SideDisplay.propTypes = {
  events: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onAddEventButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  onReviewButtonClick: PropTypes.func.isRequired
};

export default SideDisplay
