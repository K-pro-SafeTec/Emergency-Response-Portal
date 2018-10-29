import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Home from '@material-ui/icons/Home';
import SafetecLogo from '../../icons/safetec.svg';
import { withStyles } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

const styles = {
  grow: {
    flexGrow: '1',
    marginLeft: '16px',
  },
  homeButton: {
    marginLeft: '-12px',
  },
  safetecLink: {
    lineHeight: 0,
  },
  content: {
    paddingTop: '64px',
  }
};

const AppPage = ({ classes, history, title, children }) => (
  <React.Fragment>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton className={classes.homeButton} component={Link} to="/">
          <Home />
        </IconButton>
        <IconButton disabled={!history.canGo(-1)} onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <IconButton disabled={!history.canGo(1)} onClick={() => history.goForward()}>
          <ArrowForward />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        <a
          href="https://www.safetec.no/"
          className={classes.safetecLink}
        >
          <img
            src={SafetecLogo}
            alt="Levert av Safetec"
            height="44px"
            width="153px"
          />
        </a>
      </Toolbar>
    </AppBar>
    <div className={classes.content}>
      {children}
    </div>
  </React.Fragment>
);

export default withRouter(withStyles(styles)(AppPage));
