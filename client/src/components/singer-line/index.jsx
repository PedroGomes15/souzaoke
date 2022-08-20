import React, { Component } from "react";
import UltraInput from "../ultra-input";

import "./styles.css";

export default class SingerLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInLine: [
        {
          name: "Pedro",
          reSing: true,
        },
        {
          name: "Sarah",
          reSing: true,
        },
        {
          name: "Luke",
          reSing: false,
        },
      ],
    };

    this.nextOnLine = this.nextOnLine.bind(this);
    this.handleNewSinger = this.handleNewSinger.bind(this);
  }

  nextOnLine() {
    let usersInLineAux = this.state.usersInLine;
    let fElement = usersInLineAux.shift();
    if (fElement.reSing) {
      usersInLineAux.push(fElement);
    }
    this.setState({ usersInLine: usersInLineAux });
  }

  handleNewSinger(singer) {
    if (singer != null && singer.name !== "") {
      this.setState({ usersInLine: [...this.state.usersInLine, singer] });
    }
  }

  render() {
    return (
      <div className="container-singer">
        <div id="scrollPath"></div>
        <div className="list-line-container">
          {this.state.usersInLine.map((element, i) => {
            return (
              <div className="lineContainer" key={i}>
                <div className="lineIndex">#{i + 1}</div>
                <div className="lineName">{element.name}</div>
              </div>
            );
          })}
        </div>
        <UltraInput handleNewSinger={this.handleNewSinger}></UltraInput>
      </div>
    );
  }
}
