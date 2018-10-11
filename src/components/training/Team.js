import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinkTableRow from '../shared/LinkTableRow';
import AppPage from '../shared/AppPage';
import { trainingScenarioById } from '../../dummy-data/trainingScenario';
import { trainingInstanceList } from '../../dummy-data/trainingInstance';
import { teamById } from '../../dummy-data/team';


const Team = ({ match }) => {
  const team = teamById[match.params.teamId];
  if (team) {
    return (
      <AppPage title="Trening" back="..">
        <Table component="div">
          <TableHead component="div">
            <TableRow component="div">
              <TableCell component="div">Dato</TableCell>
              <TableCell component="div">ID</TableCell>
              <TableCell component="div">Tema</TableCell>
            </TableRow>
          </TableHead>
          <TableBody component="div">
            {trainingInstanceList
              .map(instance => [trainingScenarioById[instance.scenario], instance])
              .filter(([scenario, _]) => scenario.participatingTeams.indexOf(team.id) !== -1)
              .map(([scenario, instance]) => (
                <LinkTableRow
                  key={`${instance.scenario}/${instance.date}`}
                  to={`../../scenarios/${instance.scenario}/${instance.date}/`}
                >
                  <TableCell component="div">
                    {instance.date}
                  </TableCell>
                  <TableCell component="div">
                    {`${instance.scenario}/${instance.date}`}
                  </TableCell>
                  <TableCell component="div">
                    {scenario.theme}
                  </TableCell>
                </LinkTableRow>
              ))
            }
          </TableBody>
        </Table>
      </AppPage>
    );
  }
  return (
    <AppPage title="Trening" back="..">
      <Typography>Fant ikke noe lag med denne IDen</Typography>
    </AppPage>
  )
};

export default Team;
