import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Warning from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import Status from './Status';
import Feed from './Feed';
import PreparednessSummary from './PreparednessSummary';

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
    width: '4em',
    height: '4em',
    margin: '1em',
  },
  feedList: {
    flex: '1',
    minWidth: '30em',
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
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">Status beredskap - live feed</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.feedPaper}>
                <Warning color="error" className={classes.feedWarning} />
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
                <Typography variant="title">Beredskapsorganisasjon</Typography>
                <PreparednessSummary teams={teams} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <PreparednessSummary teams={teams} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Livefeed);
