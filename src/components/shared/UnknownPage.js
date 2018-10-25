import React from 'react';
import AppPage from './AppPage';
import Typography from '@material-ui/core/Typography';


const UnknownPage = ({ title, back }) => (
  <AppPage
    title={title}
    back={back}
  >
    <br />
    <Typography variant="title" align="center">
      <span role="img" aria-label="Confused">😕</span> Fant ikke siden
    </Typography>
  </AppPage>
);

export default UnknownPage;
