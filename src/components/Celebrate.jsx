import React from 'react'
import img1 from '../assets/Celebrate-shoe1.avif'
import img2 from '../assets/Celebrate-shirt-1.avif'
import img3 from '../assets/Celebrate-top-1.avif'
import img4 from '../assets/Celebrate-cap-1.avif'
import img5 from '../assets/Celebrate-shoe2.avif'
import img6 from '../assets/Celebrate-shoe3.avif'
import img7 from '../assets/Celebrate-hoodie1.avif'
import img8 from '../assets/Celebrate-top-2.avif'
import img9 from '../assets/Celebrate-socks1.avif'
import img10 from '../assets/Celebrate-socks2.avif'

const Celebrate = () => {
  return (
    <div className='w-full'>
        <div className=''>
            <div className='pt-4 pb-3 px-6 font-bold text-3xl tracking-tighter'>
                <h1>Celebrando Dia de los Muertos</h1>
            </div>
            <div className='flex  py-0.5 overflow-x-scroll hide-scrollbar gap-1'>
              <div className=''>
                <div className='w-112 sm:w-150 md:w-116 '>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Old Skool Dia de los Muertos Shoe</p>
                    <p className='text-xs text-[#262424]'>$90.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri Floral Shirt</p>
                    <p className='text-xs text-[#262424]'>$65.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri Boxed T-Shirt</p>
                    <p className='text-xs text-[#262424]'>$30.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri Snapback Hat</p>
                    <p className='text-xs text-[#262424]'>$30.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Sk8-Hi Shoe</p>
                    <p className='text-xs text-[#262424]'>$85.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img6} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Old Skool Dia de los Muertos Shoe</p>
                    <p className='text-xs text-[#262424]'>$90.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img7} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri Zip Hoodie</p>
                    <p className='text-xs text-[#262424]'>$80.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img8} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri T-Shirt</p>
                    <p className='text-xs text-[#262424]'>$30.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img9} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Colibri Floral Crew Socks</p>
                    <p className='text-xs text-[#262424]'>$10.00</p>
                </div>
              </div>

              <div className=''>
                <div className='w-112 sm:w-150 md:w-116  '>
                    <img src={img10} alt="" />
                </div>
                <div>
                    <p className='font-bold text-[#262424]'>Dia de los Muertos Canoodle Socks 3-Pack</p>
                    <p className='text-xs text-[#262424]'>$14.00</p>
                </div>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default Celebrate