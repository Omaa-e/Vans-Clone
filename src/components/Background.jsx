import React from 'react'
import bgImg from '../assets/BackImg.avif'

const Background = () => {
  return (
    <div className='w-full'>
        <div className='relative pt-3'>
            <img className='w-full object-cover' src={bgImg} alt="" />
        </div>
        <div className='absolute left-5'>
            <h1 className='text-4xl md:w-[89%] md:text-4xl lg:w-[70%] lg:text-6xl font-extrabold xl:w-[100%] leading-tight capitalize'>
                United Through Skateboarding
            </h1>
            <p>Celebrating connections forged through skateboarding with legendary photographer Atiba Jefferson</p>
            <a href="">Shop the Collection</a>
        </div>
    </div>
  )
}

export default Background