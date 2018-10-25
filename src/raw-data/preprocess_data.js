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
        person.skift === shift && person.Beredskapslag_1 === er_team_id);
}

const erTeamMembersByTeamAndShift = {};
for (let team_id in erTeamById){
    team_id = parseInt(team_id, 10);
    erTeamMembersByTeamAndShift[team_id] = {};
    erTeamMembersByTeamAndShift[team_id][0] = getERTeamMembers(team_id, 0);
    erTeamMembersByTeamAndShift[team_id][1] = getERTeamMembers(team_id, 1);
    erTeamMembersByTeamAndShift[team_id][2] = getERTeamMembers(team_id, 2);
}

export function getTeamMembersByKey(team_id, shift) {
    return erTeamMembersByTeamAndShift[team_id][shift];
}

// Data om kurs til en person, til når gjelder kurs og kommentar

// Kurskrav til et team
export const coursesByTeamId = {};
for (let i in raw_erteam){
    let er_team_id = raw_erteam[i]['er_team_id'];
    coursesByTeamId[er_team_id] = raw_erteam_courses.filter(entry => entry.er_team_id === er_team_id)
                                                    .map(entry => parseInt(entry.course_id, 10))
                                                    .sort(function(a, b){return a - b});
}


export const personShouldHaveCourses = {};
for (let i in raw_person_list) {
    // Get all teams of person
    var team1 = raw_person_list[i]['Beredskapslag_1'];
    var team1_role = raw_person_list[i]['Rolle_lag_1'];
    var team2 = raw_person_list[i]['Beredskapslag_2'];
    var team3 = raw_person_list[i]['Beredskapslag_3'];

    // Create array of all teams
    var team_list = [];
    team_list.push(team1);
    team_list.push(team1_role);
    team_list.push(team2);
    team_list.push(team3);

    // Filter away trash values ""
    team_list = team_list.filter(el => Number.isInteger(el));
    var courses_list = []

    // Find courses required for all team and collect them
    for (let team in team_list) {
        team = team_list[team]
        // Get all courses for given team
        var courses = coursesByTeamId[team]
        // Add courses if not currently in list
        for (let cid in courses) {
            cid = courses[cid]
            if (!courses_list.includes(cid)){
                courses_list.push(cid)
            }
        }

    }
    courses_list = courses_list.sort(function(a, b){return a - b})
    personShouldHaveCourses[i] = courses_list
}

// console.log(personShouldHaveCourses[0])
// console.log(personShouldHaveCourses[1])
// console.log(personShouldHaveCourses[12])
