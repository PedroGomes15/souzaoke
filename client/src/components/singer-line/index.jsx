import React, { Component } from "react";
import UltraInput from "../ultra-input";

import "./styles.css";

export default class SingerLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInLine: this.props.line,
    };

    this.nextOnLine = this.nextOnLine.bind(this);
    this.handleNewSinger = this.handleNewSinger.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.line !== prevProps.line) {
      this.setState({ usersInLine: this.props.line });
    }
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
      <div className="containerSinger">
        <div id="scrollPath"></div>
        <p className="roomTitle">{this.props.roomName}</p>
        <UltraInput handleNewSinger={this.handleNewSinger}></UltraInput>
        <div className="listLineContainer">
          {this.state.usersInLine.map((element, i) => {
            return (
              <div className="lineContainer" key={i}>
                <div className="lineIndex">{i + 1}</div>
                <div className="lineName">{element.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
