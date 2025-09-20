import React from 'react'
import img1 from '../assets/sock1.avif'
import img2 from '../assets/sock2.avif'


const Products = () => {
  return (
    <div className='w-full '>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-1 pt-19 lg:px-6 '>
            <div className='cursor-pointer'>
                <div className='w-full'>
                    <img src={img1} className='' alt="Kids Ticker Crew socks" />
                </div>
                <div className='pt-8 space-y-1 px-3'>
                    <p>Kids Ticker Crew socks</p>
                    <p className='text-[#707070]'>Everyday,Stretch</p>
                    <p className='text-[#707070]'>3 colors</p>
                    <p>$10.00</p>
                </div>
            </div>

             <div>
                <div className='w-full'>
                    <img src={img2} className='' alt="Kids Ticker Crew socks" />
                </div>
                <div className='pt-8 space-y-1 px-3'>
                    <p>Kids Ticker Crew socks</p>
                    <p className='text-[#707070]'>Everyday,Stretch</p>
                    <p className='text-[#707070]'>3 colors</p>
                    <p>$10.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products