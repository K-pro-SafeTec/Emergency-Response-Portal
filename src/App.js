import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import ExperienceLog from './components/experience-log/experienceLog.js';
import Excercises from './components/exercise/exercise.js';
import ExcerciseScenarios from './components/exercise-scenarios/exerciseScenarios.js';
import EmergencyResponseDocuments from './components/emergency-response-documents/emergencyResponseDocuments.js';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import CompetanceOverview from './components/competance-overview/competanceOverview';
import EmergencyResponseDrawings from './components/emergency-response-drawings/emergencyResponseDrawings';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/calendar/" component={Calendar} />
          <Route path="/livefeed/" component={Livefeed} />
          <Route path="/experience-log" component={ExperienceLog} />
          <Route path="/excercises" component={Excercises} />
          <Route path="/exercise-scenarios" component={ExcerciseScenarios} />
          <Route path="/emergency-response-documents" component={EmergencyResponseDocuments} />
          <Route path="/emergency-response-organization" component={EmergencyResponseOrganization} />
          <Route path="/competance-overview" component={CompetanceOverview} />
          <Route path="/emergency-response-drawings" component={EmergencyResponseDrawings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
