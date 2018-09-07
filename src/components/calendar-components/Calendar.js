import React, { Component } from 'react';
import { AddEvent } from './AddEvent';
import { SideDisplay } from './SideDisplay';
import Paper from '@material-ui/core/Paper';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles/Calendar.css'

moment.locale('nb');
BigCalendar.momentLocalizer(moment);

export class EmergencyResponsePortalCalendar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: new Date('2018-09-07T20:00:00.000Z'),
          end: new Date('2018-09-07T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Øvelse',
        },
        {
          start: new Date('2018-09-07T21:45:00.000Z'),
          end: new Date('2018-09-07T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Trening',
        },
        {
          start: new Date('2018-09-09T21:45:00.000Z'),
          end: new Date('2018-09-09T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Table top',
        },
      ],
      showEventAdder: false,
      selectedDate: new Date()
    };
    this.addEventButtonClicked = this.addEventButtonClicked.bind(this);
    this.saveEventButtonClicked = this.saveEventButtonClicked.bind(this);
  }
  
  slotClicked(slotInfo) {
    if (slotInfo.action === "click") {
      const date = slotInfo.start;
      this.setState({
        selectedDate: date
      })
    }
  }
  
  addEventButtonClicked() {
    this.setState({
      showEventAdder: true
    })
  }
  
  saveEventButtonClicked(date, start, end, participants, type) {
    const year = date.substring(0, 4);
    const month = parseInt(date.substring(5, 7), 10) - 1;
    const dayInMonth = date.substring(8, 10);
    const startDate = new Date(year, month, dayInMonth, start.substring(0, 2), end.substring(3, 5));
    const endDate = new Date(year, month, dayInMonth, end.substring(0, 2), end.substring(3, 5));
    const newEvent = {
      start: startDate,
      end: endDate,
      participants: participants,
      title: capitalizeFirstLetter(type)
    };
    let events = this.state.events;
    events.push(newEvent);
    this.setState({
      events: events,
      showEventAdder: false,
      selectedDate: startDate
    });
  }
  
  render() {
    return (
      <div className="container">
        <BigCalendar
          events={this.state.events}
          popup={true}
          views={['month', 'week', 'work_week', 'day', 'agenda']}
          selectable={true}
          onSelectSlot={((slot) => this.slotClicked(slot))}
          onSelectEvent={({participants}) => console.log(participants)}
        
        />
        <Paper className="paper-big">
          {!this.state.showEventAdder ? (<SideDisplay events={this.state.events} date={this.state.selectedDate}
                                                      onAddEventButtonClick={this.addEventButtonClicked}/>) :
            <AddEvent date={this.state.selectedDate} onSaveButtonClick={this.saveEventButtonClicked}/>}
        </Paper>
      </div>
    )
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}