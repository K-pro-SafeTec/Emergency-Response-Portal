import React from 'react';
import AppPage from '../shared/AppPage';
import DocumentTable from './DocumentTable';
import { documentList } from '../../dummy-data/document';
import { drawingList } from '../../dummy-data/drawing';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';


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

const Documents = ({ classes }) => (
  <AppPage title="Beredskapsdokumenter" back="..">
    <div className={classes.tableContainer}>
      <Paper className={classes.table}>
        <Typography
          variant="headline"
          align="center"
        >
          Dokumenter
        </Typography>
        <DocumentTable documents={documentList} />
      </Paper>
      <Paper className={classes.table}>
        <Typography
          variant="headline"
          align="center"
        >
          Tegninger
        </Typography>
        <DocumentTable documents={drawingList} />
      </Paper>
    </div>
  </AppPage>
);

export default withStyles(styles)(Documents);
