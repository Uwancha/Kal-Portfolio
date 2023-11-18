import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Works from './pages/Projects'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <div className='bg-white'>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/projects' Component={Works} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
