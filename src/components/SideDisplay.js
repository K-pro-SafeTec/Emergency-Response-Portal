import React, { Component } from 'react';

export class SideDisplay extends Component {
  
  // Takes a list of events and a date as objects.
  // Returns the events that starts on the given date.
  getEvents(events, date) {
    return events.filter(event => {
      return this.equalDates(event.start, date)
    });
  }
  
  // Takes two javascript date objects as arguments and returns true if the objects fall on the same date.
  equalDates(date1, date2) {
    const dayInMonth1 = date1.getDate();
    const dayInMonth2 = date2.getDate();
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const year1 = date1.getYear();
    const year2 = date2.getYear();
    return dayInMonth1 === dayInMonth2 && month1 === month2 && year1 === year2;
  }
  
  render() {
    return(
      <div className="side-display">
        <h1>{JSON.stringify(this.getEvents(this.props.events, this.props.date))}</h1>
      </div>
    )
  }
}