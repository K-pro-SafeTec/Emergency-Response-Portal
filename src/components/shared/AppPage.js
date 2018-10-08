import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Home from '@material-ui/icons/Home';
import SafetecLogo from '../../icons/safetek_for_now.svg';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  grow: {
    flexGrow: '1',
  },
  homeButton: {
    marginLeft: '-12px',
  },
  backButton: {
    marginRight: '16px',
  },
};

const AppPage = ({ classes, title, back, children }) => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <Toolbar>
        {back && (
          <div>
            <IconButton className={classes.homeButton} component={Link} to="/">
              <Home />
            </IconButton>
            <IconButton className={classes.backButton} component={Link} to={back}>
              <ArrowBack />
            </IconButton>
          </div>
        )}
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
    {children}
  </React.Fragment>
);

export default withStyles(styles)(AppPage);
