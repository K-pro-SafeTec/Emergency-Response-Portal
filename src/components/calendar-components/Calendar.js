import React, {Component, Children} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {AddEvent} from './AddEvent';
import {SideDisplay} from './SideDisplay';
import Paper from '@material-ui/core/Paper';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles/Calendar.css'
import {isValidEvent, equalDates} from './../../helpers/calendar-helper'

moment.locale('nb');
BigCalendar.momentLocalizer(moment);

const norwegian_translations = {
  previous: 'Forrige',
  next: 'Neste',
  today: 'Dagens dato',
  month: 'Måned',
  week: 'Uke',
  work_week: 'Arbeidsuke',
  day: 'Dag',
  agenda: 'Agenda',
  date: 'Dato',
  time: 'Tid',
  event: 'Hendelse',
};

const formats = {
  dayFormat: 'ddd DD.MM',
  weekdayFormat: 'dddd',
  agendaDateFormat: 'dddd DD.MM',
};

export class EmergencyResponsePortalCalendar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 0,
          start: new Date('2018-09-07T20:00:00.000Z'),
          end: new Date('2018-09-07T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Øvelse',
        },
        {
          id: 1,
          start: new Date('2018-09-07T21:45:00.000Z'),
          end: new Date('2018-09-07T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Trening',
        },
        {
          id: 2,
          start: new Date('2018-09-09T21:45:00.000Z'),
          end: new Date('2018-09-09T21:45:00.000Z'),
          participants: 'Alle',
          title: 'Table top',
        },
      ],
      showEventAdder: false,
      selectedDate: new Date(),
      nextEventId: 3,
      eventToEdit: null
    };
    this.addEventButtonClicked = this.addEventButtonClicked.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.coloredDateCellWrapper = this.coloredDateCellWrapper.bind(this);
  }

  coloredDateCellWrapper({children, value}) {
        return (
          React.cloneElement(Children.only(children), {
            style: {
                ...children.style,
                backgroundColor: equalDates(value, this.state.selectedDate) ? '#eaf6ff' : 'white',
            },
          })
        )}

  slotClicked(slotInfo) {
    if (slotInfo.action === "click") {
      const date = slotInfo.start;
      this.setState({
        selectedDate: date
      })
    }
  }

  eventClicked(date) {
    this.setState({
        selectedDate: date
    })
  }
  
  addEventButtonClicked() {
    this.setState({
      showEventAdder: true
    })
  }

  addEvent(date, start, end, participants, type) {
    if (isValidEvent(date, start, end, participants, type)) {
      const year = date.substring(0, 4);
      const month = parseInt(date.substring(5, 7), 10) - 1;
      const dayInMonth = date.substring(8, 10);
      const startDate = new Date(year, month, dayInMonth, start.substring(0, 2), end.substring(3, 5));
      const endDate = new Date(year, month, dayInMonth, end.substring(0, 2), end.substring(3, 5));
      const newEvent = {
        id: this.state.nextEventId,
        start: startDate,
        end: endDate,
        participants,
        title: capitalizeFirstLetter(type)
      };
      let events = this.state.events;
      events.push(newEvent);
      this.setState({
        events,
        showEventAdder: false,
        selectedDate: startDate,
        nextEventId: this.state.nextEventId + 1
      });
    } else {
    }
  }
  
  deleteEvent(eventId) {
    const events = this.state.events.filter(event => event.id !== eventId);
    this.setState({
      events
    })
  }
  
  changeEvent(eventId) {
    const eventToEdit = this.state.events.filter(event => event.id === eventId)[0];
    this.setState({
        eventToEdit,
        showEventAdder: true
    })
  }
  
  reviewEvent(eventId) {
    console.log("Review event", eventId)
  }
  
  render() {
    return (
      <div className="container">
        <BigCalendar
          messages={norwegian_translations}
          events={this.state.events}
          popup={true}
          views={['month', 'week', 'work_week', 'day', 'agenda']}
          selectable={true}
          formats={formats}
          onSelectSlot={((slot) => this.slotClicked(slot))}
          onSelectEvent={({start}) => this.eventClicked(start)}
          components={{
              dateCellWrapper: this.coloredDateCellWrapper,
          }}
        
        />
        <Paper className="paper-big">
          {!this.state.showEventAdder ? (<SideDisplay events={this.state.events} date={this.state.selectedDate}
                                                      onAddEventButtonClick={this.addEventButtonClicked}
                                                      onDeleteButtonClick={this.deleteEvent}
                                                      onChangeEvent={this.changeEvent}
                                                      onReviewButtonClick={this.reviewEvent}/>) :
            <AddEvent date={this.state.selectedDate} eventToEdit={this.state.eventToEdit} onSaveButtonClick={this.addEvent}/>}
        </Paper>
      </div>
    )
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}