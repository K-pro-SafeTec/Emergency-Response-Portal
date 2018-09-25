import React from 'react';
import StatusIcon from "../../livefeed/StatusIcon";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";

const Person = (props) => {
    return(
      <div style={{display: 'flex'}}>
        <ListItemIcon style={{ fontSize: '40px', alignSelf: 'center' }}>
          <StatusIcon status={props.status} />
        </ListItemIcon>
        <h3>{props.name}</h3>
      </div>
    )
};

export default Person;
