import React from 'react'
import { EXPERIENCES } from '../constants'

const MyWorks = () => {
    const handleClick = (url) => {
        window.open(url, "_blank"); // opens in a new tab
    }

    return (
        <div className='border-b border-neutral-800 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                My <span className='text-neutral-500'>Works</span>
            </h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div
                        key={index}
                        className='mb-8 flex flex-wrap lg:justify-center gap-8 outline-neutral-800 py-4 rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-103 hover:bg-neutral-900/50 px-4 cursor-pointer'
                        onClick={() => handleClick(experience.url)}
                    >
                        <div className='w-full lg:w-1/4'>
                            <img
                                className='mt-5 mb-6 rounded-xl'
                                src={experience.image}
                                alt={experience.role}
                            />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.role}</h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='mr-2 mt-4 rounded-full bg-neutral-900 px-2 lg:px-4 py-1 lg:text-small font-medium text-purple-800'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyWorks
