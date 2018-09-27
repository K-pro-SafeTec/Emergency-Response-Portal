import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import ExperienceLog from './components/experience-log/ExperienceLog';
import Excercises from './components/exercise/Exercise';
import ExcerciseScenarios from './components/exercise-scenarios/ExerciseScenarios';
import EmergencyResponseDocuments from './components/emergency-response-documents/EmergencyResponseDocuments';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import CompetenceOverview from './components/competence-overview/CompetenceOverview';
import EmergencyResponseDrawings from './components/emergency-response-drawings/EmergencyResponseDrawings';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/calendar/" component={Calendar} />
          <Route path="/livefeed/" component={Livefeed} />
          <Route path="/experience-log/" component={ExperienceLog} />
          <Route path="/excercises/" component={Excercises} />
          <Route path="/exercise-scenarios/" component={ExcerciseScenarios} />
          <Route path="/emergency-response-documents/" component={EmergencyResponseDocuments} />
          <Route path="/emergency-response-organization/" component={EmergencyResponseOrganization} />
          <Route path="/competence-overview/" component={CompetenceOverview} />
          <Route path="/emergency-response-drawings/" component={EmergencyResponseDrawings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
