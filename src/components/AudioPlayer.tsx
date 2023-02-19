import { useState, React } from "react";
import { ReactComponent as PlayButton } from "../assets/playButton.svg";
import { ReactComponent as StopButton } from "../assets/stopButton.svg";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      className="music-player-track"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <source src="https://wghl3omv7p34qicdhl4iwe545yuqorbg6xz2ewdndenxeqivxo3q.arweave.net/sY69uZX798ggQzr4ixO87ikHRCb186JYbRkbckEVu7c" />
      <div className="music-player-left-side">
        <div className="artist-title-track">
          <h1>Foo Fighters - Best of You</h1>
        </div>
        <div className="duration-buy-mp3">
          <p>
            <span className="duration">4:14</span> -{" "}
            <span className="buy-mp3">PLAY THIS SONG</span>
          </p>
        </div>
      </div>
      <div className="music-player-right-side">
        <div className="play-button">
          {!isPlaying ? <PlayButton /> : <StopButton />}
        </div>
      </div>
    </button>
  );
};
export default AudioPlayer;
