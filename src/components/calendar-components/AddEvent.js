import React, { Component } from 'react';
import { ParticipantsSelect } from './ParticipantsSelect';
import { TypeSelect } from './TypeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class AddEvent extends Component {
  
  render() {
    const date = this.props.date;
    return (
      <div className="side-display">
        <h1>Legg til ny hendelse</h1>
        <form>
          <TextField
            id="date"
            label="Dato"
            type="date"
            defaultValue={getDateFormat(date)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
        <form>
          <TextField
            id="start"
            label="Start"
            type="time"
            defaultValue="09:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
        <form>
          <TextField
            id="end"
            label="Slutt"
            type="time"
            defaultValue="10:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
        <ParticipantsSelect/>
        <TypeSelect/>
        <div onClick={() => this.props.onSaveButtonClick()}>
          <Button variant="contained" color="primary">
            Lagre
          </Button>
        </div>
      </div>
    )
  }
}

function getDateFormat(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let dayInMonth = date.getDate();
  if (dayInMonth < 10) {
    dayInMonth = "0" + dayInMonth;
  }
  return year + "-" + month + "-" + dayInMonth
}