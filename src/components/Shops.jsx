import React from 'react'
import img1 from '../assets/Womens Shop.avif'
import img2 from '../assets/Kids Shop.avif'
import vid1 from '../assets/videoo.webm'

const Shops = () => {
  return (
    <div className='w-full '>
        <div className='flex md:grid  md:grid-cols-3 pt-0.5 overflow-x-scroll hide-scrollbar'>
            {/* the overflow helps the grid/flex images not to go out of the screen frame */}
            <div className='relative pr-0.5'>
                <div className='w-112 sm:w-150 md:w-full md:h-[25%] '>
                    <img className='w-full object-cover' src={img1} alt="" />
                </div>
                <div className='absolute bottom-7 left-4 font-bold text-white underline text-[1rem] '>
                     <a className='text-white' href="">Shop Women's</a>
                </div>
            </div>

            <div className='relative px-0.5'>
                    <div className='w-112 sm:w-150 md:h-[28%] md:w-full '>
                        <video className='w-full h-auto  object-cover' src={vid1} autoPlay loop muted></video>
                    </div>
                    <div className="absolute bottom-7 left-4 font-bold text-white underline text-[1rem]">
                        <a className='text-white' href="">Shop Men's</a>
                    </div>
            </div>
             <div className='relative pl-0.5'>
                <div className='w-112 sm:w-150 md:h-[28%] md:w-full'>
                    <img className='w-full object-cover' src={img2} alt="" />
                </div>
                <a className='absolute bottom-7 left-4 font-bold text-white underline' href="">Shop Kids</a>

            </div>
        </div>
    </div>
  )
}

export default Shops