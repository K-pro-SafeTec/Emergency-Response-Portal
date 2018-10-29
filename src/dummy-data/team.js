import Status from '../helpers/Status';
import { mostSevere } from '../helpers/Status';
import { getTeamMembersByKey } from '../raw-data/preprocess_data';
import { coursesByTeamId } from '../raw-data/preprocess_data';
import { raw_erteam } from '../raw-data/raw_erteam';
import { personById } from './person';



function createTeamList() {
  const teamList = []
  for (let i in raw_erteam) {
    const teamData = raw_erteam[i];
    // At the moment only return team member's emp ids from first shift
    const memberList = getTeamMembersByKey(teamData.er_team_id, 0).map(member => member.emp_id);
    // Get required courses for team
    const competenceList = coursesByTeamId[teamData.er_team_id];

    let status = Status.OK;
    // Find team status based on status of members courses for this team
    for (let j in memberList) { //Check all members
      const person = personById[memberList[j]];

      for (let k in competenceList) { // Check all required courses
        const course_id = competenceList[k]
        // If some person lacks required competence
        if (person.competence[course_id] === undefined || person.competence[course_id] === null) {
          status = Status.ERROR;
          break;
        }
        status = mostSevere(status, person.competence[course_id].status);
        if (status === Status.ERROR) {break;} // Will return error status for team so stop checking
      }
      if (status === Status.ERROR) {break;} // Will return error status for team so stop checking
    }

    // List entry in teamList
    const teamListEntry = {
      id: teamData.er_team_id,
      name: teamData.er_team_name,
      status: status,
      members: memberList,
      requiredCompetence: competenceList,
      hasTraining: teamData.has_training,
      hasTableTops: teamData.has_tabletop,
    };
    teamList.push(teamListEntry);
  }
  return teamList
}

// export const teamList = [
  // {
  //   id: 0,
  //   name: "Beredskapsledelse",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: false,
  //   hasTableTops: true,
  // },
  // {
  //   id: 1,
  //   name: "Kontrollromsoperatører",
  //   status: Status.WARNING,
  //   members: [0],
  //   requiredCompetence: [0, 1],
  //   hasTraining: false,
  //   hasTableTops: true,
  // },
  // {
  //   id: 2,
  //   name: "Sykepleier",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: false,
  //   hasTableTops: false,
  // },
  // {
  //   id: 3,
  //   name: "Helidekklag",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: true,
  //   hasTableTops: false,
  // },
  // {
  //   id: 4,
  //   name: "Livbåtlag",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: true,
  //   hasTableTops: false,
  // },
  // {
  //   id: 5,
  //   name: "Skadestedsleder",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: false,
  //   hasTableTops: false,
  // },
  // {
  //   id: 6,
  //   name: "Søk- og redningslag",
  //   status: Status.ERROR,
  //   members: [0, 1, 2, 3, 4],
  //   requiredCompetence: [0, 1, 2],
  //   hasTraining: true,
  //   hasTableTops: false,
  // },
  // {
  //   id: 7,
  //   name: "Førstehjelpslag",
  //   status: Status.OK,
  //   members: [0],
  //   requiredCompetence: [0],
  //   hasTraining: true,
  //   hasTableTops: false,
  // },
  // {
  //   id: 8,
  //   name: "MOB-båtlag",
  //   status: Status.WARNING,
  //   members: [0],
  //   requiredCompetence: [0, 1],
  //   hasTraining: true,
  //   hasTableTops: false,
  // },
// ];

export const teamList = createTeamList();
export const teamById = {};
teamList.forEach(team => teamById[team.id] = team);

