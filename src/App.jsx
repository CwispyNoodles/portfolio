// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/resume'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/About" element={<About></About>}/>
          <Route path="/Projects" element={<Projects></Projects>}/>
          <Route path="/Contact" element={<Contact></Contact>}/>
          <Route path="/Resume" element={<Resume></Resume>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
