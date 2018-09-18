import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MainMenu.css';
import IconCalendar from '../../icons/calendar.svg';
import IconLivefeed from '../../icons/livefeed.svg';



export default () => (
  <div>

    <h1 class="title">Emergency Response Portal</h1>
    <ul class="container">
      <a class="element" href="/calendar">
        <img class="icon" src={IconCalendar} alt="Kalender"/>
        <a>Kalender</a>
      </a>
      <a class="element" href="/livefeed">
        <img class="icon" src={IconLivefeed} alt="Livefeed"/>
        <a>Livefeed</a>
      </a>
    </ul>
  </div>
);
