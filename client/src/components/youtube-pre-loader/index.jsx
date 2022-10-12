import React, { Component } from "react";

import "./styles.css";

export default class YoutubePreLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pre-loader-container">
        <p className="description">é hora do show...</p>
        <p className="singer-name">{this.props.singer.name}</p>
      </div>
    );
  }
}
