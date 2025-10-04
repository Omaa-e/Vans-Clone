import React from 'react'
import bgImg1 from '../assets/Bg1.avif'
import bgImg2 from '../assets/Bg2.avif'

const Background = () => {
  return (
    <div className='w-full'>
      <div className='flex lg:grid lg:grid-cols-2 overflow-x-scroll hide-scrollbar gap-1'>
          <div className='relative'>
            {/* first background image */}
            <div className='w-110 sm:w-150 md:w-full lg:w-full h-auto'>
                <img className='w-full h-full object-cover' src={bgImg1} alt="" />
            </div>
            {/* shadow Layout */}
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent'></div>

            {/* Text on top */}
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-2xl'>
                   Atiba x vans 
                </h1>
                <a className='underline' href="">Shop the Collection</a>
            </div>
          </div>

          <div className='relative'>
            {/* second background image */}
            <div className=' w-99 h-200 sm:w-150 md:w-full lg:w-full h-auto'>
                <img className='w-full object-cover' src={bgImg2} alt="" />
            </div>
            {/* shadow Layout */}
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent'></div>

            {/* Text on top */}
            <div className='absolute bottom-8 left-5 text-white font-bold'>
                <h1 className='text-xl lg:text-2xl'>
                  Introducing the BMX Proof WaffleCup
                  <span className="font-extrabold absolute bottom-6 text-lg">™</span>
                </h1>
                <a className='underline' href="">Shop Vans X Odyssey</a>
            </div>
          </div>
      </div>
     
       
    </div>
  )
}

export default Background