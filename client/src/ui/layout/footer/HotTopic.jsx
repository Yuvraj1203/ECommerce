import Link from 'next/link'
import React from 'react'

const hotTopics = [
    {title:"Covid-19",href:"#"},
    {title:"Entertainment",href:"#"},
    {title:"Media",href:"#"},
    {title:"Politics",href:"#"},
    {title:"Sports",href:"#"},    
    {title:"Covid-19",href:"#"},
    {title:"Entertainment",href:"#"},
    {title:"Media",href:"#"},
    {title:"Politics",href:"#"},
    {title:"Sports",href:"#"},    
    {title:"Covid-19",href:"#"},
    {title:"Entertainment",href:"#"},
    {title:"Media",href:"#"},
    {title:"Politics",href:"#"},
    {title:"Sports",href:"#"},    
    {title:"Covid-19",href:"#"},
    {title:"Entertainment",href:"#"},
    {title:"Media",href:"#"},
    {title:"Politics",href:"#"},
    {title:"Sports",href:"#"},
]
const HotTopic = () => {
  return (
    <div className='flex flex-col gap-2.5 container'>
        <h5 className='font-bold text-lg text-white'>Hot topics </h5>
        <div className='flex flex-wrap gap-2'>
            {hotTopics.map((topic,index)=>(
                <Link href={topic.href} key={index} className='text-sm md:text-base text-[#BABDC3] hover:text-primary duration-400'>{topic.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default HotTopic