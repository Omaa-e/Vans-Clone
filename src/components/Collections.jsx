import React from 'react'
import img1 from '../assets/shoeHallo.jpeg'
import img2 from '../assets/warm.avif'
import img3 from '../assets/Dia.jpeg'
import img4 from '../assets/snow boots.avif'

const Collections = () => {
  return (
    <div className='w-full'>
        <div className='flex lg:grid lg:grid-cols-4 py-0.5 overflow-x-scroll hide-scrollbar'>
            {/* the overflow helps the grid/flex images not to go out of the screen frame */}
            <div className='relative pr-0.5'>
                <div className='w-112 sm:w-150 md:w-100 md:h-[26%] lg:w-full '>
                    <img className='w-full object-cover' src={img1} alt="" />
                </div>
                <div className='absolute bottom-7 left-4 font-bold text-white text-[1rem] '>
                    <p className='font-extrabold text-xl'>Fade to Black</p>
                        <a className='text-white underline' href="">Shop Halloween Collection</a>
                </div>
            </div>

            <div className='relative px-0.5'>
                    <div className='w-112 sm:w-150 md:h-[28%] md:w-100 lg:w-full'>
                        <img className='w-full object-cover' src={img2} alt="" />
                    </div>
                    <div className="absolute bottom-7 left-4 font-bold text-white text-[1rem]">
                        <p className='font-extrabold text-xl'>Cooler Days,Warmer Looks</p>
                        <a className='text-white underline' href="">Shop All Weather</a>
                    </div>
            </div>
            <div className='relative px-0.5'>
                    <div className='w-112 sm:w-150 md:h-[28%]  md:w-100 lg:w-full'>
                        <img className='w-full object-cover' src={img3} alt="" />
                    </div>
                    <div>
                        <p className='absolute bottom-16 left-4 font-bold text-white text-xl'>Diles que estoy bien</p>
                        <a className='absolute bottom-7 left-4 font-bold text-white underline' href="">Shop Dia de Muertos</a>
                    </div>
                    
            </div>
            <div className='relative pl-0.5'>
                    <div className='w-112 sm:w-150 md:h-[28%] md:w-100 lg:w-full'>
                        <img className='w-full object-cover' src={img4} alt="" />
                    </div>
                    <div>
                        <p className='absolute bottom-16 left-4 font-bold text-white text-xl'>Pushing Snowboarding Further</p>
                        <a className='absolute bottom-7 left-4 font-bold text-white underline' href="">Shop Snowboard Boots</a>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Collections