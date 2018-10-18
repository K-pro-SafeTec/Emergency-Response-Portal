import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WarningRed from '../../icons/livefeed/red_warning.svg';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import Status from '../../helpers/Status';
import Feed from './Feed';
import PreparednessSummary from './PreparednessSummary';
import ExternalResources from './ExternalResources';
import AppPage from '../shared/AppPage';
import { teamList } from '../../dummy-data/team';

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

const externalResources = [
  {
    name: "Beredskapsfartøy",
    status: Status.OK,
  },
  {
    name: "SAR-helikopter",
    status: Status.WARNING,
    message: "På vei onshore",
  },
  {
    name: "MOB-båt",
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
    margin: '3em',
    width: '10em',
    height: '10em',
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
      inputText: '',
    };
    this.onFeedSortEnd = this.onFeedSortEnd.bind(this);
    this.deleteFeedItem = this.deleteFeedItem.bind(this);
    this.addFeedItem = this.addFeedItem.bind(this);
    this.setInputText = this.setInputText.bind(this);
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

  setInputText(inputText) {
    this.setState({
      inputText,
    });
  }

  render() {
    const { classes } = this.props;
    const { feed, inputText } = this.state;

    return (
      <AppPage title="Beredskapsstatus - Live feed" back="..">
        <div className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.feedPaper}>
                <img  src={WarningRed} alt="Advarsel" className={classes.feedWarning} />
                <Feed
                  items={feed}
                  onSortEnd={this.onFeedSortEnd}
                  deleteItem={this.deleteFeedItem}
                  addItem={this.addFeedItem}
                  setInputText={this.setInputText}
                  inputText={inputText}
                  maxItems={7}
                  className={classes.feedList}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <PreparednessSummary teams={teamList} />
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
