import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default ({ title, Component }) => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">{title}</Typography>
      </Toolbar>
    </AppBar>
    <Component />
  </React.Fragment>
);
