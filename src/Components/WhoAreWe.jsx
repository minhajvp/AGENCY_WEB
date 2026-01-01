import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChartLine, faCheckDouble, faEye, faMobile, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function WhoAreWe() {
    return (
        <>
            <div className='p-10 md:p-20 '>
                <div className='font-bold border-l-7 border-l-blue-600 pl-3 '>

                    <p className='text-white font-bold text-3xl mt-5 md:text-6xl'>Stunning, Fast & High-Converting Websites <span className='text-blue-600'>Built for various Businesses</span></p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='mt-5 md:mt-10 h-70 flex flex-col items-center justify-center p-10'>
                        <p className='text-xl text-gray-500 font-semibold'>Your website is not just your “online presence”—it is your sales engine, brand identity, and the first impression for your customers.
                        </p>
                        <p className='text-xl text-gray-500 font-semibold mt-4'>
                            Whether you're in anywhere around the globe, we help you develop a website that:
                        </p>
                    </div>
                    <div className='mt-10 md:h-70 h-100 flex flex-col gap-3 items-start justify-center p-10'>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faBolt}
                          className="text-green-500 mr-2 text-sm"
                        />Loads fast & performs smoothly</p>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faEye}
                          className="text-green-500 mr-2 text-sm"
                        /> Looks modern, clean, and high-end</p>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faSearch}
                          className="text-green-500 mr-2 text-sm"
                        />Attracts organic traffic with SEO-ready structure</p>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faChartLine}
                          className="text-green-500 mr-2 text-sm"
                        />Converts visitors into paying customers</p>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faMobile}
                          className="text-green-500 mr-2 text-sm"
                        />
                            Works flawlessly on mobile</p>
                        <p className='md:text-2xl text-xl font-medium leading-tight text-white'><FontAwesomeIcon
                          icon={faCheckDouble}
                          className="text-green-500 mr-2 text-sm"
                        />
                            Is easy to manage and update</p>
                    </div>
                </div>
            </div>

        </>
    )
}
