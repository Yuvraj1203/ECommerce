import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='bg-white flex justify-between items-center'>
      <div>
        <Image
          src={"/doorbelll-loog-black.svg"}
          width={242}
          height={52}
          alt="Logo"
          className=""
        />
      </div>
      <Navbar />
      <div>
        Register
      </div>
    </nav>
  )
}

export default Header