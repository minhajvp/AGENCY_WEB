import React from 'react'

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
                {/* Glow accent */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full" />

                {/* Subtle light streak */}
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent" />
                {/* <div className='relative font-bold border-l-7 border-l-blue-600  p-20'>

                    <p className='text-white font-bold text-3xl  md:text-6xl'>Our Development Services</p>
                </div> */} 

                <div className='p-10 md:p-20 '>
                <div className='font-bold border-l-7 border-l-blue-600 pl-3 '>

                    <p className='text-white font-bold text-3xl mt-5 md:text-6xl'>Our Development Services</p>
                </div>
                </div>

            </section>
        </>
    )
}
