import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '1em',
  },
  avatar: {
    height: '4em',
    flex: '0 0 4em',
  },
  info: {
    flex: '1 1 24em',
    padding: '1em',
  },
};

const EntityInfo = ({ classes, Icon, children }) => (
  <div className={classes.container}>
    <Icon className={classes.avatar} />
    <div className={classes.info} children={children} />
  </div>
);

export default withStyles(styles)(EntityInfo);
