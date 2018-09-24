import React, {Component, Children} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import AddEvent from './AddEvent';
import SideDisplay from './SideDisplay';
import Paper from '@material-ui/core/Paper';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles/Calendar.css'
import {isValidEvent, equalDates} from './../../helpers/calendar-helper'
import {capitalizeFirstLetter} from "../../helpers/calendar-helper";

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

export default class EmergencyResponsePortalCalendar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 0,
          start: new Date('2018-09-18T09:00:00.000Z'),
          end: new Date('2018-09-18T11:45:00.000Z'),
          participants: 'Alle',
          title: 'Øvelse',
        },
        {
          id: 1,
          start: new Date('2018-09-19T12:30:00.000Z'),
          end: new Date('2018-09-19T14:00:00.000Z'),
          participants: 'Alle',
          title: 'Trening',
        },
        {
          id: 2,
          start: new Date('2018-09-20T10:15:00.000Z'),
          end: new Date('2018-09-20T14:00:00.000Z'),
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
    this.saveEvent = this.saveEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.changeEventButtonClicked = this.changeEventButtonClicked.bind(this);
    this.coloredDateCellWrapper = this.coloredDateCellWrapper.bind(this);
    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
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

  saveEvent(date, start, end, participants, type) {
    if (isValidEvent(date, start, end, participants, type)) {
      const year = date.substring(0, 4);
      const month = parseInt(date.substring(5, 7), 10) - 1;
      const dayInMonth = date.substring(8, 10);
      const startDate = new Date(year, month, dayInMonth, start.substring(0, 2), start.substring(3, 5));
      const endDate = new Date(year, month, dayInMonth, end.substring(0, 2), end.substring(3, 5));
      const newEvent = {
        id: this.state.nextEventId,
        start: startDate,
        end: endDate,
        participants: capitalizeFirstLetter(participants),
        title: capitalizeFirstLetter(type)
      };
      let events = this.state.events.slice();
      if (this.state.eventToEdit) {
        events = events.filter(event => event.id !== this.state.eventToEdit.id)
      }
      events.push(newEvent);
      this.setState({
        events,
        showEventAdder: false,
        selectedDate: startDate,
        nextEventId: this.state.nextEventId + 1,
        eventToEdit: null
      });
    }
  }
  
  deleteEvent(eventId) {
    const events = this.state.events.filter(event => event.id !== eventId);
    this.setState({
      events
    })
  }
  
  changeEventButtonClicked(eventId) {
    const eventToEdit = this.state.events.filter(event => event.id === eventId)[0];
    this.setState({
        eventToEdit,
        showEventAdder: true
    })
  }
  
  reviewEvent(eventId) {
    console.log("Review event", eventId)
  }

  cancelButtonClicked() {
    this.setState({
      eventToEdit: null,
      showEventAdder: false
    })
  }
  
  render() {
    const initTime = new Date(this.state.selectedDate.setHours(9));
    return (
      <div className="container">
        <BigCalendar
          scrollToTime={initTime}
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
                                                      onChangeEvent={this.changeEventButtonClicked}
                                                      onReviewButtonClick={this.reviewEvent}/>) :
            <AddEvent date={this.state.selectedDate} eventToEdit={this.state.eventToEdit}
                      onSaveButtonClick={this.saveEvent} deleteEvent={this.deleteEvent} onCancelClick={this.cancelButtonClicked} />}
        </Paper>
      </div>
    )
  }
}