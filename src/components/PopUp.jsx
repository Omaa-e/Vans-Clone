import React, {useState} from 'react'
import img1 from '../assets/Vans.png'
import img2 from '../assets/Vanss Family.png'
import { HiOutlineX } from "react-icons/hi"

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    if(!isOpen) return null;
  return (
    <div className='w-full h-full '>
        <div className='w-full fixed bottom-0 items-center bg-white sm:right-10 sm:bottom-0 sm:w-[381px] sm:h-[405px]'>
            <div className='border-b border-gray-300 flex px-4 justify-between py-4'>
                <div className=''>
                    <img className='w-14 brightness-0' src={img1} alt="" />
                </div>
                <button className='cursor-pointer'
                onClick={() => setIsOpen(false)}>
                     <HiOutlineX className='w-6 h-6'/>
                </button>
               
            </div>
            <div className='px-4 pt-2'>
                <div className='justify-center text-center'>
                    <img className='w-56 mx-auto' src={img2} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>
                        Join Vans Family to Get 15% Off Your First Order + Free Shipping!
                    </h1>
                    <button className='w-full font-bold bg-black text-white py-4 px-4 items-center flex justify-center my-6'>Join Now</button>
                    <p className='text-[12px] tracking-tighter pb-4'>* Terms and Conditions apply. Offer Auto-Applies in cart, no code necessary. Offer valid for new Vans Family members for 7-days after registration on Vans.com or Vans Family app.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp