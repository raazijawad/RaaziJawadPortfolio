import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/IMG_9002.png"

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-20'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl lg:text-8xl font-thin tracking-tight lg:mt-4'>Raazi Jawad</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-5'>Full Stack Developer</span>
                        <p>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img className='rounded-full lg:size-80' src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
