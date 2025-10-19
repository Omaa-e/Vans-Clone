import React, { useState } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa6"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import img from '../assets/US flag.svg'


function Footer () {
  const [expandedSections, setExpandedSections] = useState({});
  const handleToggle =(Section)=> {
    setExpandedSections(prev =>({
      ...prev,
      [Section]: !prev[Section]
    }))
  }

  const footer = [
    {
      title: "Featured",
      links:[
        {name: "Extra Comfort Shoes"}, "Chunky & Retro Shoes", "Customize Our Shoes","Slip On Shoes", "Mary Jane Shoes","Platform Shoes", "Skate Shoes", "Sandals ad Slides", "Offers & Promotions", "Gift Cards"]
    },
    {
      title: "Icons",
      links:["Old Skool","Authentic","Classic Slip-on","Sk8-Hi", "Half Cab"]
    },
    {
      title: "Shop by Color",
      links:["Checkerboard","White","Black","Pink", "Blue"]
    },
    {
      title: "Sports",
      links:["Skateboarding","Surf","Bmx","Snowboarding"]
    },
    {
      title: "Support",
      links:["Help Center","FAQ","Order Status","Shipping", "Returns","Size Guides","Find a Store","Learn About Vans Family","Contact Us"]
    },
    {
      title: "About",
      links:["Our Story","Sustainability","Careers"]
    },
  ]
  return (
    <div className='w-full h-140 bg-[#262424] text-white lg:h-full'>
      <div className='py-4 lg:w-114 lg:pt-5'>
        {footer.map((Section, index)=>(
          <div key={Section.title} className=' px-4 lg:px-6'>
             <div className='border-b border-[#F3F3F3]'>
               <button
                onClick={()=> handleToggle(Section.title)}
                className='cursor-pointer flex justify-between items-center py-3 w-full '>
            
              <h4 className='font-bold '>{Section.title}</h4>
              {expandedSections[Section.title] ?(<HiOutlineChevronUp className='inline-block w-6 h-6' />) 
              : (<HiOutlineChevronDown className='inline-block w-6 h-6' />)}</button>

            {expandedSections[Section.title] && (
              <ul className='pb-4 space-y-2 flex-col'>
              {Section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            )}
             </div>
          </div>
      ))}
      {/* Social Media Links */}
      <div className='lg:pt-25'>
        <div className='flex flex-col'>
        <div className=' flex space-x-1 px-4 pt-4 pb-0'> 
          <p className='p-2 hover:text-[#1E98E4]'><FaXTwitter className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#33456D]'><FaFacebookF className='w-3 h-3'/></p>
          <p className='p-2 hover:text-[#97101E]'><FaPinterest className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#E3221A]'><FaYoutube className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#542F6C]'><FaInstagram className='w-3 h-4'/></p>
        </div>

        {/* Flag & location Section */}
        <div className='flex px-5 pt-0 pb-5'>
          <img className='w-6  pr-2 ' src={img} alt="" />
          <div className='text-sm hover:underline'>
            <p><a href="#">EN <span>|</span> Change Location</a></p>
          </div>
        </div>
      </div>
      
      {/* the lowest section of the footer */}
        <div className="underline flex flex-wrap gap-2 text-xs px-4">
          <p>Modern Slavery Statement</p>
          <p>Privacy Policy</p>
          <p>Your Privacy Choices</p>
          <p>Terms of Use</p>
          <p>Accessibility Statement</p>
          <p>Notice at Collection</p>
          <p>Cookie Preferences</p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Footer