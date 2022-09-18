import React, { Component } from "react";

import "./styles.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          style={this.props.style}
          className="button-send"
          onClick={this.props.handleSend}
          disabled={this.props.disabled}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}
