import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <ul>
    <li>
      <Link to="/calendar">Kalender</Link>
    </li>
    <li>
      <Link to="/livefeed">Livefeed</Link>
    </li>
  </ul>
);
