import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InfoSection = () => {
  return (
    <div className='flex max-lg:flex-col gap-3 md:gap-7 lg:gap-10 container'>
        <div className='shrink-0'>
            <Image src={"/images/logo-light.svg"} width={242} height={52} alt='Logo' className='' />
        </div>
        <p className="text-[#d0d4d9] text-sm md:text-base">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
        <div className='flex flex-col items-end gap-2'>
            <div className='flex gap-2'>
                <input type='email' placeholder='Enter your email address' className='text-[#29292e] text-sm md:text-base px-4 py-2 bg-white rounded placeholder:text-[#4C4E52] border-1 border-transparent outline-none focus:border-primary duration-400' />
                <Button className='bg-primary px-4 py-2 text-white text-sm md:text-base rounded'>Subscribe</Button>
            </div>
            <p className='text-[#595d69]'>By subscribing you agree to our <Link href={"#"} className='underline'>Privacy Policy</Link></p>
        </div>
    </div>
  )
}

export default InfoSection