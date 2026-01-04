import React from 'react'

function ServiceCard() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch -z-9">

  {/* normal cards */}
  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
    <h4 className='text-4xl text-fuchsia-600 font-bold'>01</h4>
    <h5 className='text-2xl font-semibold text-white'>Custom Website Development</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
  </div>

  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
   <h4 className='text-4xl text-fuchsia-600 font-bold'>02</h4>
    <h5 className='text-2xl font-semibold text-white'>Corporate & Business Website Development</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
  </div>

  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
  <h4 className='text-4xl text-fuchsia-600 font-bold'>03</h4>
    <h5 className='text-2xl font-semibold text-white'>E-Commerce Website Development</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
</div>

  {/* more equal height cards */}
  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
    <h4 className='text-4xl text-fuchsia-600 font-bold'>04</h4>
    <h5 className='text-2xl font-semibold text-white'>Landing Page Development</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
  </div>

  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
    <h4 className='text-4xl text-fuchsia-600 font-bold'>05</h4>
    <h5 className='text-2xl font-semibold text-white'>Portfolio & Personal Websites</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
  </div>

  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex flex-col gap-y-3
                border-2 border-transparent hover:border-blue-600 transition">
    <h4 className='text-4xl text-fuchsia-600 font-bold'>06</h4>
    <h5 className='text-2xl font-semibold text-white'>Website Redesign Services</h5>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>
  </div>

  {/* full width cards */}
  <div className="bg-gray-900 p-6 rounded-xl shadow h-full flex justify-between
                border-2 border-transparent hover:border-blue-600 transition lg:col-span-3">
    <div className='flex flex-col'>
        <h4 className='text-4xl text-fuchsia-600 font-bold'>05</h4>
        <h5 className='text-2xl font-semibold text-white'>Website Maintenance & Technical Support</h5>

    </div>
    <div>
    <p className='text-2xl text-gray-500'>Tailor-made solutions built from scratch to meet your unique business requirements.</p>

    </div>
  </div>

  

</div>

  )
}

export default ServiceCard