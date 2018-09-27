import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  navigationButton: {
    padding: '1em',
    margin: '1em',
    height: '15em',
    flex: '1 0 20em',
    display: 'block',
    textAlign: 'center',
  },
  icon: {
    width: '10em',
    height: '10em',
  },
};

const NavMenuItem = ({ classes, name, icon, to, ...rest }) => (
  <Button component={Link} to={to} size="large" variant="outlined" className={classes.navigationButton} {...rest}>
    <img src={icon} alt={name} className={classes.icon} />
    <div>
      {name}
    </div>
  </Button>
);

export default withStyles(styles)(NavMenuItem);
