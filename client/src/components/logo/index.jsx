import React, { Component } from "react";

import "./styles.css";

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <img className="glow" src="Image/brilho-junto.png" alt="logo"></img>
        <img className="logo" src="Image/logo-sem-brilho.png" alt="logo"></img>
      </div>
    );
  }
}
