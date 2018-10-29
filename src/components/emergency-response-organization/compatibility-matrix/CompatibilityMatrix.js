import React from 'react';
import AppPage from '../../shared/AppPage';

import { withStyles } from "@material-ui/core/styles";
import IllustrationCompatibilityMatrix from '../../../illustrations/comptatibility-matrix.svg';

import compat_image from './compat_matrix.png';

const styles = {
  media: {
    height: 654,
    width: 837
  }
};

function MediaCard() {
  return (
  <AppPage title="Forenlighetsmatrise" back="..">
    <img
        src={IllustrationCompatibilityMatrix}
        alt="Beredskapslag oversikt"
    />
    <img
        src={compat_image}
        alt="Forenlighetsmatrise"
    />
  </AppPage>
);
}


export default withStyles(styles)(MediaCard);
