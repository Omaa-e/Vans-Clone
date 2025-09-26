import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Weather = () => {
  return (
    <div className='w-full fixed bg-white z-10'>
        <div className='px-5'>
             <div className='flex justify-between pt-2 items-center'>
                <div className='flex-1'>
                    <p className='text-xl tracking tracking-tighter'>All Weather Shoes & Clothing </p>
                    <p className='block lg:hidden'>130 items</p>
                </div>
                <div className='pt-2 ml-3 lg:hidden' >
                <HiOutlineAdjustmentsHorizontal className='w-6 h-6' />
                </div> 
            
            </div>
            <div className='w-full hidden lg:block '>
                <div className='flex justify-between items-center py-2    space-x-4'>
                    <div className='flex '>
                        <p className='hidden lg:block'>Show Filters</p>
                        <p className='p-1 '><HiOutlineAdjustmentsHorizontal className='w-5 h-5' /></p>
                    </div>
                    <div className='flex space-x-2 '>
                        <p className='hidden lg:block'>130 items</p>
                    </div>
                </div>
        </div>
        </div>
       
    </div>
  )
}

export default Weather