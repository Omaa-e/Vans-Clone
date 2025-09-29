import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Shop from './product/Shop'
import Weather from './product/Weather'
import Products from './product/Products'
import Hero from './components/Hero'
import Shops from './components/Shops'
import Collections from './components/Collections'
import Background from './components/Background'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Hero />
      <Background/>
      <Shops/>
      <Collections/>
      {/* <Shop/>
      <Weather/>
      <Products/> */}
    </div>
  )
}

export default App