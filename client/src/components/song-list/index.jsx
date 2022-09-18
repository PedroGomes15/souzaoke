import React, { Component } from "react";
import Search from "../input/search";
import youtube from "../../apis/youtube";

import "./styles.css";

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      songList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    return (
      <div className="containerSongList">
        <Search handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
