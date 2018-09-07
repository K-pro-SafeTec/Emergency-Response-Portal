import React, { Component } from 'react';
import { AddEvent } from './AddEvent';
import { SideDisplay } from './SideDisplay';
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
          type: 'Øvelse',
          participants: 'Alle',
          title: 'Øvelse',
        },
        {
          start: new Date('2018-09-07T21:45:00.000Z'),
          end: new Date('2018-09-07T21:45:00.000Z'),
          type: 'Trening',
          participants: 'Alle',
          title: 'Trening',
        },
        {
          start: new Date('2018-09-09T21:45:00.000Z'),
          end: new Date('2018-09-09T21:45:00.000Z'),
          type: 'Table Top',
          participants: 'Alle',
          title: 'Table Top',
        },
      ],
      showEventAdder: false,
      selectedDate: new Date()
    };
    this.addEventButtonClicked = this.addEventButtonClicked.bind(this);
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
  
  saveEventButtonClicked() {
    alert("yes")
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
        {!this.state.showEventAdder ? (<SideDisplay events={this.state.events} date={this.state.selectedDate}
                                                    onAddEventButtonClick={this.addEventButtonClicked}/>) :
          <AddEvent date={this.state.selectedDate} onSaveButtonClick={this.saveEventButtonClicked}/>}
      </div>
    )
  }
}
