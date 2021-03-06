import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ParticipantsSelect extends React.Component {
  state = {
    participants: '',
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onChange(event)
  };
  
  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="age-simple">Participants</InputLabel>
        <Select
          value={this.state.participants}
          onChange={this.handleChange}
          inputProps={{
            name: 'participants',
          }}
        >
          <MenuItem value={"alle"}>Alle</MenuItem>
          <MenuItem value={"beredskapslag"}>Beredskapslag</MenuItem>
          <MenuItem value={"beredskapsledelse"}>Beredskapsledelse</MenuItem>
        </Select>
      </FormControl>
    );
  }
}
