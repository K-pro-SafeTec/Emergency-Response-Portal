import React from 'react';
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
