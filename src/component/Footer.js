import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#274D7C]">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <Link to={"/home"}>
              <div className="px-5 py-2 text-base text-gray-300 hover:text-white">
                Home
              </div>
            </Link>
            <Link to={"/services"}>
              <div className="px-5 py-2 text-base text-gray-300 hover:text-white">
                About
              </div>
            </Link>
            <Link to={"/services"}>
              <div className="px-5 py-2 text-base text-gray-300 hover:text-white">
                Services
              </div>
            </Link>
            <Link to={"/appointment"}>
              <div className="px-5 py-2 text-base text-gray-300 hover:text-white">
                Book Appointment
              </div>
            </Link>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 3 Angles Medical center, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
