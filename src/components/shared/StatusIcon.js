import React from 'react';
import Status from '../../helpers/Status';

// Icons
import WarningYellow from '../../icons/livefeed/yellow_warning.svg';
import Checkmark from '../../icons/livefeed/checkmark.svg';
import Error from '../../icons/livefeed/not-checkmark.svg';

const statusIcons = new Map([
  [Status.OK, (props) => <img src={Checkmark} alt="Ok" height="35em" width="35em" {...props} />],
  [Status.WARNING, (props) => <img src={WarningYellow} alt="Advarsel" height="35em" width="35em" {...props} />],
  [Status.ERROR, (props) => <img src={Error} alt="OBS!" height="35em" width="35em" {...props} />],
]);

export default ({ status, ...rest }) => {
  const Icon = statusIcons.get(status);
  return <Icon {...rest} />
}
