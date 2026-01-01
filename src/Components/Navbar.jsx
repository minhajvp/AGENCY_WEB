import { useState } from "react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='absolute top-0 left-0 w-full z-50 backdrop-blur-sm'>
            {/* main container */}
            <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between
                text-white">


                <div className="text-xl font-bold tracking-tight">
                    <p>Creative <span className="text-blue-600">Studio</span></p>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="font-medium text-white hover:text-gray-900 transition cursor-pointer">Home</a>
                    <a className="font-medium text-white hover:text-gray-900 transition cursor-pointer">Service</a>
                    <a className="font-medium text-white hover:text-gray-900 transition cursor-pointer">Projects</a>
                    <a className="font-medium text-white hover:text-gray-900 transition cursor-pointer">About</a>
                </div>

                {/* <button className="hidden md:block bg-blue-950 py-2 px-4 text-white rounded-md hover:bg-blue-700 transition">Contact Us</button> */}
                <button
  className="hidden md:block 
    border border-emerald-400
    text-emerald-300
    px-4 py-2 rounded-3xl
    hover:bg-emerald-400/10
    transition
  "
>
  Contact Us
</button>


                <button className="md:hidden" onClick={() => { setIsMenuOpen(true) }}>
                    ☰
                </button>


            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40" onClick={() => { setIsMenuOpen(false) }}>
                     <div
                            className={`
                fixed top-0 right-0 h-full w-64
                bg-white shadow-xl z-50
                transform transition-transform duration-300
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
            >
                <div className="flex items-center justify-between border-b px-3 py-4">
                    <span className="text-lg font-semibold">Menu</span>
                    <button className="text-gray-600 hover:text-black transition" onClick={() => { setIsMenuOpen(false) }}>✕</button>
                </div>
                <div className="flex flex-col px-4 py-4 gap-5">

                    <a className="text-gray-700 hover:text-blue-600 transition border-b cursor-pointer">Home</a>
                    <a className="text-gray-700 hover:text-blue-600 transition border-b cursor-pointer">Services</a>
                    <a className="text-gray-700 hover:text-blue-600 transition border-b cursor-pointer">Projects</a>
                    <a className="text-gray-700 hover:text-blue-600 transition border-b cursor-pointer">About</a>

                    <button className="mt-auto bg-blue-950 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Contact Us
                    </button>

                </div>
            </div>
                </div>
            )}
           

        </nav>
    )
}

export default Navbar