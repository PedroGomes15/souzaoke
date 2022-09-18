import React, { Component } from "react";
import Checkbox from "../input/checkbox";
import Button from "../input/button";
import Input from "../input/input";

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

  handleInput(value) {
    this.setState({ input: value });
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
        <div className="input-content">
          <Input handleInput={this.handleInput} placeholder="Novo Contor"></Input>
          <Button
            handleSend={this.handleSend}
            label="+"
            style={{ width: "fit-content", padding: "10px 15px" }}
          ></Button>
        </div>
        <Checkbox handleCheckbox={this.handleCheckbox}></Checkbox>
      </div>
    );
  }
}
