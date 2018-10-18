import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import ExperienceLog from './components/experience-log/ExperienceLog';
import Training from './components/training/Routes';
import Exercises from './components/exercises/ExerciseList';
import TableTops from './components/table-tops/Routes';
import Documents from './components/documents/Documents';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import CompetenceOverview from './components/competence-overview/CompetenceOverview';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/calendar/" component={Calendar} />
          <Route path="/livefeed/" component={Livefeed} />
          <Route path="/experience-log/" component={ExperienceLog} />
          <Route path="/training/" component={Training} />
          <Route path="/exercises/" component={Exercises} />
          <Route path="/table-tops/" component={TableTops} />
          <Route path="/documents/" component={Documents} />
          <Route path="/emergency-response-organization/" component={EmergencyResponseOrganization} />
          <Route path="/competence-overview/" component={CompetenceOverview} />
        </Switch>
      </Router>
    );
  }
}

export default App;
