import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Shop from './product/Shop'
import Weather from './product/Weather'
import Products from './product/Products'
import Hero from './components/Hero'
import Shops from './components/Shops'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Hero />
      <Shops/>
      {/* <Shop/>
      <Weather/>
      <Products/> */}
    </div>
  )
}

export default App