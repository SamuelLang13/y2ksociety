import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import Shoutbox from './components/Shoutbox'
import TodayInY2K from "./components/TodayInY2K";


function App() {
  return (
    <div className="landing-wrapper">
      <header className="hero-banner">
        <div className="skull-row">
          <img src="./public/skull-single.png" alt="skull" className="skull-img" />
          <h1>WELCOME TO Y2K SOCIETY</h1>
          <img src="./public/skull-single.png" alt="skull" className="skull-img" />
        </div>
        <p className="subtitle">A cursed shrine of digital chaos, pixel noise and MP3 corruption</p>
      </header>

      <section className="zone-select">
        <a href="#" className="zone-button">🎸 Enter Music Zone</a>
        <a href="#" className="zone-button">🕹️ Enter Gaming Den</a>
        <a href="#" className="zone-button">👻 Enter Lifestyle Hell</a>
      </section>
      <section className="search-box">
        <input type="text" placeholder="Search threads, zones or users..." />
        <button>🔎 Search</button>
      </section>

      <section className="create-zone">
        <p>Can't find your tribe?</p>
        <button>Create Your Own Zone</button>
      </section>
      <Shoutbox />

      <section className="winamp-box">
        <p>🎵 04 – DIGITAL DECAY</p>
        <img src="/assets/winamp-player.gif" alt="Winamp player" />
      </section>

      <section className="netscape-warning">
        ⚠️ Best viewed in Netscape Navigator 4.7 on 800×600 CRT
      </section>

      <footer className="main-footer">
        <p>© 2001–2025 y2ksociety.net · Powered by NetTrash™ · Hosted on Angelfire</p>
      </footer>
    </div>
  )
}

export default App


