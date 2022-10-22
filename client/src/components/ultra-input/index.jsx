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

  handleSend(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.input) return;
    this.props.handleNewSinger({
      name: this.state.input,
      reSing: this.state.checkbox,
    });
    this.handleInput("");
    document.getElementById("input-new-singer").value = "";
  }

  render() {
    return (
      <div className="input-container">
        <div className="input-content">
          <form onSubmit={this.handleSend}>
            <Input
              inputId="input-new-singer"
              handleInput={this.handleInput}
              placeholder="novo cantor"
            ></Input>
          </form>
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
