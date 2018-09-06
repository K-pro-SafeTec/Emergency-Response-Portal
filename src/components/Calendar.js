import React, { Component } from 'react';
// import ApiCalendar from 'react-google-calendar-api';
// import Calendar from 'react-calendar'
// import Calendar from 'react-calendar/dist/entry.nostyle';
import '../styles/Calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export class EmergencyResponsePortalCalendar extends Component {
  
  dayClicked(value) {
    alert("Day clicked: " + value)
  }
  
  render() {
    return (
      <div className="container">
        {/*<ApiCalendar/>*/}
        <BigCalendar
          events={[]}
        />
      </div>
    )
  }
}
