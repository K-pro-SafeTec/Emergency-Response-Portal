import React from 'react';
import PropTypes from 'prop-types';
import {DisplayEvent} from './DisplayEvent';
import Button from '@material-ui/core/Button';
import {getEvents, getDateFormat} from './../../helpers/calendar-helper';

export const SideDisplay = (props) => {
  const events = getEvents(props.events, props.date)
  return (
    <div className="side-display">
      <h1>{getDateFormat(props.date)}</h1>
      <h2>Det er {events.length > 0 ? events.length + " " : "ingen "}
        hendelse{(events.length > 1 || events.length === 0) && "r"} denne dagen.</h2>
      <div>
        {events.map((e, i) =>
          <DisplayEvent key={i} event={e} onChangeEvent={props.onChangeEvent}
                        onDeleteButtonClick={props.onDeleteButtonClick}
                        onReviewButtonClick={props.onReviewButtonClick}/>
        )}
      </div>
      <Button variant="contained" color="primary" onClick={() => props.onAddEventButtonClick()}>
        Legg til ny hendelse
      </Button>
    </div>
  )
}

SideDisplay.propTypes = {
  events: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onAddEventButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  onReviewButtonClick: PropTypes.func.isRequired
};