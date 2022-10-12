import React, { Component } from "react";

import "./styles.css";

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="container-song-card"
        onClick={() => {
          this.props.handleSelectSong(this.props.song);
        }}
      >
        <div
          style={{
            width: this.props.song.thumbnails.medium.width,
            height: this.props.song.thumbnails.medium.height,
            backgroundImage: `url(${this.props.song.thumbnails.medium.url})`,
          }}
          className="song-card-image"
        >
          <div className="song-card-duration">
            <p>{this.props.song.duration}</p>
          </div>
        </div>
        <p className="song-title">{this.props.song.title}</p>
      </div>
    );
  }
}
