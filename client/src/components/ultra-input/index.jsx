import React, { Component } from "react";
import Checkbox from "../input/checkbox";
import Button from "../input/button";

import "./styles.css";

export default class UltraInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  handleCheckbox(event) {
    this.setState({ checkbox: event.target.value });
  }

  handleSend() {
    if (!this.state.input) return;
    this.props.handleNewSinger({
      name: this.state.input,
      reSing: this.state.checkbox,
    });
  }

  render() {
    return (
      <div className="input-container">
        <label className="label-new">Novo Cantor</label>
        <input className="input" type="text" name="name" onChange={this.handleInput} />
        <Checkbox handleCheckbox={this.handleCheckbox}></Checkbox>
        <Button handleSend={this.handleSend}></Button>
      </div>
    );
  }
}
