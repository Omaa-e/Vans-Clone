import React from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      <Shop/>
      <Weather/>
    </div>
  )
}

export default App