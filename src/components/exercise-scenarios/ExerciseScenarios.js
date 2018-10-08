import React from 'react';
import AppPage from "../shared/AppPage";
import scenarios from "./../../dummy-data/exercise-scenarios"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";

export default class ExerciseScenarios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortingCategory: ''
    }
  }

  handleChange = event => {
    this.setState({ sortingCategory: event.target.value });
  };

  render() {
    return (
      <AppPage title="Øvelsesscenarioer" back="..">
        <div style={{display: 'flex'}}>
          <div style={{flex: '4'}}/>
          <div style={{flex: '1', marginRight: '1em', marginTop: '1em'}}>
            <FormControl style={{width: '100%'}}>
              <InputLabel>Sortér etter</InputLabel>
              <Select
                value={this.state.sortingCategory}
                onChange={this.handleChange}
              >
                <MenuItem value={"week"}>Uke</MenuItem>
                <MenuItem value={"type"}>Type</MenuItem>
                <MenuItem value={"dfu"}>DFU</MenuItem>
                <MenuItem value={"scenario"}>Scenario</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
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
                .sort((a, b) => (a[this.state.sortingCategory] > b[this.state.sortingCategory] ? 1 : 0))
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
