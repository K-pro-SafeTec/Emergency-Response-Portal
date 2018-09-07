import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class ParticipantsSelect extends React.Component {
  state = {
    participants: '',
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  render() {
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="age-simple">Participants</InputLabel>
          <Select
            value={this.state.participants}
            onChange={this.handleChange}
            inputProps={{
              name: 'participants',
              id: 'participants',
            }}
          >
            <MenuItem value={"alle"}>Alle</MenuItem>
            <MenuItem value={"beredksapslag"}>Beredskapslag</MenuItem>
            <MenuItem value={"beredskapsledelse"}>Beredskapsledelse</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}