import React from "react";
import emailIcon from "../assets/images/email_White-removebg-preview.png"; // Replace with the actual path to your email icon
import locationIcon from "../assets/images/location_icon-removebg-preview.png"; // Replace with the actual path to your location icon

import facebookIcon from "../assets/images/Facebook-White-Logo.png"; // Replace with the actual path to your Facebook icon
import twitterIcon from "../assets/images/Twitter-X-White-Logo-PNG-removebg-preview.png"; // Replace with the actual path to your Twitter icon
import instagramIcon from "../assets/images/ig-logo-white-instagram-new-logo-white-11562871531teqfqtfzpn-removebg-preview.png"; // Replace with the actual path to your Instagram icon
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#274D7C] text-white py-10 px-10 mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">3 Angels Medical Center</h2>
          <p className="mb-4">
            A Dedicated Medical Facility Operating 24/7.
            <br />
            At 3 Angels Medical Center, Your Health is our Priority.
          </p>
          <div className="flex items-center mb-2">
            <img src={emailIcon} alt="email" className="mr-2 w-6 h-6" />
            <a href="mailto:enquiries@3angelsmedicalcenter.com" className="hover:underline">
              enquiries@3angelsmedicalcenter.com
            </a>
          </div>
          <div className="flex items-center">
            <img src={locationIcon} alt="location" className="mr-2 w-6 h-6" />
            <p>Community 23 Solomon City, Tema</p>
          </div>
        </div>
        <div className="text-left lg:text-center">
          <h2 className="text-xl font-bold mb-4 underline">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link to={"/aboutus"} className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to={"/services"} className="hover:underline">
                Our Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to={"/visitus"} className="hover:underline">
                Visit Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to={"/gallery"} className="hover:underline">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h2 className="text-xl font-bold mb-4 underline cursor-pointer" onClick={() => navigate("/appointment-form")}>
            Book An Appointment
          </h2>
          <p className="mb-4">
            The doctorate staff members are well-trained professionals.
          </p>
          <button className="bg-teal-500 text-white py-2 px-4 rounded flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call: +233535196841
          </button>
        </div>
      </div>
      <div className="border-t border-zinc-700 mt-8 pt-4 text-center">
        <p className="mb-4">
          All Rights Reserved | 3 Angels Medical Center 2024 |
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#">
            <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="twitter" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
