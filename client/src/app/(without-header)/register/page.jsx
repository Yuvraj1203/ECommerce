import React from 'react'
import RegisterComp from '@/ui/component/without-header/register/RegisterComp'
import Image from 'next/image'

const page = () => {
  return (
    <div className='container flex md:gap-10 items-center justify-between min-h-[100vh]'>
      <RegisterComp />
      <div className='max-md:hidden'>
        <Image src={"/register.png"} width={626} height={626} alt='register illustartion Ecommerce' className="" />
      </div>
    </div>
  )
}

export default page