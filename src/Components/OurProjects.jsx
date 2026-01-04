import React from 'react'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function OurProjects() {
  return (
    <section
                className="
    w-full h-auto
    relative
    bg-linear-to-br from-black via-[#020617] to-[#0f341a]
  "
            >
                <div className="absolute  w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full -z-10" />

                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent pointer-events-none -z-10" />


                <div className='relative z-10 py-10  px-2 md:p-20 '>
                    <div className='font-bold border-l-7 border-l-blue-600 pl-3 '>

                        <h4 className='text-white font-bold text-3xl mt-5 md:text-6xl'>Websites We Have Built for <span className='text-blue-600'>various Businesses</span></h4>


                    </div>
                    <p className='mt-5 text-gray-300 text-2xl'>Websites We Have Built for Kerala Businesses.</p>
                    
                </div>
                <ProjectCard/>
                <div className='flex items-center justify-center p-6'>
                    <button className='px-6 py-4 border-2 bg-white text-black text-lg rounded-4xl hover:scale-110 transition'>See More <FontAwesomeIcon  icon={faArrowRight}
                      className="text-black ml-2"/></button>
                </div>
                

            </section>
  )
}
