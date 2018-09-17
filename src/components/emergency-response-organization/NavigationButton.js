import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  navigationButton: {
    padding: '1em',
    height: '20em',
    flex: '0 0 20em',
    display: 'block',
  },
  icon: {
    width: '5em',
    height: '5em',
  },
};

const NavigationButton = ({ classes, name, Icon, ...rest }) => (
  <Button size="large" className={classes.navigationButton} {...rest}>
    <Icon className={classes.icon} />
    <div>
      {name}
    </div>
  </Button>
);

export default withStyles(styles)(NavigationButton);
