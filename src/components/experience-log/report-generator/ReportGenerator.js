import React from 'react';
import AppPage from '../../shared/AppPage';
import { performanceRequirementList } from '../../../dummy-data/performanceRequirement';
import EntityInfo from '../../shared/EntityInfo';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Timeline from '@material-ui/icons/Timeline';
import { withStyles } from '@material-ui/core';


const styles = {
  paper: {
    margin: '1em',
  },
};

const ReportGenerator = ({ classes }) => (
  <AppPage title="Rapportgenerator" back="..">
    {
      performanceRequirementList
        .filter(performanceRequirement => performanceRequirement.report)
        .map(performanceRequirement => (
          <Paper key={performanceRequirement.id} className={classes.paper}>
            <EntityInfo Icon={Timeline}>
              <Typography variant="title">{performanceRequirement.id}</Typography>
              <Typography variant="body1" paragraph>{performanceRequirement.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`report/${performanceRequirement.id}/`}
              >
                Generér rapport
              </Button>
            </EntityInfo>
          </Paper>
        ))
    }
  </AppPage>
);

export default withStyles(styles)(ReportGenerator);
