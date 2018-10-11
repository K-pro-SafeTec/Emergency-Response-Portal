import React from 'react';
import AppPage from './AppPage';
import Typography from '@material-ui/core/Typography';


const PlaceholderPage = ({ title, back }) => (
  <AppPage
    title={title}
    back={back}
  >
    <br />
    <Typography variant="title" align="center">
      <span role="img" aria-label="Construction Worker">👷</span> Denne siden er ikke implementert ennå
    </Typography>
    <Typography variant="body2" align="center">
      Kom tilbake senere :)
    </Typography>
  </AppPage>
);

export default PlaceholderPage;
