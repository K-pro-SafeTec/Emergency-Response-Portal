import React from 'react';
import AppPage from '../../shared/AppPage';
import Status from '../../../helpers/Status';
import Team from "./Team";
import { withStyles } from '@material-ui/core'

const teams = [
  {
    id: 0,
    name: "Beredskapsledelse",
    backups: [{
      id: 0,
      name: "Ole",
      status: Status.OK
    }],
  },
  {
    id: 1,
    name: "Skadestedsleder",
    backups: [{
      id: 1,
      name: "Pål",
      status: Status.WARNING
    }],
  },
  {
    id: 2,
    name: "Søk- og redningslag",
    backups: [{
      id: 2,
      name: "Anders",
      status: Status.ERROR
    },
    {
      id: 3,
      name: "Hanna",
      status: Status.OK
    }],
  },
  {
    id: 3,
    name: "Sykepleier",
    backups: [{
      id: 4,
      name: "Tormod",
      status: Status.OK
    }],
  },
  {
    id: 4,
    name: "Førstehjelpslag",
    backups: [{
      id: 5,
      name: "Britt",
      status: Status.OK
    }],
  },
  {
    id: 5,
    name: "Livbåtlag",
    backups: [{
      id: 6,
      name: "Asbjørn",
      status: Status.ERROR
    },
    {
      id: 7,
      name: "Tore",
      status: Status.OK
    },
    {
      id: 8,
      name: "Anne",
      status: Status.OK
    }],
  },
  {
    id: 6,
    name: "Helidekklag",
    backups: [{
      id: 9,
      name: "Ingrid",
      status: Status.OK
    },
    {
      id: 10,
      name: "Hilde",
      status: Status.WARNING
    },
    {
      id: 11,
      name: "Tor Bjarne",
      status: Status.OK
    }],
  },
  {
    id: 7,
    name: "MOB-båt lag",
    backups: [{
      id: 12,
      name: "Harald",
      status: Status.OK
    }],
  }
];

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
};

const BackupResources = ({ classes }) => (
  <AppPage title="Reserveressurser" back="..">
    <div className={classes.container}>
      {teams.map(({id, name, backups}) => (
        <Team key={id} name={name} backups={backups} />
      ))}
    </div>
  </AppPage>
);

export default withStyles(styles)(BackupResources);
