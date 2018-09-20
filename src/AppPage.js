import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SafetecLogo from './icons/safetec_logo.png';
import { withStyles } from '@material-ui/core';

const styles = {
  grow: {
    flexGrow: '1',
  },
}

const AppPage = ({ classes, title, Component }) => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        <a href="https://www.safetec.no/">
          <img
            src={SafetecLogo}
            alt="Levert av Safetec"
            height="40px"
          />
        </a>
      </Toolbar>
    </AppBar>
    <Component />
  </React.Fragment>
);

export default withStyles(styles)(AppPage);
