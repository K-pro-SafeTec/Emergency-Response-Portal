import React from 'react';
import AppPage from '../../shared/AppPage';
import { performanceRequirementById } from '../../../dummy-data/performanceRequirement';
import { withStyles } from '@material-ui/core';


const styles = {
  report: {
    margin: '1em',
  },
};

const ReportGenerator = ({ match, classes }) => {
  const performanceRequirement = performanceRequirementById[match.params.performanceRequirementId];
  if (performanceRequirement && performanceRequirement.report) {
    return (
      <AppPage title="Rapportgenerator" back="../..">
        <img
          className={classes.report}
          src={performanceRequirement.report}
          alt={performanceRequirement.id}
        />
      </AppPage>
    );
  }
  return (
    <AppPage title="Rapportgenerator" back="../..">
      Kan ikke generere rapport.
    </AppPage>
  );
};

export default withStyles(styles)(ReportGenerator);
