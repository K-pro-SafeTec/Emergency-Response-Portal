import React, {Component} from 'react';
import {DisplayEvent} from './DisplayEvent';
import Button from '@material-ui/core/Button';

export class SideDisplay extends Component {
  
  render() {
    const events = getEvents(this.props.events, this.props.date)
    return (
      <div className="side-display">
        <h1>{getDateFormat(this.props.date)}</h1>
        <h2>Det er {events.length > 0 ? events.length + " " : "ingen "}
          hendelse{(events.length > 1 || events.length === 0) && "r"} denne dagen.</h2>
        <div>
          {events.map((e, i) =>
            <DisplayEvent key={i} event={e} onChangeEvent={this.props.onChangeEvent}
                          onDeleteButtonClick={this.props.onDeleteButtonClick}
                          onReviewButtonClick={this.props.onReviewButtonClick}/>
          )}
        </div>
        <div onClick={() => this.props.onAddEventButtonClick()}>
          <Button variant="contained" color="primary">
            Legg til ny hendelse
          </Button>
        </div>
      </div>
    )
  }
}

// Takes a list of events and a date as objects.
// Returns the events that starts on the given date.
function getEvents(events, date) {
  return events.filter(event => {
    return equalDates(event.start, date)
  });
}

// Takes two javascript date objects as arguments and returns true if the objects fall on the same date.
function equalDates(date1, date2) {
  const dayInMonth1 = date1.getDate();
  const dayInMonth2 = date2.getDate();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const year1 = date1.getYear();
  const year2 = date2.getYear();
  return dayInMonth1 === dayInMonth2 && month1 === month2 && year1 === year2;
}

// Takes in a javascript date object and returns a nice string.
function getDateFormat(date) {
  const weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
  const months = ["januar", "februar", "mars", "april", "mai", "juni", "july", "august", "september", "oktober",
    "november", "desember"]
  const weekday = weekdays[date.getDay()]
  const month = months[date.getMonth()]
  return weekday + " " + date.getDate() + ". " + month + " " + date.getFullYear()
}