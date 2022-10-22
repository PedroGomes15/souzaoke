import React, { Component } from "react";
import UltraInput from "../ultra-input";
import { toast } from "react-toastify";
import RefreshOutlined from "@mui/icons-material/RefreshOutlined";
import Button from "../input/button";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

export default class SingerLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersInLine: this.props.line,
    };

    this.handleNewSinger = this.handleNewSinger.bind(this);
    this.handlePrepareToRemove = this.handlePrepareToRemove.bind(this);
    this.handleRemoveSinger = this.handleRemoveSinger.bind(this);
    this.handlePrepareLink = this.handlePrepareLink.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.line !== prevProps.line) {
      this.setState({ usersInLine: this.props.line });
    }
  }

  handleNewSinger(singer) {
    if (singer != null && singer.name !== "") {
      this.setState({ usersInLine: [...this.state.usersInLine, singer] }, () => {
        this.props.handleNewSinger(this.state.usersInLine);
      });
    }
  }

  handlePrepareToRemove(index) {
    this.setState({ prepareToRemove: index });

    if (index) {
      setTimeout(() => {
        this.handlePrepareToRemove(null);
      }, 5000);
    }
  }

  handleRemoveSinger(index) {
    let tempLine = this.state.usersInLine;
    tempLine.splice(index, 1);
    this.setState({ usersInLine: tempLine }, () => {
      this.props.handleNewSinger(this.state.usersInLine);
      this.handlePrepareToRemove(null);
    });
  }

  handlePrepareLink() {
    navigator.clipboard.writeText(window.location.href);
    toast.dark("O link da sala foi copiado", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  render() {
    return (
      <div className="containerSinger">
        <div id="scrollPath"></div>
        <p
          className="roomTitle"
          onClick={() => {
            this.handlePrepareLink();
          }}
        >
          {this.props.roomName}
        </p>
        <p
          className="roomId"
          onClick={() => {
            this.handlePrepareLink();
          }}
        >
          id: {this.props.roomId}
        </p>
        <UltraInput handleNewSinger={this.handleNewSinger}></UltraInput>
        <div className="listLineContainer">
          {this.state.usersInLine.map((element, i) => {
            return (
              <div className="lineContainer" key={i}>
                {this.state.prepareToRemove === i ? (
                  <div className="removeSinger" onClick={() => this.handleRemoveSinger(i)}>
                    X
                  </div>
                ) : (
                  <div
                    className="lineIndex"
                    onClick={() =>
                      this.handlePrepareToRemove(this.state.prepareToRemove ? null : i)
                    }
                  >
                    {i + 1}
                  </div>
                )}
                <div className="lineName">{element.name}</div>
                <RefreshOutlined className="refresh-material-icons"></RefreshOutlined>
              </div>
            );
          })}
        </div>
        {!/Mobi/.test(navigator.userAgent) && (
          <Button label={"Proximo"} handleSend={this.props.handleNextSinger}></Button>
        )}
      </div>
    );
  }
}
