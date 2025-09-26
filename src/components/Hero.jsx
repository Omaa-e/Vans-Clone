import React from 'react'
import bgImg from '../assets/Hshoe.avif'
const Hero = () => {
  return (
    <div className='w-full   '>
        <div className='w-full relative '>
            <img className='w-full h-[730px] object-cover' src={bgImg} alt="hero image" />
        </div>
        <div className='absolute bottom-6 left-4 text-white font-bold'>
            <h1 className='text-4xl md:w-[89%] md:text-4xl lg:w-[70%] lg:text-6xl font-extrabold xl:w-[100%] leading-tight capitalize'>now in: premium super lowpro</h1>
            <p className='py-2 lg:text-[1.2rem]'>A full-leather take on a retro silhouette, now in fresh colors.</p>
            <a className='underline text-[1.2rem]' href="">Shop Now</a>
        </div>
    </div>
  )
}

export default Hero