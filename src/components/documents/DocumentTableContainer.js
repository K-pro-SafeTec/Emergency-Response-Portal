import React, { Component } from "react";
import DocumentTable from "./DocumentTable";

class DocumentTableContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: "rev",
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
      <DocumentTable
        documents={this.props.documents}
        orderBy={this.state.orderBy}
        order={this.state.order}
        tableHeadClicked={this.handleRequestSort}
      />
    )
  }
}

export default DocumentTableContainer;
