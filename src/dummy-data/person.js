import Status from '../helpers/Status';
import { raw_person_list } from '../raw-data/raw_person';
import { erTeamsByPerson } from '../raw-data/preprocess_data';
import { erTeamById } from '../raw-data/preprocess_data';
import { personShouldHaveCourses } from '../raw-data/preprocess_data';


// Add days to a Date object
function addDays(initial_date, days) {
  var date = new Date(initial_date.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function createPersonList() {
  const personList = []
  for (let i in raw_person_list) {
    // Data about person i
    const personData = raw_person_list[i];

    // At the moment only return team member's emp ids from first shift
    const teamMemberList = erTeamsByPerson[i];

    // Get courses ids this person should have
    const competenceIdList = personShouldHaveCourses[i];

    // interval to offset course validUntil data from today in days
    const max_offset = 20
    const min_offset = -1
    const num_days_warning = -2

    const competence = {}
    const today = new Date()

    for (let i in competenceIdList) {
      const course_id = competenceIdList[i];

      // Get days to offset validUntil from today
      const offset_days = Math.round(Math.random() * (max_offset - min_offset) + min_offset)

      // Dates for today and warning date to compare if a warning needs to be displayed
      const date = addDays(today, offset_days); 
      const date_warning = addDays(date, num_days_warning)

      // Update status
      var status = Status.OK
      if (date <= today)                 {status = Status.ERROR;}
      else if (date_warning <= today)   {status = Status.WARNING;}

      // Add comments on some course completions
      let comment = null;
      if( Math.random() < 0.2) {comment = 'Eksempelkommentar'}
      
      // Fill out course entry
      competence[course_id] = {
        status: status,
        validUntil: date,
        comment: comment,
      }
      
    }

    let person_main_role = "";
    if (erTeamById[personData.Rolle_lag_1]) { // If person has a special role for his/hers main team
      person_main_role = erTeamById[personData.Rolle_lag_1]['er_team_name'];
    }

    // Fill out person entry
    const personListEntry = {
        id: personData.emp_id,
        name: personData.first_name + " " + personData.last_name,
        teams: teamMemberList,
        competence: competence,
        roles: person_main_role,
      };

      personList.push(personListEntry);
  }
  return personList
}

// export const personList = [
  // {
  //   id: 0,
  //   name: 'Navn Navnesen',
  //   teams: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  //   competence: {
  //     0: {
  //       status: Status.OK,
  //       validUntil: new Date('2019-10-20'),
  //       comment: null,
  //     },
  //     1: {
  //       status: Status.WARNING,
  //       validUntil: new Date('2018-11-18'),
  //       comment: 'Eksempelkommentar',
  //     },
  //   },
  //   roles: getRolesForPerson(0),
  // },
  // {
  //   id: 1,
  //   name: 'Otto',
  //   teams: [6],
  //   competence: {
  //     0: {
  //       status: Status.OK,
  //       validUntil: new Date('2019-10-21'),
  //       comment: null,
  //     },
  //     1: {
  //       status: Status.OK,
  //       validUntil: null,
  //       comment: 'Eksempelkommentar',
  //     },
  //     2: {
  //       status: Status.OK,
  //       validUntil: new Date('2020-04-18'),
  //       comment: 'Eksempelkommentar',
  //     },
  //   },
  //   roles: getRolesForPerson(1),
  // },
  // {
  //   id: 2,
  //   name: 'Anne Turid',
  //   teams: [6],
  //   competence: {
  //     1: {
  //       status: Status.OK,
  //       validUntil: new Date('2019-10-20'),
  //       comment: null,
  //     },
  //     2: {
  //       status: Status.WARNING,
  //       validUntil: new Date('2018-11-18'),
  //       comment: 'Eksempelkommentar',
  //     },
  //   },
  //   roles: getRolesForPerson(2),
  // },
  // {
  //   id: 3,
  //   name: 'Gustav',
  //   teams: [6],
  //   competence: {
  //     0: {
  //       status: Status.WARNING,
  //       validUntil: new Date('2019-02-22'),
  //       comment: null,
  //     },
  //     1: {
  //       status: Status.WARNING,
  //       validUntil: new Date('2018-12-18'),
  //       comment: 'Eksempelkommentar',
  //     },
  //     2: {
  //       status: Status.OK,
  //       validUntil: new Date('2020-11-18'),
  //       comment: 'Eksempelkommentar',
  //     },
  //   },
  //   roles: getRolesForPerson(3),
  // },
  // {
  //   id: 4,
  //   name: 'Petter',
  //   teams: [6],
  //   competence: {},
  //   roles: getRolesForPerson(4),
  // },
// ];

export const personList = createPersonList();
export const personById = {};
personList.forEach(person => personById[person.id] = person);
