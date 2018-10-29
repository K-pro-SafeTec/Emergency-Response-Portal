import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


export default class ReportImage extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({
      loaded: true,
    }), this.props.delay);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      const { src, alt } = this.props;
      return <img src={src} alt={alt} />
    } else {
      return <LinearProgress />
    }
  }
}
