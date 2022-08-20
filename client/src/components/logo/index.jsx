import React, { Component } from "react";

import "./styles.css";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img className="logo" src="logo.png" alt="logo"></img>
      </div>
    );
  }
}
