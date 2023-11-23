import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Works from './pages/Projects'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  

  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/projects' Component={Works} />
          <Route path='/about' Component={About} />
          <Route path='*' Component={NotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
