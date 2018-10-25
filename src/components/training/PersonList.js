import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import { raw_person_list } from "../../raw-data/raw_person";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    padding: 0,
  }
});

class PersonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    }
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <Typography variant="subheading" style={{marginTop: '24px'}} gutterBottom>Deltakere:</Typography>
        <List>
          {raw_person_list
            .filter(person => person.Beredskapslag_1 === this.props.scenario.team
              || person.Beredskapslag_2 === this.props.scenario.team
              || person.Beredskapslag_3 === this.props.scenario.team)
            .map((person, key) => (
              <ListItem key={key} className={classes.listItem} button onClick={this.handleToggle(key)}>
                <Checkbox
                  color={"primary"}
                  checked={this.state.checked.indexOf(key) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={person.first_name + " " + person.last_name} />
              </ListItem>
            ))
          }
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(PersonList);
