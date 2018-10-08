import React from 'react';
import StatusIcon from '../shared/StatusIcon';
import Status from '../../helpers/Status';
import moment from 'moment';
import { Typography, withStyles } from '@material-ui/core';

const now = new Date();

const styles = {
  icon: {
    margin: '0 4px',
    float: 'left',
  },
};

const CompetenceStatus = ({ classes, competence }) => {
  let status;
  let validityMessage;
  let comment;
  if (!competence) {
    status = Status.ERROR;
    validityMessage = 'Ikke gjennomført';
    comment = null;
  } else {
    status = competence.status;
    comment = competence.comment;
    if (competence.validUntil !== null) {
      if (competence.validUntil.getTime() > now.getTime()) {
        validityMessage = `Gyldig til ${moment(competence.validUntil).format('L')}`;
      } else {
        validityMessage = `Utgått ${moment(competence.validUntil).format('L')}`;
      }
    } else {
      validityMessage = 'Gyldig (utgår aldri)'
    }
  }
  return (
    <div>
      <div className={classes.icon}>
        <StatusIcon status={status} />
      </div>
      <Typography variant="body1">{validityMessage}</Typography>
      <Typography variant="caption">{comment}</Typography>
    </div>
  );
};

export default withStyles(styles)(CompetenceStatus);
