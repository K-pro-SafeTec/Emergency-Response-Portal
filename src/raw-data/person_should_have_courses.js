import { raw_person_list } from './raw_person';
import { raw_erteam } from './raw_erteam';
import { raw_erteam_courses } from './raw_erteam_courses';
import { raw_courses } from './raw_courses';

// Get by ID
export const courseById = {};
raw_courses.forEach(course => courseById[course.course_id] = course);

export const personById = {};
raw_person_list.forEach(person => personById[person.emp_id] = person);

export const erTeamById = {};
raw_erteam.forEach(team => erTeamById[team.er_team_id] = team);


function getERTeamMembers(er_team_id, shift){
    return raw_person_list.filter(person => 
        person.skift === shift && person.Beredskapslag_1 === er_team_id)
}

const erTeamMembersByTeamAndShift = {};
for (let team_id in erTeamById){
    team_id = parseInt(team_id, 10)
    erTeamMembersByTeamAndShift[team_id] = {}
    erTeamMembersByTeamAndShift[team_id][0] = getERTeamMembers(team_id, 0)
    erTeamMembersByTeamAndShift[team_id][1] = getERTeamMembers(team_id, 1)
    erTeamMembersByTeamAndShift[team_id][2] = getERTeamMembers(team_id, 2)
}

export function getTeamMembersByKey(team_id, shift) {
    return erTeamMembersByTeamAndShift[team_id][shift]
}

console.log(getTeamMembersByKey(1,0))


// Data om kurs til en person, til når gjelder kurs og kommentar

// Kurskrav til et team

// 








export const hello_stuff = 5

