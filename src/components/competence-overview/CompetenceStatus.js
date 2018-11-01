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
  let comment;
  if (!competence) {
    status = Status.ERROR;
    comment = null;
  } else {
    status = competence.status;
    comment = competence.comment;
    if (comment === null) {
      if (competence.validUntil !== null) {
        if (competence.validUntil.getTime() > now.getTime()) {
          comment = `Gyldig til ${moment(competence.validUntil).format('L')}`;
        } else {
          comment = `Utgått ${moment(competence.validUntil).format('L')}`;
        }
      } else {
        comment = 'Gyldig (utgår aldri)'
      }
    }
  }
  return (
    <div>
      <div className={classes.icon}>
        <StatusIcon status={status} />
      </div>
      <Typography variant="body1">{comment}</Typography>
    </div>
  );
};

export default withStyles(styles)(CompetenceStatus);
