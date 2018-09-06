import React, { Component } from 'react';

import { AddEvent } from "./AddEvent";
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
      events: [],
      showEventAdder: false,
    };
  }
  
  addButtonClicked() {
    this.setState({
      showEventAdder: true
    })
  }
  
  render() {
    return (
      <div className="container">
        {/*<ApiCalendar/>*/}
        <BigCalendar
          events={[
            {
              start: new Date('2018-09-07T21:45:00.000Z'),
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
          ]}
          onSelectEvent={({ participants }) => console.log(participants)}

        />
        <div onClick={() => this.addButtonClicked()}>
          <Button variant="fab" color="primary">
            <AddIcon />
          </Button>
        </div>
        {this.state.showEventAdder && (
          <AddEvent/>
        )}
      </div>
    )
  }
}
