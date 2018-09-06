import React, { Component } from 'react';
// import ApiCalendar from 'react-google-calendar-api';
import Calendar from 'react-calendar'
// import Calendar from 'react-calendar/dist/entry.nostyle';
import '../styles/Calendar.css'

export class EmergencyResponsePortalCalendar extends Component {
  
  dayClicked() {
    alert("Day clicked")
  }
  
  render() {
    return (
      <div className="container">
        {/*<ApiCalendar/>*/}
        <Calendar onClickDay={() => this.dayClicked()}/>
      </div>
    )
  }
}
