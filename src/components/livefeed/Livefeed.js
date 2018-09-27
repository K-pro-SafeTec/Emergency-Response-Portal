import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WarningRed from '../../icons/livefeed/red_warning.svg';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import Status from './Status';
import Feed from './Feed';
import PreparednessSummary from './PreparednessSummary';
import ExternalResources from './ExternalResources';
import AppPage from '../shared/AppPage';

const feed = [
  {
    id: 0,
    message: "Livbåt 2 er ute av drift pga. vedlikehold",
  },
  {
    id: 1,
    message: "Overhaling av brannpumpe 1 pågår",
  },
  {
    id: 2,
    message: "Hotline til Ekofisk er nede",
  },
  {
    id: 3,
    message: "Arbeid over sjø på RP",
  }
]

const teams = [
  {
    name: "Beredskapsledelse",
    status: Status.OK,
  },
  {
    name: "Skadestedsleder",
    status: Status.OK,
  },
  {
    name: "Søk- og redningslag",
    status: Status.ERROR,
  },
  {
    name: "Sykepleier",
    status: Status.OK,
  },
  {
    name: "Førstehjelpslag",
    status: Status.OK,
  },
  {
    name: "Livbåtlag",
    status: Status.OK,
  },
  {
    name: "Helidekklag",
    status: Status.OK,
  },
  {
    name: "MOB-båt lag",
    status: Status.WARNING,
  }
];

const externalResources = [
  {
    name: "Brannslukkingsbåt",
    status: Status.OK,
  },
  {
    name: "MEDEVAC",
    status: Status.WARNING,
    message: "På vei onshore",
  },
  {
    name: "Livbåt",
    status: Status.OK,
  },
];

const styles = {
  content: {
    padding: '1em',
  },
  feedPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  feedWarning: {
    margin: '1em',
  },
  feedList: {
    flex: '1 1 30em',
  }
};

class Livefeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed,
    };
    this.onFeedSortEnd = this.onFeedSortEnd.bind(this);
    this.deleteFeedItem = this.deleteFeedItem.bind(this);
    this.addFeedItem = this.addFeedItem.bind(this);
  }

  onFeedSortEnd({ oldIndex, newIndex }) {
    this.setState({
      feed: arrayMove(this.state.feed, oldIndex, newIndex),
    });
  }

  deleteFeedItem(id) {
    this.setState(({ feed }) => ({
      feed: feed.filter(item => item.id !== id),
    }));
  }

  addFeedItem(item) {
    this.setState(({ feed }) => ({
      feed: [...feed, item],
    }));
  }

  render() {
    const { classes } = this.props;
    const { feed } = this.state;

    return (
      <AppPage title="Beredskapsstatus - Live feed">
        <div className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.feedPaper}>
                <img className="feedWarning" src={WarningRed} alt="Warning"/>
                <Feed
                  items={feed}
                  onSortEnd={this.onFeedSortEnd}
                  deleteItem={this.deleteFeedItem}
                  addItem={this.addFeedItem}
                  maxItems={7}
                  className={classes.feedList}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <PreparednessSummary teams={teams} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <ExternalResources
                  items={externalResources}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </AppPage>
    );
  }
}

export default withStyles(styles)(Livefeed);
