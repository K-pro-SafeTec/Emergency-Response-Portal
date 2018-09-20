import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MainMenu.css';
import IconCalendar from '../../icons/calendar.svg';
import IconLivefeed from '../../icons/livefeed.svg';
import IconShield from '../../icons/shield.svg';



export default () => (
  <ul className="container">
    <Link className="element" to="/calendar">
      <img className="icon" src={IconCalendar} alt="Kalender"/>
      <h3>Kalender</h3>
    </Link>
    <Link className="element" to="/livefeed">
      <img className="icon" src={IconLivefeed} alt="Livefeed"/>
      <h3>Livefeed</h3>
    </Link>
    <Link className="element" to="/emergency-response-organization">
      <img className="icon" src={IconShield} alt="Beredskapsorganisasjon"/>
      <h3>Beredskapsorganisasjon</h3>
    </Link>
  </ul>
);
