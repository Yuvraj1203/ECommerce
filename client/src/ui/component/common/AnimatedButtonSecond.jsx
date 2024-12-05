"use client";
import React, { useState } from 'react';

const AnimatedButtonSecond = () => {
    const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0, active: false });

    const handleClick = (e) => {
        e.preventDefault();
        
        // Get the bounding rectangle of the button
        const rect = e.currentTarget.getBoundingClientRect();
        
        // Calculate the position for the ripple effect
        const distanceFromLeft = e.clientX - rect.left;
        const distanceFromTop = e.clientY - rect.top;

        setRipplePosition({ x: distanceFromLeft, y: distanceFromTop, active: true });

        // Reset ripple position after animation duration
        setTimeout(() => {
            setRipplePosition({ x: 0, y: 0, active: false });
        }, 1000); // Match this duration with ripple animation duration
    };

    return (
        <>
            <style>{`
                @keyframes gradient-button {
                    0% {
                        background-position: 0%;
                    }
                    100% {
                        background-position: 400%;
                    }                
                }
                .button-animation {
                    animation: gradient-button 8s ease infinite;
                    background-size: 400%;
                }
                .ripple {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: rippleAnimation 1s linear forwards; /* Use forwards to keep final state */
                }
                @keyframes rippleAnimation {
                    0% {
                        opacity: 0.5;
                        width: 0px;
                        height: 0px;
                    }
                    100% {
                        opacity: 1;
                        width: 500px;
                        height: 500px;
                    }
                }
            `}</style>
            <button onClickCapture={handleClick} className='parent overflow-hidden relative px-4 py-2 border-1 border-purple-800 rounded-xl outline-0'>
                <span className='invisible text-nowrap font-medium text-lg'>Animated Button</span>
                <span className='absolute z-10 flex items-center justify-center inset-0 text-nowrap font-medium text-lg text-white'>Animated Button</span>
                <span className='absolute inset-0 button-animation rounded-xl bg-[linear-gradient(90deg,_#172554,_#3b0764,_#be185d,_#172554)]'></span>
                {ripplePosition.active && (
                    <span 
                        className='ripple' 
                        style={{
                            left: ripplePosition.x,
                            top: ripplePosition.y,
                        }}
                    ></span>
                )}
            </button>
            <span className='bg-pink-700'>sdgb</span>
        </>
    );
}

export default AnimatedButtonSecond;