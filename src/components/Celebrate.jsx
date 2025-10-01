import React from 'react'
import img1 from '../assets/Celebrate-shoe1.avif'

const Celebrate = () => {
  return (
    <div className='w-full'>
        <div className=''>
            <div className='pt-4 pb-3 px-6 font-bold text-3xl tracking-tighter'>
                <h1>Celebrando Dia de los Muertos</h1>
            </div>
            <div className='flex lg:grid lg:grid-cols-4 py-0.5 overflow-x-scroll hide-scrollbar'>
              <div>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img1} alt="" />
                </div>
                <div className=''>
                    <p className='font-bold'>Old Skool Dia de los Muertos Shoe</p>
                    <p className='text-xs'>$90.00</p>
                </div>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default Celebrate