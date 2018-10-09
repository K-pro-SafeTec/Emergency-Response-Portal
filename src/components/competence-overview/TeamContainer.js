import React from 'react';
import Team from "./Team";

export default class TeamContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: 0,
      order: "desc",
    }
  }

  handleRequestSort = (event, property) => {
    console.log(property)

    const orderBy = property;
    let order = "asc";
    if (this.state.orderBy === property && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  createSortHandler = property => event => {
    this.handleRequestSort(event, property);
  };

  render() {
    const teamId = this.props.match.params.teamId;
    return (
      <Team
        teamId={teamId}
        orderBy={this.state.orderBy}
        order={this.state.order}
        createSortHandler={this.createSortHandler}
      />
    )
  }
}