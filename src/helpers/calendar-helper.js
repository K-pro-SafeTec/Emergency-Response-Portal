// Takes javascript date object and returns nice time
export function getTimeFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
}

export function getDateFormatYMD(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let dayInMonth = date.getDate();
  if (dayInMonth < 10) {
    dayInMonth = '0' + dayInMonth;
  }
  return year + '-' + month + '-' + dayInMonth
}

// Takes a list of events and a date as objects.
// Returns the events that starts on the given date.
export function getEvents(events, date) {
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
export function getDateFormat(date) {
  const weekdays = [ 'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag' ]
  const months = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober',
    'november', 'desember' ]
  const weekday = weekdays[ date.getDay() ]
  const month = months[ date.getMonth() ]
  return weekday + ' ' + date.getDate() + '. ' + month + ' ' + date.getFullYear()
}