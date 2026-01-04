import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
    return (
        <>
            <section
                className="
    w-full h-auto
    relative
    bg-linear-to-br from-black via-[#020617] to-[#0f341a]
  "
            >
                <div className="absolute  w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full -z-10" />

                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent pointer-events-none -z-10" />


                <div className='relative z-10 px-2 py-10 md:p-20'>
                    <div className='font-bold border-l-7 border-l-blue-600 pl-3 '>

                        <h4 className='text-white font-bold text-3xl mt-5 md:text-6xl'>Our <span className='text-blue-600'>Web Development</span> Services</h4>


                    </div>
                    <p className='mt-5 text-gray-300 text-2xl'>Creative Studio provides end-to-end website development solutions for businesses across India.</p>
                    <ServiceCard />
                </div>

            </section>
        </>
    )
}
