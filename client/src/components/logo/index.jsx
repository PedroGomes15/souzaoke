import React, { Component } from "react";

import "./styles.css";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img className="glow" src="Image/brilho-junto.png" alt="logo"></img>
        <img className="logo" src="Image/logo-sem-brilho.png" alt="logo"></img>
      </div>
    );
  }
}
