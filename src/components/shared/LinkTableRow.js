import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';


const styles = {
  noUnderline: {
    textDecoration: 'none',
  },
};

const LinkTableRow = ({ classes, ...rest }) => (
  <TableRow
    hover
    component={Link}
    className={classes.noUnderline}
    {...rest}
  />
);

export default withStyles(styles)(LinkTableRow);
