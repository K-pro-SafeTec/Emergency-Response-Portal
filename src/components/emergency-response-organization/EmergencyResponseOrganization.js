import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grade from '@material-ui/icons/Grade';
import { withStyles } from '@material-ui/core/styles';
import NavigationButton from './NavigationButton';

const styles = {
  content: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const EmergencyResponseOrganization = ({ classes }) => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">Beredskapsorganisasjon</Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.content}>
      <NavigationButton name="Beredskapslag" Icon={Grade} />
      <NavigationButton name="Kompetansestatus" Icon={Grade} />
      <NavigationButton name="Forenlighetsmatrise" Icon={Grade} />
      <NavigationButton name="Stedfortredere" Icon={Grade} />
      <NavigationButton name="Reserveressurser" Icon={Grade} />
    </div>
  </div>
);

export default withStyles(styles)(EmergencyResponseOrganization);
