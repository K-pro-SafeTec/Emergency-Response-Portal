import React from 'react';
import Chip from '@material-ui/core/Chip';

export class ParticipantsSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emergencyManagement: false,
      incidentLeader: false,
      controlRoomOperators: false,
      searchAndRescueTeam: false,
      lifeBoatTeam: false,
      helideckTeam: false,
      nurse: false,
      firstAidTeam: false,
      mobTeam: false,
    };
    this.toggleChip = this.toggleChip.bind(this);
  }

  toggleChip(event) {
    const key = `${event.currentTarget.id}`;
    const oldState = this.state[key];
    this.setState({
      [key]: !oldState
    });
    let state = this.state;
    state[key] = !oldState;
    this.props.onChange(state);
  }

  render() {
    return (
      <div>
        <Chip id="emergencyManagement" label="Beredskapsledelse" onClick={this.toggleChip} color={this.state.emergencyManagement ? "primary" : "default"} />
        <Chip id="incidentLeader" label="Skadestedsleder" onClick={this.toggleChip} color={this.state.incidentLeader ? "primary" : "default"} />
        <Chip id="controlRoomOperators" label="Kontrollromsoperatører" onClick={this.toggleChip} color={this.state.controlRoomOperators ? "primary" : "default"} />
        <Chip id="searchAndRescueTeam" label="Søk- og redningslag" onClick={this.toggleChip} color={this.state.searchAndRescueTeam ? "primary" : "default"} />
        <Chip id="lifeBoatTeam" label="Livbåtlag" onClick={this.toggleChip} color={this.state.lifeBoatTeam ? "primary" : "default"} />
        <Chip id="helideckTeam" label="Helidekklag" onClick={this.toggleChip} color={this.state.helideckTeam ? "primary" : "default"} />
        <Chip id="nurse" label="Sykepleier" onClick={this.toggleChip} color={this.state.nurse ? "primary" : "default"} />
        <Chip id="firstAidTeam" label="Førstehjelpslag" onClick={this.toggleChip} color={this.state.firstAidTeam ? "primary" : "default"} />
        <Chip id="mobTeam" label="	MOB-båtlag" onClick={this.toggleChip} color={this.state.mobTeam ? "primary" : "default"} />
      </div>
    );
  }
}
