import React from 'react';
import Team from "./Team";

export default class TeamContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      orderBy: "name",
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "asc";
    if (this.state.orderBy === property && this.state.order === "asc") {
      order = "desc";
    }
    this.setState({ order, orderBy });
  };

  render() {
    const teamId = this.props.match.params.teamId;
    return (
      <Team teamId={teamId}/>
    )
  }
}