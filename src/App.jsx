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

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Hero />
      <Picks/>
      <Background/>
      <Celebrate/>
      <Shops/>
      <Collections/>
      <Faves/>
      <Footer/>
      {/* <Shop/>
      <Weather/>
      <Products/> */}
    </div>
  )
}

export default App