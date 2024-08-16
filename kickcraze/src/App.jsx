import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import SubNav from './components/SubNav'
import Footer from './components/Footer'
import Login from './components/subcomponents/login';
import './index.css';


function App() {
  return (
    <Router> 
        <Routes> 
          <Route path="/" element={
            <> 
            <Nav/>
            <SubNav/>
            <Hero/>
            <Footer/>
            </>
            }/>
          <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router> 
    
  )
}

export default App
