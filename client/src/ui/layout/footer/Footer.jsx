"use client"
import React from 'react'
import InfoSection from './InfoSection'
import MainFooterSection from './MainFooterSection'
import HotTopic from './HotTopic'
import Link from 'next/link'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'

const bottomData = [
    {title:"Terms",href:"#"},
    {title:"Privacy",href:"#"},
    {title:"Cookies",href:"#"},
]
const Footer = () => {
  return (
    <>
        <div className='flex flex-col gap-4 md:gap-8 bg-[#191A1F] py-6 md:py-12'>
            <InfoSection />
            <hr className='container color-[#a1a1a8]' />
            <MainFooterSection />
            <HotTopic />
        </div>
        <div className='bg-[#111216] py-4 md:py-8'>
            <div className='container flex max-md:flex-col items-center justify-between gap-2'>
                <p className='text-sm md:text-base text-[#BABDC3]'>©2024 Webestica. All rights reserved</p>
                <div className='flex items-center gap-6'>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='bg-transparent text-sm md:text-base text-[#BABDC3] hover:text-primary duration-400'>English Edition </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="English">English</DropdownItem>
                            <DropdownItem key="German">German</DropdownItem>
                            <DropdownItem key="French">French</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {bottomData.map((link,index)=>(
                        <Link href={link.href} key={index} className='text-sm md:text-base text-[#BABDC3] hover:text-primary duration-400'>{link.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer