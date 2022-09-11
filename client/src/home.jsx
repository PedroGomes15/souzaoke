import React, { useState, useEffect } from "react";

import "./styles/home-styles.css";

import SingerLine from "./components/singer-line";
import SongList from "./components/song-list";
import Logo from "./components/logo";
import RoomCreator from "./components/room_creator";
import API from "./apis/api.js";

export const Home = () => {
  const [room_id, setRoomId] = useState("");
  const [line, setLine] = useState(0);
  const [room_name, setRoomName] = useState("");

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

  return (
    <div className="container">
      <div className="header">
        <Logo />
      </div>
      {room_id ? (
        <div className="content">
          <SongList />
          <SingerLine line={line || []} />
        </div>
      ) : (
        <RoomCreator handleSetRoomId={handleSetRoomId}></RoomCreator>
      )}
    </div>
  );
};

export default Home;
