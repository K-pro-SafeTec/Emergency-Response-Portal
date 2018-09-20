import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={MainMenu} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/livefeed" component={Livefeed} />
          <Route path="/emergency-response-organization" component={EmergencyResponseOrganization} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
