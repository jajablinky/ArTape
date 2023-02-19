import { React, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <div className="music-player-container">
        <div className="music-player-header">
          <h2 className="profile-name">SO LOKI</h2>
          <p className="amount-songs-total-duration">3 songs, 59:56 minutes</p>
          <p className="artape-link">ARTAPE</p>
        </div>
        <AudioPlayer />
        <AudioPlayer />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
