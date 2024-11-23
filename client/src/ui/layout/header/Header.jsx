import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import AuthButton from './AuthButton'

const Header = () => {
  return (
    <nav className='bg-white flex justify-between items-center'>
      <div>
        <Image
          src={"/logoBlack.png"}
          width={204}
          height={48}
          alt="Logo"
          className=""
        />
      </div>
      <Navbar />
      <AuthButton />
    </nav>
  )
}

export default Header