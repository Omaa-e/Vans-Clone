import React, {useState} from 'react'
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
import { GoChevronLeft,GoChevronRight, GoProjectSymlink } from "react-icons/go"

const Picks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const goToPrevious = () => {
    // Logic to go to the previous item
    setCurrentIndex((prev)=> (prev===0 ? images.length-1 : prev - 1))
  }
  const goToNext = () => {
    // Logic to go to the next item
    setCurrentIndex((prev)=> (prev + 1) % images.length)
  }
  return (
    <div className='w-full'>
        <div className='pt-4 pb-3 px-6 font-bold text-3xl tracking-tighter flex justify-between'>
          <h1>Explore Atiba by Vans</h1>
          <div>
            <button
              onClick={goToPrevious}
              className='p-2.5 bg-white'
              >
              <GoChevronLeft className='inline-block mt-1'/>
            </button>
            <button
              onClick={goToNext}
            >
              <GoChevronRight className='inline-block mt-1'/>
            </button>
          </div>
        </div>
        
        <div  className='flex pb-11 py-0.5 overflow-x-scroll hide-scrollbar gap-2 md:gap-1 pt-2'>
          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img1} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Old Skool Dia de los Muertos Shoe</p>
                <p className='text-xs text-[#262424]'>$95.00</p>
            </div>
          </div>

          <div className=''> 
            <div className='w-112 sm:w-150 md:w-56  lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img2} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri Floral Shirt</p>
                <p className='text-xs text-[#262424]'>$65.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56  lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img3} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri Boxed T-Shirt</p>
                <p className='text-xs text-[#262424]'>$30.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img4} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri Snapback Hat</p>
                <p className='text-xs text-[#262424]'>$30.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img5} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Sk8-Hi Shoe</p>
                <p className='text-xs text-[#262424]'>$85.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img6} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Old Skool Dia de los Muertos Shoe</p>
                <p className='text-xs text-[#262424]'>$95.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img7} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri Zip Hoodie</p>
                <p className='text-xs text-[#262424]'>$78 xl:w-95.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img8} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri T-Shirt</p>
                <p className='text-xs text-[#262424]'>$30.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img9} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Colibri Floral Crew Socks</p>
                <p className='text-xs text-[#262424]'>$10.00</p>
            </div>
          </div>

          <div className=''>
            <div className='w-112 sm:w-150 md:w-56 lg:w-78 xl:w-115'>
                <img className='w-full h-auto' src={img10} alt="" />
            </div>
            <div className='pl-2 pt-2 font-bold'>
                <p className='text-[#262424]'>Dia de los Muertos Canoodle Socks 3-Pack</p>
                <p className='text-xs text-[#262424]'>$14.00</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Picks