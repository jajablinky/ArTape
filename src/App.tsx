import { useState, React } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="music-player-container">
        <div className="music-player-header">
          <h2 className="profile-name">SEANSWH</h2>
          <p className="amount-songs-total-duration">12 songs, 59:56 minutes</p>
          <p className="artape-link">ARTAPE</p>
        </div>
        <button className="music-player-track">
        <div className="artist-title-track">
            <h1>Foo Fighters - Best of You</h1>
          </div>
          <div className="duration-buy-mp3">
            <p><span className="duration">4:14</span> - <span className="buy-mp3">PLAY THIS SONG</span></p>
          </div>
        </button>
        <button className="music-player-track">
        <div className="artist-title-track">
            <h1>Foo Fighters - Best of You</h1>
          </div>
          <div className="duration-buy-mp3">
            <p><span className="duration">4:14</span> - <span className="buy-mp3">PLAY THIS SONG</span></p>
          </div>
        </button>
        <button className="music-player-track">
        <div className="artist-title-track">
            <h1>Foo Fighters - Best of You</h1>
          </div>
          <div className="duration-buy-mp3">
            <p><span className="duration">4:14</span> - <span className="buy-mp3">PLAY THIS SONG</span></p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default App
