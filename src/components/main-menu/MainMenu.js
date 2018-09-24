import React from 'react';
import IconCalendar from '../../icons/calendar.svg';
import IconLivefeed from '../../icons/livefeed.svg';
import IconShield from '../../icons/shield.svg';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import AppPage from '../shared/AppPage';



export default () => (
  <AppPage title="Safetec Beredskapsportal">
    <NavMenu>
      <NavMenuItem name="Kalender" icon={IconCalendar} to="calendar/" />
      <NavMenuItem name="Live feed" icon={IconLivefeed} to="livefeed/" />
      <NavMenuItem name="Beredskapsorganisasjon" icon={IconShield} to="emergency-response-organization/" />
    </NavMenu>
  </AppPage>
);
