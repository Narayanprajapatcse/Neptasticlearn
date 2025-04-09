import React from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Parent from './Components/Parent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <div>
           <li><Link to="/parent">Parent</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/parent' element={<Parent/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App
