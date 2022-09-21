import React, { Component } from "react";

import "./styles.css";

export default class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox-container">
        <label className="label">voltar para fila</label>
        <input type="checkbox" id="toggle" onChange={this.props.handleCheckbox} />
      </div>
    );
  }
}
