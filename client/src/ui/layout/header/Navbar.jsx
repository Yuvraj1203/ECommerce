"use client"
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown,IoIosArrowForward  } from "react-icons/io";

const navData = [
  {title:"Home",href:"#",
    navItems:[
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#",
        subNavItems:[
          {title:"Home Default inSide",href:"#"},
          {title:"Home Default inSide",href:"#"},
        ]
      },
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
    ]
  },  {title:"Home",href:"#",
    navItems:[
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#",
        subNavItems:[
          {title:"Home Default inSide",href:"#"},
          {title:"Home Default inSide",href:"#"},
        ]
      },
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
      {title:"Home Default",href:"#"},
    ]
  },
]

const Navbar = () => {
  return (
    <>
      <div className='flex gap-4 md:gap-8'>
        {navData.map((nav,index)=>(
            <div className='group  relative'>
              <Link href={"#"} className='flex items-center gap-1 text-[#595d69] font-medium text-sm md:text-base'>{nav.title} {nav?.navItems && <span><IoIosArrowDown /></span>}</Link>
              {nav?.navItems && 
                <div className='invisible bg-white group-hover:visible opacity-0 top-[200%] group-hover:opacity-100 group-hover:top-[110%] flex flex-col gap-2 w-max rounded-lg text-[#595d69] font-medium text-sm md:text-base absolute left-1/2 -translate-x-1/2 shadow-[0px_20px_30px_#53585d0d,0px_0px_30px_#53585d1a] z-10 p-2 duration-500'>
                  {nav.navItems.map((navItem,navItemIndex)=>(
                    navItem?.subNavItems ?
                      <div className='group/scoped relative'>
                        <Link href={navItem.href} className='flex items-center gap-1 hover:bg-[#e6e6e8] rounded-md p-2 duration-300'>{navItem.title} <IoIosArrowForward /></Link>
                        <div className='invisible bg-white group-hover/scoped:visible opacity-0 top-[200%] group-hover/scoped:opacity-100 group-hover/scoped:top-0 flex flex-col gap-2 w-max rounded-lg text-[#595d69] font-medium text-sm md:text-base absolute left-[calc(100%+16px)] shadow-[0px_20px_30px_#53585d0d,0px_0px_30px_#53585d1a] z-20 p-2 duration-500'>
                          {navItem.subNavItems.map((subNavItem,subNavItemIndex)=>(
                            <Link href={subNavItem.href} className='hover:bg-[#e6e6e8] rounded-md p-2 duration-300'>{subNavItem.title}</Link>
                          ))}  
                        </div>
                      </div>
                      :
                      <Link href={navItem.href} className='hover:bg-[#e6e6e8] rounded-md p-2 duration-300'>{navItem.title}</Link>
                  ))}
                </div>              
              }
            </div>
        ))}
      </div>
    </>
  )
}

export default Navbar