import React from 'react';
import PropTypes from 'prop-types';
import {ParticipantsSelect} from './ParticipantsSelect';
import {TypeSelect} from './TypeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getDateFormatYMD, getTimeFormat, isValidParticipants, isValidType} from "../../helpers/calendar-helper";


export const AddEvent = (props) => {
  const date = props.date;
  const eventToEdit = props.eventToEdit;
  let defaultStart = "09:00";
  let defaultEnd = "10:00";
  if (eventToEdit) {
      defaultStart = getTimeFormat(eventToEdit.start);
      defaultEnd = getTimeFormat(eventToEdit.end);
      const defaultParicipants = eventToEdit.participants;
      const defaultType = eventToEdit.type;
  }
  const handleSubmit= () => {
    const participants = document.getElementById("participants").value;
    const type = document.getElementById("type").value;
    const participantsSelected = isValidParticipants(participants);
    const typeSelected = isValidType(type);
    if (!participantsSelected) {
        console.log("not valid participants");
    }
    if (!typeSelected) {
        console.log("not valid type");
    }
    if (participantsSelected && typeSelected) {
        props.onSaveButtonClick(document.getElementById("date").value,
          document.getElementById("start").value,
          document.getElementById("end").value,
          participants,
          type)
    }
  };
  return (
    <div className="side-display">
      <h1>Legg til ny hendelse</h1>
      <form className="form">
        <TextField id="date" label="Dato" type="date" defaultValue={getDateFormatYMD(date)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="start" label="Start" type="time" defaultValue={defaultStart}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField id="end" label="Slutt" type="time" defaultValue={defaultEnd}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <ParticipantsSelect id="participants"/>
        <TypeSelect id="type"/>
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit} id="save-button">
          Lagre
        </Button>
      </div>
      </form>
    </div>
  )
};

AddEvent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onSaveButtonClick: PropTypes.func.isRequired
};