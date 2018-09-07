import React, { Component } from 'react';

import { AddEvent } from "./AddEvent";
import { SideDisplay } from "./SideDisplay";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/Calendar.css'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


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
          end: new Date('2018-09-08T21:45:00.000Z'),
          start: new Date('2018-09-08T21:45:00.000Z'),
          type: 'Øvelse',
          participants: 'Alle',
          title: 'Trening',
        },
        {
          end: new Date('2018-09-09T21:45:00.000Z'),
          start: new Date('2018-09-09T21:45:00.000Z'),
          type: 'Øvelse',
          participants: 'Alle',
          title: 'Table Top',
        },
      ],
      showEventAdder: false,
      showDate: new Date()
    };
  }
  
  addButtonClicked() {
    this.setState({
      showEventAdder: true
    })
  }
  
  slotClicked(slotInfo) {
    console.log("clot clicked");
    if (slotInfo.action === "click") {
      const date = slotInfo.start;
      this.setState({
        showDate: date
      })
    }
  }
  
  componentDidUpdate() {
    console.log(this.state.showDate)
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
          onSelectEvent={({ participants }) => console.log(participants)}

        />
        <SideDisplay events={this.state.events} date={this.state.showDate}/>
        {/*
        <div onClick={() => this.addButtonClicked()}>
          <Button variant="fab" color="primary">
            <AddIcon />
          </Button>
        </div>
        {this.state.showEventAdder && (
          <AddEvent/>
        )}*/}
      </div>
    )
  }
}
