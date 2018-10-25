import { raw_courses } from '../raw-data/raw_courses';

function createCompetenceTypeList() {
  const competenceTypeList = [];
  for (let i in raw_courses) {
    const course = raw_courses[i];
    const listEntry = {
      id: course.course_id,
      name: course.course_name,
      courseDurationHrs: course.course_duration_hrs,
      courseFreqReqDays: course.course_freq_req_days,
    };
    competenceTypeList.push(listEntry);
  }
  return competenceTypeList;
}


// export const competenceTypeList = [
  // {
  //   id: 0,
  //   name: "Offshore grunnkurs",
  // },
  // {
  //   id: 1,
  //   name: "Røykdykkerkurs",
  // },
  // {
  //   id: 2,
  //   name: "Modultrening",
  // }
// ];

export const competenceTypeList = createCompetenceTypeList();
export const competenceTypeById = {};
competenceTypeList.forEach(competenceType => competenceTypeById[competenceType.id] = competenceType);
