import React from 'react';
import NavMenu from '../shared/NavMenu';
import {Route, Switch} from "react-router-dom";
import AppPage from "../shared/AppPage";
import NavMenuItem from "../shared/NavMenuItem";
import IconHierarchy from "../../icons/hierarchy.svg";
import LessonsLearned from "./lessons-learned/LessonsLearned"

export default ({ match }) => (
  <Switch>
    <Route exact path={match.path}>
      <AppPage title="Erfaringslogg">
        <NavMenu>
          <NavMenuItem name="Lessons learned" icon={IconHierarchy} to="lessons-learned/" />
        </NavMenu>
      </AppPage>
    </Route>
    <Route path={`${match.path}lessons-learned/`} component={LessonsLearned} />
  </Switch>
);
