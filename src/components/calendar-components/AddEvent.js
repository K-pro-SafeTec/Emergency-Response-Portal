import React from 'react';
import PropTypes from 'prop-types';
import {ParticipantsSelect} from './ParticipantsSelect';
import {TypeSelect} from './TypeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getDateFormatYMD, isValidParticipants, isValidType} from "../../helpers/calendar-helper";


export const AddEvent = (props) => {
  const date = props.date;
  const handleSubmit= () => {
    const participants = document.getElementById("participants").value;
    const type = document.getElementById("type").value;
    if (!isValidParticipants(participants)) {
        alert("not valid participants")
    }
    else if (!isValidType(type)) {
        alert("not valid type")
    } else {
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
        <TextField id="start" label="Start" type="time" defaultValue="09:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField id="end" label="Slutt" type="time" defaultValue="10:00"
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