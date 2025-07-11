import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RetroNavbar from './components/RetroNavbar'
import MusicZone from './components/MusicZone'

function App() {
  return (
    <div className="app-container">
      <header className="banner">
        <h1>🔥 WELCOME TO Y2K SOCIETY 🔥</h1>
        <p>Enter the chaos of the early web</p>
      </header>

      <RetroNavbar />

      <main className="main-content">
        <MusicZone />
        {/* Tu môžeme neskôr pridať Gaming, Lifestyle, atď. */}
      </main>

      <footer className="footer">
        <p>© 2001–2025 y2ksociety.net – Powered by NetTrash™</p>
      </footer>
    </div>
  )
}

export default App

