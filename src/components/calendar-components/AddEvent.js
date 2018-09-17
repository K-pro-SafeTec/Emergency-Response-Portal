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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleParticipantChange = this.handleParticipantChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
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

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    })
  }

  handleStartChange(event) {
    this.setState({
      start: event.target.value
    })
  }

  handleEndChange(event) {
    this.setState({
      end: event.target.value
    })
  }

  handleParticipantChange(event) {
    this.setState({
      participants: event.target.value
    })
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    })
  }

  render() {
    return (
      <div className="side-display">
        <h1>Legg til ny hendelse</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <TextField id="date" label="Dato" type="date" defaultValue={this.state.date} onChange={this.handleDateChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
          />
          <TextField id="start" label="Start" type="time" defaultValue={this.state.start} onChange={this.handleStartChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     inputProps={{
                       step: 300, // 5 min
                     }}
          />
          <TextField id="end" label="Slutt" type="time" defaultValue={this.state.end} onChange={this.handleEndChange}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     inputProps={{
                       step: 300, // 5 min
                     }}
          />
          <ParticipantsSelect id="participants" onChange={this.handleParticipantChange}/>
          <TypeSelect id="type" onChange={this.handleTypeChange}/>
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