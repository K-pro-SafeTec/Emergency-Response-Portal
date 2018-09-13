import React, { Component } from 'react';
import './App.css';
import { EmergencyResponsePortalCalendar } from './components/calendar-components/Calendar';

class App extends Component {
  render() {
      return (
          <div>
              <EmergencyResponsePortalCalendar/>
          </div>
      );
  }
}

export default App;
