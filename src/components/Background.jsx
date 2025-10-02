import React from 'react'
import bgImg1 from '../assets/Bg1.avif'
import bgImg2 from '../assets/Bg2.avif'

const Background = () => {
  return (
    <div className='w-full'>
      <div className='flex lg:grid lg:grid-cols-2 overflow-x-scroll hide-scrollbar'>
          <div className='relative'>
            {/* first background image */}
            <div className='w-112 sm:w-150 md:w-100 md:h-[26%]'>
                <img className='w-full object-cover' src={bgImg1} alt="" />
            </div>
            <div className='absolute left-5'>
                <h1 className=''>
                    United Through Skateboarding
                </h1>
                <p>Celebrating connections forged through skateboarding with legendary photographer Atiba Jefferson</p>
                <a href="">Shop the Collection</a>
            </div>
          </div>

          <div>
            {/* second background image */}
            <div className='relative w-112 sm:w-150 md:w-100 md:h-[26%]'>
                <img className='w-full object-cover' src={bgImg2} alt="" />
            </div>
            <div className='absolute left-5'>
                <h1 className=''>
                    United Through Skateboarding
                </h1>
                <p>Celebrating connections forged through skateboarding with legendary photographer Atiba Jefferson</p>
                <a href="">Shop the Collection</a>
            </div>
          </div>
      </div>
     
       
    </div>
  )
}

export default Background