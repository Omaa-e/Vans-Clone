import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Shop from './product/Shop'
import Weather from './product/Weather'
import Products from './product/Products'
import Hero from './components/Hero'
import Shops from './components/Shops'
import Collections from './components/Collections'
import Background from './components/Background'
import Celebrate from './components/Celebrate'
import Picks from './components/Picks'
import Faves from './components/Faves'
import Footer from './components/Footer'
import PopUp from './components/PopUp'

const App = () => {
  return (
    <Router>
      <div className='font-work-sans'>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
          <Hero />
          <Picks/>
          <Background/>
          <Celebrate/>
          <Shops/>
          <Collections/>
          <Faves/>
          <Footer/>
          <PopUp/>
          {/* <Shop/>
          <Weather/>
          <Products/> */}
          </>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App