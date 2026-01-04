import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import WhoAreWe from './WhoAreWe';
import Navbar from './Navbar';


export default function Hero() {
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
  <div className="absolute  w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full" />

  {/* Subtle light streak */}
  <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent" />
  <Navbar/>

  {/* Content goes here */}
  <div className="relative h-full flex items-center justify-center pt-10 md:pt-30 mb-20">
  <div className=" max-w-3xl">

    <p className="text-blue-400 font-medium mb-2 text-center">
      Creative Digital Studio
    </p>

    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-center">
      We Build
       Beautiful & Modern Web Experiences
    </h1>

    <p className="text-gray-500 mt-4 text-center hidden sm:block">
      Delivering clean design, stunning visuals and meaningful user experiences —
      crafted with precision and passion.
    </p>

    <p className='text-gray-500 text-[16px] text-center mt-8 md:mt-2 px-3'>
        <FontAwesomeIcon
  icon={faCheckCircle}
  className="text-green-500 mr-2"
/>Fast & High-Converting Websites for Businesses</p>

    <div className="mt-9 md:mt-6 flex flex-col md:flex-row gap-4 md:items-center justify-center items-stretch px-3">

      <button
  className="
    border border-emerald-400
    text-emerald-300 py-5
    px-5 md:py-2.5 rounded-4xl md:rounded-3xl
    hover:bg-emerald-400/10 font-semibold
    transition

  "
>
  View Projects
</button>

      <button
  className="
    border border-emerald-400
    text-white py-5
    px-5 md:py-2.5 rounded-4xl
    shadow-[0_0_12px_#22c55e50]
    hover:shadow-[0_0_20px_#22c55e80]
    hover:bg-emerald-400/10
    transition font-semibold
    bg-emerald-500
  "
>
  Contact Us
</button>

    </div>

  </div>
</div>
<WhoAreWe/>

</section>
           
        </>

    )
}
