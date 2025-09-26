import React, {useState} from 'react'
import { HiOutlineMenu,HiOutlineSearch,HiOutlineShoppingCart } from "react-icons/hi"
import img from '../assets/vans.png'
import { CgUser } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='w-full items-center fixed z-10 '>
        {/* left menu */}
        <div className=' relative flex justify-between  items-center lg:px-3 py-2 space-x-4'>
            <div onClick={() => setMenuOpen(true) } className='hidden lg:items-center space-x-1 p-2 hover:bg-[#F3F3F3] lg:block  '>
                <HiOutlineMenu className='w-7 h-7 hover:bg-[#B9B9B9] ' />
 
            </div>

            {/* logo */}
            <div className= 'px-4 lg:absolute left-1/2 transform-translate-x-1/2 '> 
                        {/* this transforms the logo to be centered */}
                <img src={img} alt="vans logo" className='filter brightness-0 invert w-15 py-4 transition-transform duration-300 lg:hover:rotate-[-4deg]' />
             {/* The transition-transform and hover is to make the logo tilt to the right when hovered on */}
             
            </div>
            {/* right menu */}
            <div className='flex items-center space-x-1'>
                <p className="p-2 hover:bg-[#F3F3F3]"> <CgUser className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3] lg:block"> <HiOutlineSparkles className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3]"> <HiOutlineSearch className=' w-6 h-6  ' /> </p>
                <p className="p-2 hover:bg-[#F3F3F3]"> <HiOutlineShoppingCart className=' w-6 h-6  ' /> </p>
            </div>

        </div>



        {/* Menu clicked */}
        {menuOpen && (
            <div className= 'fixed inset-0  bg-opacity-50'>
                <div>
                    <button onClick={() => setMenuOpen(false)} className='text-right mb-12'>
                        <GrClose className='w-8 h-8 text-right bg-white m-4'/>
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar