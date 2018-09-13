import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { EmergencyResponsePortalCalendar as Calendar } from './components/calendar-components/Calendar';

const Nav = () => (
  <ul>
    <li>
      <Link to="/calendar">Calendar</Link>
    </li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Nav} />
          <Route path="/calendar" component={Calendar} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
