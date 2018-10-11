import React from 'react';
import Deputies from "./Deputies";

class DeputiesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: "beredskapsrolle",
      order: "asc",
    };
  }

  handleRequestSort = orderBy => {
    let order = "asc";
    if (this.state.orderBy === orderBy && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  render() {
    return (
      <Deputies orderBy={this.state.orderBy} order={this.state.order} handleRequestSort={this.handleRequestSort}/>
    )
  }
}

export default DeputiesContainer;
