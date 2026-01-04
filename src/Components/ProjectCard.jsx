import React from 'react'

export default function ProjectCard() {
    return (
        <>
            <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch -z-9 px-20">
                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/AFC.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            RESTAURANT
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                            American Fried Chicken — Franchise-Based Online Food Ordering Platform
                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/Kerala.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            HOSPITALITY
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                            HostStay.in — Commission-Based Hospitality Booking Platform
                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/RealEstate.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            REAL ESTATE
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                            KeralaPropertyOnline.in — Subscription-Based Real Estate Marketplace
                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/Burj.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            REAL ESTATE
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                            Globfam Realty — UAE Real Estate Listings Platform
                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/Spices.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            FOOD PRODUCTS
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                           Masaali Foods — Spices & Masala E-Commerce Platform

                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

                <div
                    className="
                                relative p-6 rounded-xl shadow
                                h-77
                                bg-cover bg-center bg-no-repeat
                                flex flex-col justify-end
                            "
                    style={{ backgroundImage: "url('/images/myop.jpg')" }}
                >{/* bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2
                  bg-linear-to-t from-black/70 to-transparent
                  rounded-xl pointer-events-none" />
                  {/* content on top */}
                    <div className="relative z-10 space-y-2">
                        <p className="text-fuchsia-700 font-semibold">
                            COSMETICS
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                            MY OP - The total perfume story
                        </h4>
                        <button className="rounded-3xl border-2 px-5 py-2 text-white hover:bg-white hover:text-black hover:border-white transition">View Case Study</button>
                        
                        </div>
                    </div>

            </div>
        </>

    )
}
