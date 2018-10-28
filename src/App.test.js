import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  getTimeFormat,
  getDateFormatYMD,
  getEventsOnDate,
  equalDates,
  getDateFormat,
  isValidEvent,
  isValidDate,
  isValidPeriod,
  isValidParticipants,
  isValidType,
  capitalizeFirstLetter,
  sortEvents,
} from './helpers/calendar-helper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('getTimeFormat and getTimeFormatYMD returns the correct time', () => {
  const date1 = new Date(2018, 3, 15, 16, 31);
  const timeFormat1 = getTimeFormat(date1);
  const timeFormatYMD1 = getDateFormatYMD(date1);
  expect(timeFormat1).toBe('16:31');
  expect(timeFormatYMD1).toBe('2018-04-15');

  const date2 = new Date(2019, 0, 12, 5);
  const timeFormat2 = getTimeFormat(date2);
  const timeFormatYMD2 = getDateFormatYMD(date2);
  expect(timeFormat2).toBe('05:00');
  expect(timeFormatYMD2).toBe('2019-01-12');

  const date3 = new Date(1900, 0, 1, 0, 4);
  const timeFormat3 = getTimeFormat(date3);
  const timeFormatYMD3 = getDateFormatYMD(date3);
  expect(timeFormat3).toBe('00:04');
  expect(timeFormatYMD3).toBe('1900-01-01');

  const date4 = new Date(2999, 0, 1, 23, 59, 59, 99);
  const timeFormat4 = getTimeFormat(date4);
  const timeFormatYMD4 = getDateFormatYMD(date4);
  expect(timeFormat4).toBe('23:59');
  expect(timeFormatYMD4).toBe('2999-01-01');
});

it('getEventsOnDate returns the events on the given date and no other events', () => {
  const event1 = {
    start: new Date(2000, 0),
    end: new Date(2000, 0),
  };
  const event2 = {
    start: new Date(2000, 0),
    end: new Date(2018, 11, 30),
  };
  const event3 = {
    start: new Date(2001, 0),
    end: new Date(2001, 0),
  };
  const eventsOnDate = getEventsOnDate([event1, event2, event3], new Date(2000, 0));
  expect(eventsOnDate).toContain(event1, event2);
  expect(eventsOnDate).not.toContain(event3);
});

it('equalDates works as expected', () => {
  const date1 = new Date(2019, 0, 1, 22, 22);
  const date2 = new Date(2019, 0, 1, 22, 23);
  const date3 = new Date(2019, 0, 2, 22, 22);
  const date4 = new Date(2019, 1, 1, 22, 22);
  const date5 = new Date(2020, 0, 1, 22, 22);

  const differentMinutes = equalDates(date1, date2);
  expect(differentMinutes).toBeTruthy();

  const differentDayInMonth = equalDates(date1, date3);
  expect(differentDayInMonth).toBeFalsy();

  const differentMonth = equalDates(date1, date4);
  expect(differentMonth).toBeFalsy();

  const differentYears = equalDates(date1, date5);
  expect(differentYears).toBeFalsy();
});

it('getDateFormat works as expected', () => {
  const date1 = new Date(2019, 0, 1, 22, 22);
  const string1 = getDateFormat(date1);
  expect(string1).toBe('Tirsdag 1. januar 2019');

  const date2 = new Date(2020, 11, 24);
  const string2 = getDateFormat(date2);
  expect(string2).toBe('Torsdag 24. desember 2020');
});

it('validEvent works as expected', () => {
  const date = '2018-11-10';
  const start = '20:00';
  const end = '21:00';
  const participants = 'alle';
  const type = 'øvelse';
  expect(isValidDate(date)).toBeTruthy();
  expect(isValidPeriod(start, end)).toBeTruthy();
  expect(isValidParticipants(participants)).toBeTruthy();
  expect(isValidType(type)).toBeTruthy();
  expect(isValidEvent(date, start, end, participants, type)).toBeTruthy();

  const end2 = '19:00';
  expect(isValidPeriod(start, end2)).toBeFalsy();
  expect(isValidEvent(date, start, end2, participants, type)).toBeFalsy();


  const participants2 = '';
  expect(isValidParticipants(participants2)).toBeFalsy();
  expect(isValidEvent(date, start, end, participants2, type)).toBeFalsy();

  const type2 = 'something';
  expect(isValidParticipants(type2)).toBeFalsy();
  expect(isValidEvent(date, start, end, participants, type2)).toBeFalsy();
});

it('capitalizeFirstLetter works as expected', () => {
  expect(capitalizeFirstLetter('alle')).toBe('Alle');
  expect(capitalizeFirstLetter('livbåtlag')).toBe('Livbåtlag');
  expect(capitalizeFirstLetter('Trening')).toBe('Trening');
  expect(capitalizeFirstLetter('')).toBe('')
});

it('sortEvents works as expected', () => {
  const year = 2018;
  const month = 10;
  const dayInMonth = 1;
  const startDate1 = new Date(year, month, dayInMonth, 12, 0);
  const endDate1 = new Date(year, month, dayInMonth, 14, 0);
  const startDate2 = new Date(year, month, dayInMonth + 1, 12, 0);
  const endDate2 = new Date(year, month, dayInMonth + 1, 14, 0);
  const event1 = {
    start: startDate1,
    end: endDate1,
  };
  const event2 = {
    start: startDate2,
    end: endDate2,
  };
  const event3 = {
    start: startDate1,
    end: endDate2,
  };
  const sorted1 = sortEvents([event1, event2]);
  expect(sorted1[0]).toBe(event1);
  expect(sorted1[1]).toBe(event2);
  const sorted2 = sortEvents([event2, event1]);
  expect(sorted2[0]).toBe(event1);
  expect(sorted2[1]).toBe(event2);
  const sorted3 = sortEvents([event1, event3]);
  expect(sorted3[0]).toBe(event1);
  expect(sorted3[1]).toBe(event3);
  const sorted4 = sortEvents([event3, event1]);
  expect(sorted4[0]).toBe(event1);
  expect(sorted4[1]).toBe(event3);
});
