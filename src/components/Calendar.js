import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/Calendar.css'


moment.locale('en-gb');
BigCalendar.momentLocalizer(moment);

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
