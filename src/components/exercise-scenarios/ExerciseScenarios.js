import React from 'react';
import AppPage from "../shared/AppPage";
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const scenarios = [
  {
    id: 0,
    week: 2,
    type: 'Øvelse',
    dfu: 4,
    scenario: 'Fartøy på kollisjonskurs'
  },
  {
    id: 1,
    week: 3,
    type: 'Table top',
    dfu: 15,
    scenario: 'Ekstremvær over design-/operasjonskriterier'
  },
  {
    id: 2,
    week: 8,
    type: 'Øvelse',
    dfu: 11,
    scenario: 'Alvorlig syk/skadet person'
  },
  {
    id: 3,
    week: 9,
    type: 'Table top',
    dfu: 7,
    scenario: 'Helikopterulykke i sjø'
  },
  {
    id: 4,
    week: 14,
    type: 'Øvelse',
    dfu: 10,
    scenario: 'Mann over bord'
  },
  {
    id: 5,
    week: 15,
    type: 'Table top',
    dfu: '12',
    scenario: 'Sikringstrussel/terror'
  },
  {
    id: 6,
    week: 20,
    type: 'Øvelse',
    dfu: 9,
    scenario: 'Brann i boligkvarter'
  },
  {
    id: 7,
    week: 21,
    type: 'Table top',
    dfu: 14,
    scenario: 'Strukturhendelse'
  }
];


export default class ExerciseScenarios extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      sortingCategory: 'week'
    }
  }

  handleChange = event => {
    this.setState({ sortingCategory: event.target.value });
  };

  render() {
    return (
      <AppPage title="Øvelsesscenarioer" back="..">
        <Select
          value="HEi"
          onChange={this.handleChange}
          inputProps={{
            name: 'participants',
          }}
          style={{width: '200px'}}
          name="ja"
        >
          <MenuItem value={"week"}>Uke</MenuItem>
          <MenuItem value={"type"}>Type</MenuItem>
          <MenuItem value={"dfu"}>DFU</MenuItem>
          <MenuItem value={"scenario"}>Scenario</MenuItem>
        </Select>
        <Paper style={{margin: '1em'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Uke</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>DFU</TableCell>
                <TableCell>Scenario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[].concat(scenarios)
                .sort((a, b) => a.dfu > b.dfu)
                .map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.week}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.dfu}</TableCell>
                    <TableCell>{row.scenario}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </AppPage>
    )
  }
}