import React from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Weather from './components/Weather'
import Products from './components/Products'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Shop/>
      <Weather/>
      <Products/>
    </div>
  )
}

export default App