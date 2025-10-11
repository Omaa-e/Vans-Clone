import React, { useState } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa6"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"


function Footer () {
  const [expandedSections, setExpandedSections] = useState({});
  const handleToggle =(Section)=> {
    setExpandedSections(prev =>({
      // ...prev prevents other sections to open when one accordion is opened
      ...prev,
      [Section]: !prev[Section] // toggles the current section
    }))
  }

  const footer = [
    {
      title: "Featured",
      links:["Extra Comfort Shoes", "Chunky & Retro Shoes", "Customize Our Shoes","Slip On Shoes", "Mary Jane Shoes","Platform Shoes", "Skate Shoes", "Sandals ad Slides", "Offers & Promotions", "Gift Cards"]
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
    <div className='w-full h-full bg-[#262424] text-white'>
        <div className=''>
          {footer.map((Section,item)=>(
              <div key={item.title}
              onClick={()=> handleToggle(Section.title)}
               className='px-4 border-b border-[#F3F3F3]'>
            <div  className='flex justify-between items-center py-4'>
              <h4 className='font-bold'>{Section.title}</h4>
              {expandedSections[Section.title] ?(<HiOutlineChevronUp className='inline-block w-6 h-6' />) 
              : (<HiOutlineChevronDown className='inline-block w-6 h-6' />)}
             
            </div>

            {expandedSections[Section.title] && (
              <ul className='pb-4 space-y-2 flex-col'>
              {Section.links.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            )}
        </div>
        ))}
        <div className=' flex space-x-1 px-2 py-4'> 
          <p className='p-2 hover:text-[#1E98E4]'><FaXTwitter className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#33456D]'><FaFacebookF className='w-3 h-3'/></p>
          <p className='p-2 hover:text-[#97101E]'><FaPinterest className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#E3221A]'><FaYoutube className='w-3 h-4'/></p>
          <p className='p-2 hover:text-[#542F6C]'><FaInstagram className='w-3 h-4'/></p>
        </div>
        </div>
    </div>
  )
}

export default Footer