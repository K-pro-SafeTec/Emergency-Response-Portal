import React from 'react';
import AppPage from '../../shared/AppPage';
import { performanceRequirementById } from '../../../dummy-data/performanceRequirement';
import ReportImage from './ReportImage';
import seedrandom from 'seedrandom';


const ReportGenerator = ({ match }) => {
  const performanceRequirement = performanceRequirementById[match.params.performanceRequirementId];
  if (performanceRequirement && performanceRequirement.report) {
    return (
      <AppPage title="Rapportgenerator" back="../..">
        <ReportImage
          src={performanceRequirement.report}
          alt={`${performanceRequirement.id} - ${performanceRequirement.description}`}
          delay={1000 + seedrandom(performanceRequirement.id)() * 1000}
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
