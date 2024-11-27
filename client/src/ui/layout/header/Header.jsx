import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import AuthButton from './AuthButton'
import { cookies } from 'next/headers'
import JWT from 'jsonwebtoken';
 

const Header = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('userToken')
  let decoded;
  // verify token if it exists and is valid
  if (token) {
    try {
      decoded = JWT.verify(token?.value, process.env.JWT_SECRET);
      decoded = true;
    } catch (error) {
      decoded = false;
    }
  }else{
    decoded = false;
  }
  
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
      <AuthButton user={decoded} />
    </nav>
  )
}


export default Header