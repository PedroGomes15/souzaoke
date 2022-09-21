import React, { Component } from "react";
import RoomCreator from "../room_creator";

import "./styles.css";

export default class RoomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRows(rows, element, i) {
    let elementCount = 100 / rows.length;
    let size = 10 + Math.random() * 80 + "px";
    let style = {
      left: elementCount * i - elementCount / 2 + "%",
      width: size,
      height: size,
      animationDelay: Math.random() * 40 + "s",
      animationDuration: 10 + Math.random() * 20 + "s",
    };

    return (
      <li key={i} style={style}>
        <img className="star-image" src="Image/star.png" alt="star"></img>
      </li>
    );
  }

  render() {
    let rows = [];
    for (let i = 0; i < 15; i++) {
      rows.push(i);
    }
    return (
      <div className="container-room">
        <ul className="circles">
          {rows.map((element, i) => {
            return this.renderRows(rows, element, i);
          })}
        </ul>
        <RoomCreator handleSetRoomId={this.props.handleSetRoomId}></RoomCreator>
      </div>
    );
  }
}
