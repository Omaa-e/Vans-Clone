import React from 'react'
import bgImg1 from '../assets/Bg1.avif'
import bgImg2 from '../assets/Bg2.avif'

const Background = () => {
  return (
    <div className='w-full'>
      <div className='flex lg:grid lg:grid-cols-2 overflow-x-scroll hide-scrollbar gap-1'>
          <div className='relative'>
            {/* first background image */}
            <div className='w-112 sm:w-150 md:w-100 lg:w-full'>
                <img className='w-full object-cover' src={bgImg1} alt="" />
            </div>
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-2xl'>
                   Atiba x vans 
                </h1>
                <a className='underline' href="">Shop the Collection</a>
            </div>
          </div>

          <div className='relative'>
            {/* second background image */}
            <div className=' w-112 sm:w-150 md:w-100 lg:w-full'>
                <img className='w-full object-cover' src={bgImg2} alt="" />
            </div>
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-2xl'>
                  Introducing the BMX Proof WaffleCup
                </h1>
                <a className='underline' href="">Coming Soon</a>
            </div>
          </div>
      </div>
     
       
    </div>
  )
}

export default Background