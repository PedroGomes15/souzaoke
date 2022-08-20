import React, { useEffect } from "react";

import "./styles/home-styles.css";

import SingerLine from "./components/singer-line";
import SongList from "./components/song-list";
import Logo from "./components/logo";

export const Home = () => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
      <p>{!data ? "Loading..." : data}</p>
      <div className="header">
        <Logo />
      </div>
      <div className="content">
        <SongList />
        <SingerLine />
      </div>
    </div>
  );
};

export default Home;
