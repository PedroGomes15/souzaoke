import React, { Component } from "react";
import Input from "../input/input";
import Button from "../input/button";
import API from "../../apis/api.js";

import "./styles.css";

export default class RoomCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create_room: true,
    };

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleJoinRoom = this.handleJoinRoom.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
  }

  handleChangeName(value) {
    this.setState({ room_name: value });
  }

  handleChangeId(value) {
    this.setState({ room_id: value });
  }

  handleCreateRoom() {
    API.post("room", {
      name: this.state.room_name,
      line: [],
    }).then((response) => {
      let room_id = response.data.room_id;
      this.props.handleSetRoomId(room_id);
    });
  }

  handleJoinRoom() {
    this.props.handleSetRoomId(this.state.room_id);
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
        <div className="container-create-room">
          <p className="join-room-label">
            {this.state.create_room ? "criar sala" : "entrar em sala existente"}
          </p>
          <div className="container-input">
            <Input
              handleInput={this.state.create_room ? this.handleChangeName : this.handleChangeId}
              placeholder={this.state.create_room ? "nome da sala" : "id da sala"}
            ></Input>
          </div>
          <div className="create-room-form-input">
            <Button
              label={this.state.create_room ? "CRIAR" : "ENTRAR"}
              handleSend={this.state.create_room ? this.handleCreateRoom : this.handleJoinRoom}
            ></Button>
            <p className="text-or">ou</p>
            <p
              className="text-link"
              onClick={() => this.setState({ create_room: !this.state.create_room })}
            >
              {this.state.create_room ? "entrar em sala existente" : "criar uma nova sala"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
