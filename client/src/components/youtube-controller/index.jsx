import React, { Component } from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseArrowOutlinedIcon from "@mui/icons-material/PauseOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import FullscreenOutlined from "@mui/icons-material/FullscreenOutlined";
import YouTube from "react-youtube";
import YoutubePreLoader from "../youtube-pre-loader";

import "./styles.css";

const opts = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    rel: 0,
    mode: "opaque",
    frameBorder: 0,
    cc_load_policy: 0,
    enablejsapi: 0,
    modestbranding: 1,
  },
};

export default class YoutubeController extends Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false, preload: true, isPlaying: false, showNextSinger: false };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleOnVideoReady = this.handleOnVideoReady.bind(this);
    this.handleOnVideoPlay = this.handleOnVideoPlay.bind(this);
    this.handleOnVideoPause = this.handleOnVideoPause.bind(this);
    this.handleOnVideoEnd = this.handleOnVideoEnd.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.handleCheckVideoProgress = this.handleCheckVideoProgress.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ preload: false });
    }, 1000 * 5);
  }

  handleOnVideoReady(event) {
    //console.log("T ", event.target);
    if (event.target.i != null) {
      event.target.setVolume(100);
      this.setState({ ytPlayer: event.target });
      this.handleCheckVideoProgress();
    }
  }

  handleOnVideoPlay(event) {
    this.setState({ isPlaying: true });
  }

  handleOnVideoPause(event) {
    this.setState({ isPlaying: false });
  }

  handleOnVideoEnd(event) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    this.props.handleNextSinger();
  }

  handleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen }, () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    });
  }

  handleCheckVideoProgress() {
    setTimeout(() => {
      if (this.state.isPlaying) {
        let time = this.state.ytPlayer.getCurrentTime();
        let duration = this.state.ytPlayer.getDuration();
        let percentage = time / duration;
        document.documentElement.style.setProperty("--progress", percentage);
        if (!this.state.showNextSinger) {
          let f = duration - time;
          if (f < 60 * 1) {
            this.setState({ showNextSinger: true });
          }
        }
      }
      this.handleCheckVideoProgress();
    }, 100);
  }

  handlePlay() {
    let controller = document.getElementsByClassName("yt-controller-container")[0];
    if (this.state.isPlaying) {
      this.state.ytPlayer.pauseVideo();
      controller.classList.add("yt-controller-container-pause");
    } else {
      this.state.ytPlayer.playVideo();
      controller.classList.remove("yt-controller-container-pause");
    }
  }

  render() {
    return (
      <div>
        {this.state.preload ? (
          <YoutubePreLoader singer={this.props.singer}></YoutubePreLoader>
        ) : (
          <div className="yt-player">
            <YouTube
              iframeClassName="yt-player"
              videoId={this.props.song.id}
              id={"player"}
              opts={opts}
              onReady={this.handleOnVideoReady}
              onPlay={this.handleOnVideoPlay}
              onPause={this.handleOnVideoPause}
              onEnd={this.handleOnVideoEnd}
              onProgress={this.handleOnProgress}
            />
            <div className="yt-data-container"></div>
            <div className="yt-controller-container">
              {this.state.isPlaying ? (
                <PauseArrowOutlinedIcon
                  className="material-icons"
                  onClick={this.handlePlay}
                ></PauseArrowOutlinedIcon>
              ) : (
                <PlayArrowOutlinedIcon
                  className="material-icons"
                  onClick={this.handlePlay}
                ></PlayArrowOutlinedIcon>
              )}
              <div className="timeline-container">
                <div className="timeline"></div>
              </div>
              {this.state.fullscreen ? (
                <FullscreenExitOutlinedIcon
                  className="material-icons"
                  onClick={this.handleFullscreen}
                ></FullscreenExitOutlinedIcon>
              ) : (
                <FullscreenOutlined
                  className="material-icons"
                  onClick={this.handleFullscreen}
                ></FullscreenOutlined>
              )}
            </div>
            {this.state.showNextSinger && this.props.nextSinger && (
              <div className="next-singer-banner">proximo cantor: {this.props.nextSinger.name}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}
