import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Facilities from "../pages/Facilities";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <NavBar />

      <div className="relative w-full h-96" id="home">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt="Background Img"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              Bringing Loving Care to Health Care.
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              Our Skills doctor have tremendous experience with wide range of
              diseases to serve the needs of our patients.
            </p>
            <Link to={"/appointment"}>
              <button className="px-6 py-3 bg-[#19B0A1] text-white font-medium rounded-full hover:bg-[#274D7C] transition duration-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Facilities />
      <Footer />
    </>
  );
};

export default HeroSection;
