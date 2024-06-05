import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#274D7C]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="/home" className="text-base text-gray-300 hover:text-white">Home</a>
            </div>
            <div className="px-5 py-2">
              <a href="aboutus" className="text-base text-gray-300 hover:text-white">About</a>
            </div>
            <div className="px-5 py-2">
              <a href="/services" className="text-base text-gray-300 hover:text-white">Services</a>
            </div>
            <div className="px-5 py-2">
              <a href="/contactus" className="text-base text-gray-300 hover:text-white">Contact</a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 3 Angles Medical center, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer