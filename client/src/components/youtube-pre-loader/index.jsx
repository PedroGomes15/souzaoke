import React, { Component } from "react";

import "./styles.css";

export default class YoutubePreLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRows(rows, element, i) {
    let size = 10 + Math.random() * 120 + "px";
    let style = {
      left: (Math.random() * (0.9 - 0.05) + 0.05) * 100 + "%",
      top: (Math.random() * (0.9 - 0.05) + 0.05) * 100 + "%",
      width: size,
      height: size,
      animationName: "show",
      animationDuration: "3s",
      animationDelay: i * 0.1 + "s",
      animationIterationCount: "infinite",
      opacity: 0,
      position: "absolute",
    };

    return (
      <img style={style} className="star-image-preloader" src="Image/star.png" alt="star"></img>
    );
  }

  render() {
    /*let rows = [];
    for (let i = 0; i < 15; i++) {
      rows.push(i);
    }*/

    return (
      <div className="pre-loader-container">
        {/*{rows.map((element, i) => {
          return this.renderRows(rows, element, i);
        })}*/}
        <p className="description">é hora do show...</p>
        {/*<p className="singer-name">{this.props.singer.name}</p>*/}
      </div>
    );
  }
}
