import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import EmergencyImage from "../assets/images/emergency department.jpeg"
import OperatingImage from "../assets/images/operating-room-plastic-surgery.jpg"
import IntensiveCareImage from "../assets/images/Critical-Care-Unit.jpg"
import MaternityWardImage from "../assets/images/Maternity-Ward-Overview.jpg"
import PediatricImage from "../assets/images/pediactric.jpg"
import RadiologyImage from "../assets/images/radiology.jpeg"
import LaboratoryImage from "../assets/images/Lab-Web-scaled.jpg"
import PharmacyImage from "../assets/images/pharmacy.png"
import OutPatientImage from "../assets/images/inpatient-vs-outpatient-whats-the-difference.jpg"
import PhysicalTherapyImage from "../assets/images/physicaltherapy.jpg"
import PrivateImage from "../assets/images/privatesecure.jpeg"
import OnlineImage from "../assets/images/onlineservice.jpg"

const facilities = [
  { title: 'Emergency Department', description: 'We have a fully equipped emergency department staffed with highly trained healthcare professionals available 24/7 to provide immediate medical care for any urgent or life-threatening conditions.', img: EmergencyImage },
  { title: 'Operating Rooms', description: 'We have state-of-the-art operating rooms equipped with the latest surgical technology and supported by skilled surgical teams, ensuring a safe and efficient environment for a wide range of surgical procedures', img: OperatingImage },
  { title: 'Intensive Care Unit', description: 'We have a specialized intensive care unit (ICU) equipped with advanced monitoring and life support systems, staffed by a multidisciplinary team of critical care specialists, nurses, and support staff, providing round-the-clock care for patients with severe or life-threatening conditions.', img: IntensiveCareImage },
  { title: 'Maternity Ward', description: 'We have a dedicated maternity ward designed to provide a comfortable and supportive environment for expectant mothers and their newborns.', img: MaternityWardImage},
  { title: 'Pediatric Ward', description: 'We have a specialized pediatric ward equipped with child-friendly facilities and staffed by compassionate pediatricians and nurses, dedicated to providing expert medical care for infants, children, and adolescents. ', img: PediatricImage },
  { title: 'Radiology Department', description: 'We have a comprehensive radiology department featuring advanced imaging equipment and experienced radiologists, offering a full range of diagnostic services including X-rays, MRI, CT scans, and ultrasound examinations for precise and detailed evaluation of health conditions', img: RadiologyImage },
  { title: 'Laboratory Services', description: 'We have a modern laboratory facility equipped with cutting-edge technology and staffed by skilled technicians, providing accurate and timely diagnostic testing for a wide range of medical conditions.', img: LaboratoryImage },
  { title: 'Pharmacy', description: 'We have a fully stocked pharmacy staffed with knowledgeable pharmacists ready to fulfill your medication needs and provide expert guidance on usage and potential interactions.', img: PharmacyImage },
  { title: 'Outpatient Clinics', description: 'We have an outpatient department (OPD) that offers a wide range of medical services for patients who do not require overnight hospitalization. Our outpatient facilities include consultation rooms, diagnostic testing areas, and treatment rooms, providing convenient and efficient care for various health concerns.', img: OutPatientImage },
  { title: 'Physical Therapy Center', description: 'We have a specialized physical therapy department staffed by skilled therapists who provide personalized treatment plans to help patients recover from injuries, manage chronic conditions, and improve physical function and mobility.', img: PhysicalTherapyImage },
  { title: 'Private & Secure', description: 'We prioritize privacy and security throughout our facilities, ensuring that your personal information and medical records are kept confidential and protected at all times.', img: PrivateImage },
  { title: 'Online Services', description: 'We offer online services to provide convenient access to healthcare from the comfort of your home. Our online platform allows you to schedule appointments, consult with healthcare professionals via video or chat, refill prescriptions, access medical records, and receive virtual care for a wide range of non-emergency medical concerns. ', img: OnlineImage },
   
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
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">We pride ourselves on our comprehensive array of modern facilities designed to meet all your healthcare needs. From state-of-the-art operating rooms and intensive care units to specialized departments such as radiology and maternity wards, we provide a wide range of services to ensure the highest standard of care. Our outpatient department offers convenient access to medical consultations and diagnostic tests, while our physical therapy department focuses on rehabilitation and improving mobility. With a commitment to privacy and security, our online services further enhance accessibility, allowing you to receive quality healthcare from the comfort of your home. Trust us to provide personalized care in a safe and secure environment.</p>
             
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <Footer />
    </>
      );
    };
export default AllFacilities;
