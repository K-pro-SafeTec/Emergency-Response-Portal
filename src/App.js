import React, { Component } from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/Seasick.css';
import MainMenu from './components/main-menu/MainMenu';
import Calendar from './components/calendar/Calendar';
import Livefeed from './components/livefeed/Livefeed';
import ExperienceLog from './components/experience-log/ExperienceLog';
import Training from './components/training/Routes';
import Exercises from './components/exercises/Routes';
import TableTops from './components/table-tops/Routes';
import Documents from './components/documents/Documents';
import EmergencyResponseOrganization from './components/emergency-response-organization/EmergencyResponseOrganization';
import CompetenceOverview from './components/competence-overview/CompetenceOverview';
import UnknownPage from './components/shared/UnknownPage';
import Konami from 'konami';


class App extends Component {
  state = {
    seasick: false,
  }

  componentDidMount() {
    this.konami = new Konami(() => {
      this.setState({ seasick: true })
    });
  }

  render() {
    const { seasick } = this.state;
    return (
      <div className={seasick ? 'seasick' : undefined}>
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
            <Route component={UnknownPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
