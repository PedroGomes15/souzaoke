import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "./styles/home-styles.css";
import "./styles/font-styles.css";

import SingerLine from "./components/singer-line";
import SongList from "./components/song-list";
import Logo from "./components/logo";
import API from "./apis/api.js";
import RoomContainer from "./components/room-container";
import YoutubeController from "./components/youtube-controller";

export const Home = () => {
  const [room_id, setRoomId] = useState("");
  const [line, setLine] = useState(0);
  const [room_name, setRoomName] = useState("");
  const [song, setSong] = useState("");
  const [songListKey, setSongListKey] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("room_id");
    if (id) {
      setRoomId(id);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (room_id) {
      updateLine();
    }
    // eslint-disable-next-line
  }, [room_id]);

  function handleSetRoomId(room_id) {
    setRoomId(room_id);
    window.location.href += `?room_id=${room_id}`;
    updateLine();
  }

  async function updateLine() {
    if (room_id) {
      let response = await API.get(`/room?room_id=${room_id}`);
      let userLine = response.data.line;
      if (!room_name) setRoomName(response.data.name);
      if (line !== userLine) setLine(userLine);
    }
    setTimeout(async () => {
      updateLine();
    }, 1000 * 10);
  }

  async function handleUpdateLine(line) {
    let r = await API.put(`/room?room_id=${room_id}`, { line: line });
    console.log("Update line ", r);
    setLine(r.data.line);
    return;
  }

  function handleSelectSong(song) {
    setSong(song);
    setSongListKey(new Date().getTime());
  }

  async function handleNextSinger() {
    let usersInLineAux = line;
    let fElement = usersInLineAux.shift();
    if (fElement.reSing) {
      usersInLineAux.push(fElement);
    }
    setSong(null);
    document.getElementById("input-search").value = "";
    await handleUpdateLine(usersInLineAux);
  }

  function handleClose() {
    setSong(null);
  }

  return (
    <div className="container">
      <ToastContainer />

      {song && (
        <div>
          <YoutubeController
            className="yt-controller"
            song={song}
            handleNextSinger={handleNextSinger}
            singer={line[0]}
            nextSinger={line[1]}
            handleClose={handleClose}
          ></YoutubeController>
        </div>
      )}
      <div className="header">
        <Logo />
      </div>
      {room_id ? (
        <div className="content">
          <SongList handleSelectSong={handleSelectSong} line={line || []} key={songListKey} />
          <SingerLine
            roomName={room_name}
            roomId={room_id}
            line={line || []}
            handleNewSinger={handleUpdateLine}
            handleNextSinger={handleNextSinger}
          />
        </div>
      ) : (
        <RoomContainer handleSetRoomId={handleSetRoomId}></RoomContainer>
      )}
    </div>
  );
};

export default Home;
