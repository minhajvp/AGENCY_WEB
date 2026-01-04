import React from 'react'
import WeWorkWithButtons from './WeWorkWithButtons'

export default function WhyWe() {
  return (
    <section
                className="
    w-full h-auto
    relative
    bg-linear-to-br from-black via-[#020617] to-[#010603]
  "
            >


                <div className='relative z-10 p-10 md:p-20'>
                    <div className='font-bold border-l-7 border-l-blue-600 pl-3 '>

                        <h4 className='text-white font-bold text-3xl mt-5 md:text-6xl'>Industries We Work With </h4>


                    </div>
                    
                    <WeWorkWithButtons/>
                </div>
                
                
                
                

            </section>
  )
}
