import { DiJava, DiJavascript, DiMysql } from 'react-icons/di'
import { FaLaravel } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { BsBootstrap } from 'react-icons/bs'
import React from 'react'

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                
                {/* React */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>

                {/* Laravel */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <FaLaravel className='text-7xl' style={{ color: '#FF2D20' }} />
                </div>

                {/* Tailwind */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <TbBrandTailwind className='text-7xl text-cyan-500' />
                </div>

                {/* Bootstrap */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <BsBootstrap className='text-7xl' style={{ color: '#7952B3' }} />
                </div>

                {/* Java */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <DiJava className='text-7xl' style={{ color: '#007396' }} />
                </div>

                {/* JavaScript */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <DiJavascript className='text-7xl' style={{ color: '#F7DF1E' }} />
                </div>

                {/* MySQL */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <DiMysql className='text-7xl' style={{ color: '#4479A1' }} />
                </div>

                {/* MongoDB */}
                <div className='rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:-translate-y-3'>
                    <SiMongodb className='text-7xl' style={{ color: '#47A248' }} />
                </div>

            </div>
        </div>
    )
}

export default Technologies
