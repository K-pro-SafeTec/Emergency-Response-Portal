import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppPage from './AppPage';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import BackupResources from './components/emergency-response-organization/backup-resources/BackupResources';
import CompatibilityMatrix from './components/emergency-response-organization/compatibility-matrix/CompatibilityMatrix';
import CompetenceStatus from './components/emergency-response-organization/competence-status/CompetenceStatus';
import Deputies from './components/emergency-response-organization/deputies/Deputies';
import EmergencyResponseTeams from './components/emergency-response-organization/emergency-response-teams/EmergencyResponseTeams';


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
          <Route exact path="/calendar/" component={appPageComponent('Kalender', Calendar)} />
          <Route exact path="/livefeed/" component={appPageComponent('Status beredskap - live feed', Livefeed)} />
          <Route exact path="/emergency-response-organization/" component={appPageComponent('Beredskapsorganisasjon', EmergencyResponseOrganization)} />
          <Route exact path="/emergency-response-organization/backup-resources/" component={appPageComponent('Reserveressurser', BackupResources)} />
          <Route exact path="/emergency-response-organization/compatibility-matrix/" component={appPageComponent('Forenlighetsmatrise', CompatibilityMatrix)} />
          <Route exact path="/emergency-response-organization/competence-status/" component={appPageComponent('Kompetansestatus', CompetenceStatus)} />
          <Route exact path="/emergency-response-organization/deputies/" component={appPageComponent('Stedfortredere', Deputies)} />
          <Route exact path="/emergency-response-organization/emergency-response-teams/" component={appPageComponent('Beredskapslag', EmergencyResponseTeams)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
