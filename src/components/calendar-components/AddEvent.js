import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ParticipantsSelect} from './ParticipantsSelect';
import {TypeSelect} from './TypeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getDateFormatYMD, getTimeFormat, isValidParticipants, isValidType} from "../../helpers/calendar-helper";


export class AddEvent extends Component {

  constructor(props) {
    super(props);
    let defaultStart = "09:00";
    let defaultEnd = "10:00";
    if (props.eventToEdit) {
      defaultStart = getTimeFormat(props.eventToEdit.start);
      defaultEnd = getTimeFormat(props.eventToEdit.end);
    }
    this.state = {
      date: getDateFormatYMD(props.date),
      start: defaultStart,
      end: defaultEnd,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const participants = this.state.participants;
    const type = this.state.type;
    const participantsSelected = isValidParticipants(participants);
    const typeSelected = isValidType(type);
    if (!participantsSelected) {
        console.log("not valid participants");
    }
    if (!typeSelected) {
        console.log("not valid type");
    }
    if (participantsSelected && typeSelected) {
        this.props.onSaveButtonClick(this.state.date,
          this.state.start,
          this.state.end,
          participants,
          type)
    }
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="side-display">
        <h1>Legg til ny hendelse</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <TextField name="date" label="Dato" type="date" defaultValue={this.state.date} onChange={this.handleChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
          />
          <TextField name="start" label="Start" type="time" defaultValue={this.state.start} onChange={this.handleChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     inputProps={{
                       step: 300, // 5 min
                     }}
          />
          <TextField name="end" label="Slutt" type="time" defaultValue={this.state.end} onChange={this.handleChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     inputProps={{
                       step: 300, // 5 min
                     }}
          />
          <ParticipantsSelect id="participants" onChange={this.handleChange}/>
          <TypeSelect id="type" onChange={this.handleChange}/>
          <div>
            <Button variant="contained" color="primary" type="submit" id="save-button">
              Lagre
            </Button>
          </div>
        </form>
      </div>
    )
  }
};

AddEvent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onSaveButtonClick: PropTypes.func.isRequired
};