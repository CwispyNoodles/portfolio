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
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   <h1>THIS IS A TEST</h1>
    // </>
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
