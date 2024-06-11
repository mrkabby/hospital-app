import React from 'react';
import { useNavigate } from 'react-router-dom';
import PharmacyImage from "../assets/images/pharmacy.png";
import OperatingImage from "../assets/images/operating-room-plastic-surgery.jpg"
import LaboratoryImage from "../assets/images/Lab-Web-scaled.jpg"
import RadiologyImage from "../assets/images/radiology.jpeg"

const facilities = [
  { title: 'Pharmacy', description: 'We have a fully stocked pharmacy staffed with knowledgeable pharmacists ready to fulfill your medication needs and provide expert guidance on usage and potential interactions.', img: PharmacyImage },
  { title: 'Operating Rooms', description: 'We have state-of-the-art operating rooms equipped with advanced surgical technology and staffed by experienced surgical teams, ensuring optimal conditions for safe and successful procedures.', img: OperatingImage },
  { title: 'Laboratory Services', description: 'We have a modern laboratory facility equipped with cutting-edge technology and staffed by skilled technicians, providing accurate and timely diagnostic testing for a wide range of medical conditions.', img: LaboratoryImage },
  { title: 'Radiology Department', description: 'We have a comprehensive radiology department featuring advanced imaging equipment and experienced radiologists, offering a full range of diagnostic services including X-rays, MRI, CT scans, and ultrasound examinations for precise and detailed evaluation of health conditions', img: RadiologyImage },
];

const Facilities = () => {
    const navigate= useNavigate();
  return (
    <div className="bg-teal-50 dark:bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="mb-8 md:mr-8 md:mb-0 md:w-1/2">
          <h2 className="text-teal-500 font-semibold uppercase tracking-wide lg:mt-44 ">Our Facilities</h2>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">Facilities That We Provide</h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">We pride ourselves on our comprehensive array of modern facilities designed to meet all your healthcare needs.</p>
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
              <img src={facility.img} alt={facility.title} className="mx-auto mb-5 h-48 w-full object-cover" />
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
