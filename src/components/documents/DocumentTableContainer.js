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

  render() {
    return (
      <DocumentTable documents={this.props.documents} orderBy={this.state.orderBy} order={this.state.order} />
    )
  }

}

export default DocumentTableContainer;
