import React from 'react';
import AppPage from '../../shared/AppPage';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import IllustrationCompatibilityMatrix from '../../../illustrations/comptatibility-matrix.svg';

import compat_image from './compat_matrix.png';

const styles = {
  media: {
    height: 654,
    width: 837
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
  <AppPage title="Forenlighetsmatrise" back="..">
    <img
        src={IllustrationCompatibilityMatrix}
        alt="Emergency response team hierarchy"
    />
    <img
        src={compat_image}
        alt="Compatability matrix"
    />
  </AppPage>
);
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
