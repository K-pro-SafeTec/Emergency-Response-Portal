// Takes javascript date object and returns nice time
function getTimeFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
}

function getDateFormatYMD(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let dayInMonth = date.getDate();
  if (dayInMonth < 10) {
    dayInMonth = "0" + dayInMonth;
  }
  return year + "-" + month + "-" + dayInMonth
}

// Takes a list of events and a date as objects.
// Returns the events that starts on the given date.
function getEvents(events, date) {
  return events.filter(event => {
    return equalDates(event.start, date)
  });
}

// Takes two javascript date objects as arguments and returns true if the objects fall on the same date.
function equalDates(date1, date2) {
  const dayInMonth1 = date1.getDate();
  const dayInMonth2 = date2.getDate();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const year1 = date1.getYear();
  const year2 = date2.getYear();
  return dayInMonth1 === dayInMonth2 && month1 === month2 && year1 === year2;
}

// Takes in a javascript date object and returns a nice string.
function getDateFormat(date) {
  const weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
  const months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober",
    "november", "desember"];
  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  return weekday + " " + date.getDate() + ". " + month + " " + date.getFullYear()
}

// Checks if an event is a valid event
function isValidEvent(date, start, end, participants, type) {
  return isValidDate(date) && isValidPeriod(start, end) && isValidParticipants(participants) &&
      isValidType(type)
}

// Returns true if the input date is on a format that can be parsed to a date
function isValidDate(date) {
  return !isNaN(Date.parse(date));
}

// Returns true if the input time is on the format tt:mm
function isValidTime(time) {
  return /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(time)
}

function isValidPeriod(start, end) {
  if (!isValidTime(start) || !isValidTime(end)) {
    return false;
  }
  return start <= end;
}

function isValidParticipants(participants) {
  const valids = ['alle', 'beredskapslag', 'beredskapsledelse'];
  return valids.includes(participants)
}

function isValidType(type) {
  const valids = ['øvelse', 'trening', 'table top'];
  return valids.includes(type)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function sortEvents(events) {
  events.sort(function(a, b){
    if (a.start - b.start === 0) {
      return a.end - b.end;
    }
    return a.start - b.start;
  });
  return events;
}

// Returns the date of a special weekday some weeks in the future or in the past.
// 0 is Sunday, 1 is Monday etc.
// For instance, running the method getDateRelatedToThisDate(2, 3) will return the date of Wednesday in three weeks.
function getDateRelatedToThisDate(weekdayNumber, numberOfWeeks, hours=0, minutes=0) {
  let date = new Date();
  date.setDate(date.getDate()+ 7 * numberOfWeeks + weekdayNumber - date.getDay());
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
}

export { getTimeFormat, getDateFormatYMD, getEvents, equalDates, getDateFormat, isValidEvent, isValidParticipants,
  isValidType, capitalizeFirstLetter, sortEvents, getDateRelatedToThisDate }
