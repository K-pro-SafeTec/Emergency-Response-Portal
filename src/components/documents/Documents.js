import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import AppPage from '../shared/AppPage';
import { documentList } from '../../dummy-data/document';
import { drawingList } from '../../dummy-data/drawing';
import DocumentTableContainer from "./DocumentTableContainer";
import DocumentView from "./DocumentView";


const styles = {
  tableContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  table: {
    flex: '1 1 32em',
    margin: '1em',
    paddingTop: '0.5em',
  },
};

const Documents = ({ classes, match }) => (
  <Switch>
    <Route exact path={match.path}>
      <AppPage title="Beredskapsdokumenter" back="..">
        <div className={classes.tableContainer}>
          <Paper className={classes.table}>
            <Typography
              variant="headline"
              align="center"
            >
              Dokumenter
            </Typography>
            <DocumentTableContainer documents={documentList} />
          </Paper>
          <Paper className={classes.table}>
            <Typography
              variant="headline"
              align="center"
            >
              Tegninger
            </Typography>
            <DocumentTableContainer documents={drawingList} />
          </Paper>
        </div>
      </AppPage>
    </Route>
    <Route path={`${match.url}/:documentId/`} component={DocumentView} />
  </Switch>
);

export default withStyles(styles)(Documents);
