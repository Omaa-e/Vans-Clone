import React from 'react'
import vid from '../assets/vid.webm'
import img1 from '../assets/Classic slipon1.avif'
import img2 from '../assets/Authentic.avif'
import img3 from '../assets/SK8.avif'
import img4 from '../assets/UltraRange.avif'
import img5 from '../assets/Knu Skool.avif'

const Faves = () => {
  return (
    <div className='w-full'>
        <div>
            <div className='py-4 px-5'>
                <h1 className='text-2xl lg:text-3xl font-bold'>Your Faves in Fall Colorways</h1>
            </div>
            <div className='flex pt-1 overflow-x-scroll hide-scrollbar'>
                {/* the overflow helps the grid/flex images not to go out of the screen frame */}
                <div className='pr-0.5'>
                    <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120'>
                        <video className='w-full h-auto  object-cover' src={vid} autoPlay loop muted></video>
                    </div>
                    <div className='font-bold text-[1rem] px-3 py-4'>
                        <a className='md:text-2xl lg:text-3xl' href="">Old Skool</a>
                    </div>
                </div>
    
                <div className='px-0.5'>
                    <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120 '>
                        <img className='w-full object-cover' src={img1} alt="" />
                    </div>
                    <div className=" font-bold text-[1rem] px-3 py-4">
                        <a className='md:text-2xl lg:text-3xl' href="">Classic Slip-On</a>
                    </div>
                </div>
                <div className=' px-0.5'>
                    <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120 '>
                        <img className='w-full object-cover' src={img2} alt="" />
                    </div>
                    <a className=' font-bold md:text-2xl lg:text-3xl px-3 py-4' href="">Authentic</a>
    
                </div>
                <div className='px-0.5'>
                        <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120 '>
                            <img className='w-full object-cover' src={img3} alt="" />
                        </div>
                        <div className=" font-bold  text-[1rem] px-3 py-4">
                            <a className='md:text-2xl lg:text-3xl' href="">SK8-Hi</a>
                        </div>
                </div>
                <div className='px-0.5'>
                        <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120 '>
                            <img className='w-full object-cover' src={img4} alt="" />
                        </div>
                        <div className=" font-bold text-[1rem] px-3 py-4">
                            <a className='md:text-2xl lg:text-3xl' href="">UltraRange</a>
                        </div>
                </div>
                <div className='px-0.5'>
                        <div className='w-105 sm:w-150 md:w-100 lg:w-93 xl:w-120 '>
                            <img className='w-full object-cover' src={img5} alt="" />
                        </div>
                        <div className=" font-bold text-[1rem] px-3 py-4">
                            <a className='md:text-2xl lg:text-3xl' href="">Knu Skool</a>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faves