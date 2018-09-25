import React, {Component} from 'react';
import Person from "./Person";

export default class Team extends Component {
  render() {
    return(
      <div style={{marginBottom: '32px'}}>
        <h2>{this.props.name}</h2>
        {this.props.backups.map(({ id, name, status }) => (
          <Person key={id} name={name} status={status}/>
        ))}
      </div>
    )
  }
}
