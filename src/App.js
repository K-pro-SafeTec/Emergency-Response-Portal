import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppPage from './AppPage';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';


function appPageComponent(title, Component) {
  return () => (
    <AppPage title={title} Component={Component} />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={appPageComponent('Safetec Beredskapsportal', MainMenu)} />
          <Route path="/calendar" component={appPageComponent('Kalender', Calendar)} />
          <Route path="/livefeed" component={appPageComponent('Status beredskap - live feed', Livefeed)} />
          <Route path="/emergency-response-organization" component={appPageComponent('Beredskapsorganisasjon', EmergencyResponseOrganization)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
