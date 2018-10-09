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

  handleRequestSort = orderBy => {
    let order = "asc";
    if (this.state.orderBy === orderBy && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  render() {
    const teamId = this.props.match.params.teamId;
    return (
      <Team
        teamId={teamId}
        orderBy={this.state.orderBy}
        order={this.state.order}
        tableHeadClicked={this.handleRequestSort}
      />
    )
  }
}