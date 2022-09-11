import React, { Component } from "react";

import "./styles.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.handleInput(event.target.value);
  }

  render() {
    return (
      <div>
        {this.props.label && <label className="label-new">{this.props.label}</label>}
        <input className="input" type="text" name="name" placeholder={this.props.placeholder} onChange={this.handleInput} />
      </div>
    );
  }
}
