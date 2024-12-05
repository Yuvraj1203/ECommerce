"use client"
import React, { useState } from 'react'

const AnimatedButton = () => {
    const [ripplePosition,setRipplePosition] = useState({})
    const handleClick = (e) => {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        const distanceFromLeft = rect.left;
        const distanceFromTop = rect.top;
        console.log(e)
        console.log(e.clientX- distanceFromLeft, e.clientY-distanceFromTop);
        setRipplePosition({x:e.clientX, y:e.clientY})
        setTimeout(()=>{
            setRipplePosition({})
        })

    }
  return (
    <>
        <style>{`
            @keyframes gradient-button{
                0% {
                    background-position : 0%;
                }
                100% {
                    background-position : 400%;
                }                
            }
            .button-animation{
                animation : gradient-button 8s ease infinite;
                background-size : 400%;
            }
            .ripple{
                animation : rippleAnimation 1s linear infinite;
                left : ${ripplePosition.x}px;
                right : ${ripplePosition.y}px;
            }
            @keyframes rippleAnimation {
                0% {
                    opacity :0.5;
                    width:0px;
                    height:0px;

                }
                100% {
                    opacity :1;
                    width:500px;
                    height:500px;
                }
            }
        `}</style>
        <button onClickCapture={handleClick} className='parent overflow-hidden relative px-4 py-2 border-1 border-purple-800 rounded-xl outline-0'>
            <span className='invisible text-nowrap font-medium text-lg'>Animated Button</span>
            <span className='absolute z-10 flex items-center justify-center inset-0 text-nowrap font-medium text-lg text-white'>Animated Button</span>
            <span className='absolute inset-0 button-animation rounded-xl bg-[linear-gradient(90deg,_#172554,_#3b0764,_#be185d,_#172554)]'></span>
            {ripplePosition?.x &&
                <span className='absolute bg-white translate-x-1/2 translate-y-1/2 rounded-full ripple'></span>
            }
        </button>
        <span className='bg-pink-700'>sdgb</span>
    </>
  )
}

export default AnimatedButton