import React from 'react';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";
import AppPage from '../shared/AppPage';
import EntityInfo from '../shared/EntityInfo';
import IconTableTop from '../../icons/main-menu/tableTops.svg';
import { tableTopScenarioById } from '../../dummy-data/tableTopScenario';
import { getTableTopInstanceByKey } from '../../dummy-data/tableTopInstance';
import TextField from '@material-ui/core/TextField';


const Debrief = ({ match }) => {
  const instance = getTableTopInstanceByKey(match.params.scenarioId, match.params.date);
  if (instance) {
    const scenario = tableTopScenarioById[match.params.scenarioId];
    return (
      <AppPage title="Debrief">
        <Paper style={{margin: '1em', padding: '1em'}}>
          <EntityInfo Icon={(props) => <img src={IconTableTop} alt="Table Top" {...props} />}>
            <Typography variant="headline">DFU {scenario.dfuNr}</Typography>
            <Typography variant="subheading">{scenario.dfuTitle}</Typography>
          </EntityInfo>
          {scenario.debrief.length > 0 && (
            <React.Fragment>
              <Typography variant="title">Oppsummering:</Typography>
              {scenario.debrief.map((debrief, key) => (
                <TextField key={key} label={debrief} margin="normal" multiline fullWidth />
              ))}
            </React.Fragment>
          )}
          <Button variant="contained" color="primary" component={Link} to="..">Fullfør</Button>
        </Paper>
      </AppPage>
    );
  }
  return (
    <AppPage title="Table tops" back="..">
      <Typography>Fant ikke table top</Typography>
    </AppPage>
  )
};

export default Debrief;
