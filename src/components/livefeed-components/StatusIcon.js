import React from 'react';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error';
import Status from './Status';


const statusIcons = new Map([
  [Status.OK, ({ style = {}, ...rest }) => <CheckCircle style={{ ...style, color: "green" }} {...rest} />],
  [Status.WARNING, ({ style = {}, ...rest }) => <Warning style={{ ...style, color: "yellow" }} {...rest} />],
  [Status.ERROR, ({ style = {}, ...rest }) => <Error style={{ ...style, color: "red" }} {...rest} />],
]);

export default ({ status, ...rest }) => {
  const Icon = statusIcons.get(status);
  return <Icon {...rest} />
}
