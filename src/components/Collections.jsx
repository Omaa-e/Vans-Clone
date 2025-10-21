import React from 'react'
import bgImg1 from '../assets/Spooky Season.avif'
import bgImg2 from '../assets/New season.avif'

const Collections = () => {
  return (
    <div className='w-full'>
      <div className='flex lg:grid lg:grid-cols-2 overflow-x-scroll hide-scrollbar gap-1'>
          <div className='relative'>
            {/* first background image */}
            <div className='w-110 h-90 sm:w-150 md:w-full lg:w-full '>
                <img className='w-full object-cover' src={bgImg1} alt="" />
            </div>
            {/* shadow Layout */}
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent'></div>

            {/* Text on top */}
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-2xl'>
                   For Spooky Season
                </h1>
                <a className='underline' href="">Shop Halloween</a>
            </div>
          </div>

          <div className='relative'>
            {/* second background image */}
            <div className=' w-110 sm:w-150 md:w-full lg:w-full'>
                <img className='w-full object-cover' src={bgImg2} alt="" />
            </div>
            {/* shadow Layout */}
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent'></div>

            {/* Text on top */}
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-xl lg:text-2xl'>
                    New Season, New Layers
                </h1>
                <a className='underline' href="">Shop Hoodies & Jackets</a>
            </div>
          </div>
      </div>
     
       
    </div>
  )
}

export default Collections