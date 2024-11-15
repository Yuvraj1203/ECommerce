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
      <div className=''>
        {navData.map((nav,index)=>(
            <div className='group  relative'>
              <Link href={"#"} className='flex items-center gap-1.5 text-[#595d69] font-medium text-sm md:text-base'>{nav.title} {nav?.navItems && <span><IoIosArrowDown /></span>}</Link>
              {nav?.navItems && 
                <div className='invisible group-hover:visible opacity-0 top-[200%] group-hover:opacity-100 group-hover:top-[110%] flex flex-col gap-2 w-max rounded-lg text-[#595d69] font-medium text-sm md:text-base absolute left-1/2 -translate-x-1/2 shadow-[0px_20px_30px_#53585d0d,0px_0px_30px_#53585d1a] z-10 p-4 duration-500'>
                  {nav.}
                  <Link href={"#"}>Home Default</Link>
                  <Link href={"#"}>Home Default</Link>
                  <Link href={"#"} className='flex items-center relative'>
                    Home Default {}
                  </Link>
                  <Link href={"#"}>Home Default</Link>
                  <Link href={"#"}>Home Default</Link>
                </div>
              
              }
            </div>
        ))}
      </div>
    </>
  )
}

export default Navbar