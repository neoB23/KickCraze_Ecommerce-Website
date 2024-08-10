import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import SubNav from './components/SubNav'
import Footer from './components/Footer'
import './index.css';


function App() {
  return (
    <> 
    <Nav/>
    <SubNav/>
    {/* <Footer/> */}
    </>
    
  )
}

export default App
