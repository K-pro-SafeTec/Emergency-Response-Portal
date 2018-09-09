import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class TypeSelect extends React.Component {
  state = {
    type: '',
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  render() {
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="age-simple">Type</InputLabel>
          <Select
            className="width200"
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: 'type',
              id: 'type',
            }}
          >
            <MenuItem value={"øvelse"}>Øvelse</MenuItem>
            <MenuItem value={"trening"}>Trening</MenuItem>
            <MenuItem value={"table top"}>Table top</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}