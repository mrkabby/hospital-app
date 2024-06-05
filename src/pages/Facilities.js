import React from 'react';
import { useNavigate } from 'react-router-dom';
import PharmacyImage from "../component/assets/images/pharmacy.png";
import OperatingImage from "../component/assets/images/operating-room-plastic-surgery.jpg"
import LaboratoryImage from "../component/assets/images/Lab-Web-scaled.jpg"
import RadiologyImage from "../component/assets/images/radiology.jpeg"

const facilities = [
  { title: 'Pharmacy', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: PharmacyImage },
  { title: 'Operating Rooms', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: OperatingImage },
  { title: 'Laboratory Services', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: LaboratoryImage },
  { title: 'Radiology Department', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: RadiologyImage },
];

const Facilities = () => {
    const navigate= useNavigate();
  return (
    <div className="bg-teal-50 dark:bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="mb-8 md:mr-8 md:mb-0 md:w-1/2">
          <h2 className="text-teal-500 font-semibold uppercase tracking-wide lg:mt-44 ">Our Facilities</h2>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">Facilities That We Provide</h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim metus nec fringilla accumsan.</p>
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-[#19B0A1] text-teal-500 font-semibold rounded-md hover:bg-[#274D7C] hover:text-white transition" onClick={() => navigate("/allfacilities")}>
            View All
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:w-1/2">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
              <img src={facility.img} alt={facility.title} className="mb-4" />
              <h3 className="text-xl font-semibold">{facility.title}</h3>
              <p className="mt-2">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
