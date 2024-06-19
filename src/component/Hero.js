import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Facilities from "../pages/Facilities";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/images/WhatsApp Image 2024-06-06 at 11.27.40_50780c7b.jpg"

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <div className="relative w-full h-screen mt-24" id="home">
        <img
          src={BackgroundImage}
          alt="Background Img"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
              Bringing Loving Care to Health Care.
            </h1>
            <p className="font-regular text-xl mb-8 mt-4 text-white">
              Our skilled doctors have tremendous experience with a wide range of diseases to serve the needs of our patients.
            </p>
            <Link to={"/appointment-form"}>
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