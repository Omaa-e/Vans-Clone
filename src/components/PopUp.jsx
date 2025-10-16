import React from 'react'
import img1 from '../assets/Vans.png'
import img2 from '../assets/Vanss Family.png'
import { HiOutlineX } from "react-icons/hi"

const PopUp = () => {
  return (
    <div className='w-full h-full '>
        <div className='w-full fixed bottom-0 items-center bg-white  pb-7'>
            <div className='border-b border-gray-300 flex px-4 justify-between py-4'>
                <div className=''>
                    <img className='w-16' src={img1} alt="" />
                </div>
                <HiOutlineX className='w-6 h-6'/>
            </div>
            <div className='px-4'>
                <div className='justify-center text-center'>
                    <img className='w-64 mx-auto' src={img2} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Join Vans Family to Get 15% Off Your First Order + Free Shipping!
                    </h1>
                    <button className='w-full bg-black text-white text-lg py-4 px-4 items-center flex justify-center my-6'>Join Now</button>
                    <p className='text-sm'>* Terms and Conditions apply. Offer Auto-Applies in cart, no code necessary. Offer valid for new Vans Family members for 7-days after registration on Vans.com or Vans Family app.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp