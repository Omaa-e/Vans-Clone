import React, {useEffect, useState} from 'react'
import { HiOutlineMenu,HiOutlineSearch,HiOutlineShoppingCart } from "react-icons/hi"
import img from '../assets/vans.png'
import { CgUser } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] =useState(false)
    
    useEffect(()=> {
        const handleScroll = ()=>{
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
 
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])
  return (
    <div className={`w-full items-center fixed z-10 transition-colors duration-300 ${isScrolled ? "bg-white" : "bg-transparent"} `}>
        {/* left menu */}
        <div className=' relative flex justify-between  items-center px-4 lg:px-3 py-2'>
            <div className={`hidden lg:items-center space-x-1 p-2 hover:bg-[#F3F3F3] lg:block ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}>
                <HiOutlineMenu className={`w-7 h-7  ${isScrolled ? "text-black" : "text-white"}`} />
            </div>

            {/* logo */}
            <div className= 'relative flex justify-end items-center lg:px-3 py-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'> 
                {/* this transforms the logo to be centered */}
                <Link to="/">
                    <img src={img} alt="vans logo" className={`w-15 transition-transform duration-300 lg:hover:rotate-[-4deg] ${isScrolled? '' : 'filter brightness-0 invert'}`} />
                </Link>
                    
                

             {/* The transition-transform and hover is to make the logo tilt to the right when hovered on */}
             
            </div>
            {/* right menu */}
            <div className={`items-center space-x-1 hidden lg:flex ${isScrolled ? "text-black" : "text-white"}`}>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <CgUser className=' w-6 h-6  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineSparkles className=' w-6 h-6  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineSearch className=' w-6 h-6  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineShoppingCart className=' w-6 h-6  ' /> </p>
            </div>

              {/* Small to medium Screen */}
            <div className={`flex items-center space-x-1 lg:hidden ${isScrolled ? "text-black" : "text-white"}`}>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineShoppingCart className=' w-5 h-5  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <CgUser className=' w-5 h-5  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineSearch className=' w-5 h-5  ' /> </p>
                <p className={`p-2 ${isScrolled ? 'hover:bg-[#F3F3F3]' : 'hover:bg-black'}`}> <HiOutlineMenu className=' w-5 h-5 ' /> </p>
            </div>

        </div>

    </div>
  )
}

export default Navbar