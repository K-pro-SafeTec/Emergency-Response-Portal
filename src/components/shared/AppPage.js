import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import SafetecLogo from '../../icons/safetek_for_now.svg';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  grow: {
    flexGrow: '1',
  },
  menuButton: {
    marginLeft: '-12px',
    marginRight: '20px',
  }
}

const AppPage = ({ classes, title, back, children }) => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <Toolbar>
        {back && (
          <IconButton className={classes.menuButton} component={Link} to={back}>
            <ArrowBack />
          </IconButton>
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
