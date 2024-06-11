import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import GeneralMedImage from "../assets/images/General Medicine.jpeg"
import SurgicalImage from "../assets/images/surgical-procedure-made-by-doctor-special-equipment_23-2148962517.jpg"
import DiagnosticImage from "../assets/images/diagnostic.jpeg"
import MaternalImage from "../assets/images/FamilyPlanningChoicesindividually_91.jpg"

import LaboratoryImage from "../assets/images/Lab-Web-scaled.jpg"
import ChildImage from "../assets/images/Child Health Service.jpeg"
import AlliedImage from "../assets/images/modern-dental-1024x681.jpg"
import PharmacyImage from "../assets/images/Altru-Pharmacy-Services.jpg"

const services = [
  { title: 'General Medicine', description: 'We offer comprehensive general medicine services to ensure your health and well-being. Our internists are skilled in diagnosing and treating a wide range of conditions, providing preventive care, and managing chronic illnesses', img: GeneralMedImage },
  { title: 'Surgical OPD', description: 'We offer specialized surgical outpatient services designed for patients who require surgical consultations, minor procedures, and post-operative care without the need for hospital admission', img: SurgicalImage },
  { title: 'Diagnostic Services', description :'We offer a wide range of diagnostic services to accurately identify and assess medical conditions, providing you with the essential information needed for effective treatment and care.', img: DiagnosticImage },
  { title: 'Maternal Health Services', description: 'We offer comprehensive maternal health services to ensure the well-being of both mother and baby throughout pregnancy, childbirth, and the postpartum period.', img: MaternalImage },
  { title: 'Laboratory Service', description: 'We offer a full range of laboratory services to provide accurate and timely diagnostic information essential for effective medical care.', img: LaboratoryImage },
  { title: 'Child Health Service', description: 'We offer comprehensive child health services to support the growth and development of your child from infancy through adolescence..', img: ChildImage  },
  { title: 'Allied Services', description: 'We offer a range of allied health services to complement medical care and enhance overall health and well-being.', img: AlliedImage  },
  { title: 'Pharmacy', description: 'We offer comprehensive pharmacy services to ensure you receive the medications and guidance needed for optimal health outcomes.', img: PharmacyImage}
];

const Services = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Find Out More About Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className={'p-6 rounded-lg text-center bg-teal-500'}>

            <img src={service.img} alt={service.title} className="mx-auto mb-5 h-48 w-full object-cover" />
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-white mb-4">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;
