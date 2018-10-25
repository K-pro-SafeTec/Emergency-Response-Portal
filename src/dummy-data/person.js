import Status from '../helpers/Status';
import { roleList } from './role';
import { raw_person_list } from '../raw-data/raw_person';
import { erTeamsByPerson } from '../raw-data/preprocess_data';
import { personShouldHaveCourses } from '../raw-data/preprocess_data';

function getRolesForPerson(id) {
  return roleList
    .filter(role => role.person === id)
    .map(role => role.id);
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function fillPersonList(personList) {
  for (let i in raw_person_list) {

    const personData = raw_person_list[i];

    // At the moment only return team member's emp ids from first shift
    const teamMemberList = erTeamsByPerson[i];

    ///// STILL NEED DATA ON WHAT COURSES AND DATES PEOPLE ACTUALLY HAVE 
    // Get courses ids this person should have
    const competenceIdList = personShouldHaveCourses[i];

    const max_offset = 20
    const min_offset = -10

    const comp = {}
    const today = new Date()
    const num_days_warning = -5


    for (let i in competenceIdList) {
      const course_id = competenceIdList[i];

      const offset_days = Math.round(Math.random() * (max_offset - min_offset) + min_offset)

      const date = today.addDays(offset_days); 
      const date_warning = date.addDays(num_days_warning)

      var status = Status.OK
      if (date < today)          {status = Status.ERROR;}
      else if (date_warning <= today)   {status = Status.WARNING;}

      const comment = null;
      if( Math.random() < 0.2) {comment = 'Eksempelkommentar'}
      
      comp[course_id] = {
        status: status,
        validUntil: date,
        comment: comment,
      }
      
    }

    const personListEntry = {
        id: personData.emp_id,
        name: personData.first_name + " " + personData.last_name,
        teams: teamMemberList,
        competence: comp,
        // TODO: handle this... 
        roles: getRolesForPerson(0),
      };
      personList.push(personListEntry);
  }
}

// const personTest = []
// fillPersonList(personTest)
// console.log(personTest)


export const personList = [
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
];

fillPersonList(personList);
export const personById = {};
personList.forEach(person => personById[person.id] = person);
