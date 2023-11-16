import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Works from './pages/Projects'

function App() {
  

  return (
    <div className='bg-white'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/projects' Component={Works} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
