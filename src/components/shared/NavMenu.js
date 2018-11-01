import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  content: {
    margin: '0 auto',
    maxWidth: '80em',
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const NavMenu = ({ classes, ...rest }) => (
  <div className={classes.content} {...rest} />
);

export default withStyles(styles)(NavMenu);
