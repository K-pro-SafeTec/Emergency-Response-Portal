import React from 'react';
import StatusIcon from '../shared/StatusIcon';
import Status from '../../helpers/Status';
import moment from 'moment';

const now = new Date();

export default ({ competence }) => {
  let status;
  let message;
  if (!competence) {
    status = Status.ERROR;
    message = 'Ikke gjennomført';
  } else {
    status = competence.status;
    if (competence.validUntil !== null) {
      if (competence.validUntil.getTime() > now.getTime()) {
        message = `Gyldig til ${moment(competence.validUntil).format('L')}`;
      } else {
        message = `Utgått ${moment(competence.validUntil).format('L')}`;
      }
    } else {
      message = 'Gyldig (utgår aldri)'
    }
  }
  return (
    <div>
      <StatusIcon status={status} />
      <div>
        {message}
      </div>
    </div>
  );
};
