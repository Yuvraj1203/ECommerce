import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaYoutube , FaRegBell, FaRegEnvelope, FaHeadphonesAlt   } from "react-icons/fa";

const footerData = {
    recent : {
        title: 'Recent Post',
        posts: [
            {title: 'Up-coming business bloggers, you need to watch', date: 'Apr 06, 2022',author:'Dennis',category : "Business", categoryColor : "bg-[#D6293E] text-white"},
            {title: 'How did we get here? The history of the business told through tweets', date: 'May 29, 2022',author:'Larry',category : "Marketing", categoryColor : "bg-[#4F9EF8] text-white"},
        ]
    },
    navigation : {
        title: 'Navigation',
        links: [
            {title: 'Features', href: '#',notification:0,notiTitle:""},
            {title: 'News', href: '#',notification:0,notiTitle:""},
            {title: 'Style Guide', href: '#',notification:0,notiTitle:""},
            {title: 'Career', href: '#',notification:2,notiTitle:"Job"},
            {title: 'Contact Us', href: '#',notification:0,notiTitle:""},
            {title: 'Technology', href: '#',notification:0,notiTitle:""},
            {title: 'Get Theme', href: '#',notification:0,notiTitle:""},
            {title: 'Startups', href: '#',notification:0,notiTitle:""},
            {title: 'Support', href: '#',notification:0,notiTitle:""},
            {title: 'Gadgets', href: '#',notification:0,notiTitle:""},
            {title: 'Privacy Policy', href: '#',notification:0,notiTitle:""},
            {title: 'Inspiration', href: '#',notification:0,notiTitle:""},
            {title: 'Newsletter', href: '#',notification:0,notiTitle:""},
        ]
    },
    Updates : {
        title : 'Get Regular Updates',
        social :[
            {title : "WhatsApp", icon:<FaWhatsapp />, href:"#"},
            {title : "Youtube", icon:<FaYoutube />, href:"#"},
            {title : "Website Notifications", icon:<FaRegBell />, href:"#"},
            {title : "Newsletters", icon:<FaRegEnvelope />, href:"#"},
            {title : "Podcasts", icon:<FaHeadphonesAlt />, href:"#"},
        ]
    },
    mobile : {
        title : 'Our mobile App',
        platform : [
            {imgSrc : "/images/app-store.svg" , href:"#"},
            {imgSrc : "/images/google-play.svg" , href:"#"},
        ]
    }
}
const MainFooterSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 container'>
        {/* Recent Post */}
        <div className='flex flex-col gap-3 md:gap-7'>
            <h5 className='text-lg text-white font-bold'>Recent Post</h5>
            {footerData.recent.posts.map((post,index)=>(
                <div key={index} className="flex flex-col gap-2">
					<Link href="#" className={`flex items-center w-fit gap-2 ${post.categoryColor} text-xs py-1 px-2 rounded`}><span className='rounded-full size-3 bg-white'></span>{post.category}</Link>
					<div>
                        <Link href="#" className="btn-link text-white text-sm md:text-base font-medium">{post.title}</Link>
                    </div>
                    <div className='text-[#BABDC3] flex gap-3 items-center'>
                        <div className="text-xs inline-block">by <Link href="#" className="btn-link">{post.author}</Link></div>
                        <span className='' >•</span>
                        <span className='text-sm'>{post.date}</span>
                    </div>
				</div>
            ))}
        </div>
        {/* Navigation */}
        <div className='flex flex-col gap-3 md:gap-7'>
            <h5 className='text-lg text-white font-bold'>Navigation</h5>
            <div className='grid grid-cols-2 gap-y-2.5 gap-x-5'>
                {footerData.navigation.links.map((link,index)=>(
                    <Link href={link.href} className='flex gap-2 items-center text-[#BABDC3] text-sm hover:text-primary duration-400 font-medium'>
                        {link.title}
                        {link.notification != 0 && <span className='bg-[#D6293E] text-white rounded flex items-center gap-1 px-2'>{link.notification} {link.notiTitle}</span>}
                    </Link>
                ))}
            </div>
        </div>
        {/* Get Regular Updates */}
        <div className='flex flex-col gap-3 md:gap-7'>
            <h5 className='text-lg text-white font-bold'>Get Regular Updates</h5>
            <div className='flex flex-col gap-2.5'>
                {footerData.Updates.social.map((social,index)=>(
                    <Link href={social.href} className='flex items-center gap-2 text-[#BABDC3] text-sm hover:text-primary duration-400 font-medium'>{social.icon}<span>{social.title}</span></Link>
                ))}
            </div>
        </div>
        {/* Get Regular Updates */}
        <div className='flex flex-col gap-3 md:gap-7'>
            <h5 className='text-lg text-white font-bold'>Our mobile App</h5>
            <p className='text-[#BABDC3] text-sm font-medium'>Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
            <div className='flex gap-2'>
                {footerData.mobile.platform.map((platform,index)=>(
                    <Link href={platform.href} className='grow flex'>
                        <Image src={platform.imgSrc} height={131} width={40} alt={platform.imgSrc} className='grow' />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainFooterSection