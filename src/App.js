import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import ExperienceLog from './components/experience-log/ExperienceLog';
import Training from './components/training/Training';
import ExerciseScenarios from './components/exercise-scenarios/ExerciseScenarios';
import TableTops from './components/table-tops/TableTops';
import Documents from './components/documents/Documents';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import CompetenceOverview from './components/competence-overview/CompetenceOverview';
import Drawings from './components/drawings/Drawings';


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
          <Route path="/exercise-scenarios/" component={ExerciseScenarios} />
          <Route path="/table-tops/" component={TableTops} />
          <Route path="/documents/" component={Documents} />
          <Route path="/emergency-response-organization/" component={EmergencyResponseOrganization} />
          <Route path="/competence-overview/" component={CompetenceOverview} />
          <Route path="/drawings/" component={Drawings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
