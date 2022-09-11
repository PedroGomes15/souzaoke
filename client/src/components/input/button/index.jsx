import React, { Component } from "react";

import "./styles.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={this.props.style}>
        <button className="button-send" onClick={this.props.handleSend}>
          {this.props.label}
        </button>
      </div>
    );
  }
}
