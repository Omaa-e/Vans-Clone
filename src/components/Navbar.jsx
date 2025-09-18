import React from 'react'
import { HiOutlineMenu } from "react-icons/hi"
import img from '../assets/vans.png'
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgUser } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className=' items-center '>
        <div className='flex justify-between  items-center lg:px-3 py-1 space-x-4'>
            <div className='hidden lg:items-center space-x-1 p-2 hover:bg-[#F3F3F3] lg:block  '>
                <HiOutlineMenu className='w-7 h-7 hover:bg-[#B9B9B9] ' />
 
            </div>
            

            <div className='px-3 flex justify-center items-center'>
                <img src={img} alt="vans logo" className='w-15 py-4 transition-transform duration-300 lg:hover:rotate-[-6deg]' />
             {/* The transition-transform and hover is to make the logo tilt to the right when hovered on */}
             
            </div>

            <div className='flex items-center space-x-1'>
                <p className="p-2 hover:bg-[#F3F3F3]"> <CgUser className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3] lg:block"> <HiOutlineSparkles className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3]"> <HiOutlineSearch className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3]"> <HiOutlineShoppingCart className=' w-6 h-6  ' /> </p>
            </div>

        </div>
    </div>
  )
}

export default Navbar