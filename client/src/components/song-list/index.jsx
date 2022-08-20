import React, { Component } from "react";
import Search from "../input/search";
import youtube from "../../apis/youtube";

import "./styles.css";

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      songList: [
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (termFromSearchBar) => {
    console.log("Teste ", termFromSearchBar);
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    console.log("Teste ", response.data.items);
    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };

  render() {
    return (
      <div className="containerSongList">
        <Search handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
