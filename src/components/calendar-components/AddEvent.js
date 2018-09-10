import React from 'react';
import PropTypes from 'prop-types';
import {ParticipantsSelect} from './ParticipantsSelect';
import {TypeSelect} from './TypeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getDateFormatYMD} from './../../helpers/calendar-helper';


export const AddEvent = (props) => {
  const date = props.date;
  return (
    <div className="side-display">
      <h1>Legg til ny hendelse</h1>
      <form>
        <TextField id="date" label="Dato" type="date" defaultValue={getDateFormatYMD(date)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <form>
        <TextField id="start" label="Start" type="time" defaultValue="09:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
      <form>
        <TextField id="end" label="Slutt" type="time" defaultValue="10:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
      <ParticipantsSelect id="participants"/>
      <TypeSelect id="type"/>
      <div
        onClick={() => props.onSaveButtonClick(document.getElementById("date").value,
          document.getElementById("start").value,
          document.getElementById("end").value,
          document.getElementById("participants").value,
          document.getElementById("type").value)}>
        <Button variant="contained" color="primary">
          Lagre
        </Button>
      </div>
    </div>
  )
};

AddEvent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onSaveButtonClick: PropTypes.func.isRequired
};