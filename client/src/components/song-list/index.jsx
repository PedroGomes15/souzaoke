import React, { Component } from "react";
import Search from "../input/search";
import youtube from "../../apis/youtube";
import SongCard from "../song-card";
import ytDurationFormat from "youtube-duration-format";

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

  async handleSubmit(termFromSearchBar) {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    let filteredItens = [];

    filteredItens = await Promise.all(
      response.data.items.map(async (obj) => {
        let f = obj.snippet;
        f.id = obj.id.videoId;

        const t = await youtube.get("/videos", {
          params: {
            id: obj.id.videoId,
            part: "id,contentDetails",
          },
        });
        f.duration = ytDurationFormat(t.data.items[0].contentDetails.duration);

        return f;
      })
    );

    this.setState({ songList: filteredItens });
  }

  render() {
    return (
      <div className="container-song-list">
        <Search handleSubmit={this.handleSubmit} />
        <div className="container-song-card-list">
          {this.state.songList.map((song) => {
            return (
              <SongCard
                song={song}
                key={song.id}
                handleSelectSong={this.props.handleSelectSong}
              ></SongCard>
            );
          })}
        </div>
      </div>
    );
  }
}
