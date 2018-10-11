import React, { Component } from 'react';
import LessonsLearned from "./LessonsLearned";

class LessonsLearnedContainer extends Component {

  constructor(props) {
     super(props);
     this.state = {
       orderBy: "action",
       order: "asc",
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
    return (
      <LessonsLearned
        orderBy={this.state.orderBy}
        order={this.state.order}
        tableHeadClicked={this.handleRequestSort}
      />
    )
  }
}

export default LessonsLearnedContainer;