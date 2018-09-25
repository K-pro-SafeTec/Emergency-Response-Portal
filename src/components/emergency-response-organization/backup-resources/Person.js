import React, {Component} from 'react';
import StatusIcon from "../../livefeed/StatusIcon";
import '../../../styles/Calendar.css'
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";

export default class Person extends Component {
  render() {
    return(
      <div className={"flex"}>
        <ListItemIcon style={{ fontSize: '40px', alignSelf: 'center' }}>
          <StatusIcon status={this.props.status} />
        </ListItemIcon>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}
