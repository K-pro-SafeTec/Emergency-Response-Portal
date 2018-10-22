import React from 'react';
import AppPage from '../../shared/AppPage';
import { performanceRequirementById } from '../../../dummy-data/performanceRequirement';


const ReportGenerator = ({ match, classes }) => {
  const performanceRequirement = performanceRequirementById[match.params.performanceRequirementId];
  if (performanceRequirement && performanceRequirement.report) {
    return (
      <AppPage title="Rapportgenerator" back="../..">
        <img
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

export default ReportGenerator;
