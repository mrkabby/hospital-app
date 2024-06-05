import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import EmergencyImage from "../component/assets/images/emergency department.jpeg"
import OperatingImage from "../component/assets/images/operating-room-plastic-surgery.jpg"
import IntensiveCareImage from "../component/assets/images/Critical-Care-Unit.jpg"
import MaternityWardImage from "../component/assets/images/Maternity-Ward-Overview.jpg"
import PediatricImage from "../component/assets/images/pediactric.jpg"
import RadiologyImage from "../component/assets/images/radiology.jpeg"
import LaboratoryImage from "../component/assets/images/Lab-Web-scaled.jpg"
import PharmacyImage from "../component/assets/images/pharmacy.png"
import OutPatientImage from "../component/assets/images/inpatient-vs-outpatient-whats-the-difference.jpg"
import PhysicalTherapyImage from "../component/assets/images/physicaltherapy.jpg"
import PrivateImage from "../component/assets/images/privatesecure.jpeg"
import OnlineImage from "../component/assets/images/onlineservice.jpg"

const facilities = [
  { title: 'Emergency Department', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: EmergencyImage },
  { title: 'Operating Rooms', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: OperatingImage },
  { title: 'Intensive Care Unit', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: IntensiveCareImage },
  { title: 'Maternity Ward', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: MaternityWardImage},
  { title: 'Pediatric Ward', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: PediatricImage },
  { title: 'Radiology Department', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: RadiologyImage },
  { title: 'Laboratory Services', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: LaboratoryImage },
  { title: 'Pharmacy', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: PharmacyImage },
  { title: 'Outpatient Clinics', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: OutPatientImage },
  { title: 'Physical Therapy Center', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: PhysicalTherapyImage },
  { title: 'Private & Secure', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: PrivateImage },
  { title: 'Online Services', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: OnlineImage },
   
];

const AllFacilities = () => {
  return (
    
    <>
    <NavBar />
    
        <div className="bg-teal-50 dark:bg-zinc-900 p-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-teal-500 font-semibold uppercase tracking-wide text-center ">All Facilities</h2>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-2 text-center">Facilities That We Provide</h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim metus nec fringilla accumsan.</p>
             
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <Footer />
    </>
      );
    };
export default AllFacilities;
