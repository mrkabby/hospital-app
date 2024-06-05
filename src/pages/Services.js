import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import CardiologyImage from "../component/assets/images/Cardiology-scaled.jpg"
import HypotherapyImage from "../component/assets/images/hypotherapy.jpg"
import PulmonaryImage from "../component/assets/images/GettyImages-953787016.jpg"
import RadiologyImage from "../component/assets/images/skeleton-bg.jpg"
import NeurologyImage from "../component/assets/images/58b0424e-411c-4243-9228-4a0725bbab96.jpg"
import UrologyImage from "../component/assets/images/istockphoto-1339092350-612x612.jpg"

const services = [
  { title: 'Cardiology', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: CardiologyImage },
  { title: 'Neurology', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: NeurologyImage },
  { title: 'Urology', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: UrologyImage },
  { title: 'Pulmonary', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: PulmonaryImage },
  { title: 'Radiology', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: RadiologyImage },
  { title: 'Hypotherapy', description: 'Lorem ipsum dolor sit amet, Consectetur Adipiscing elit. Nullam Placerat Pellentesque Aliquam.', img: HypotherapyImage }
];

const Services = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-7xl mx-auto px-4 py-12 bg-teal-50">
      <h2 className="text-3xl font-bold text-center mb-8">Find Out More About Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className={'p-6 rounded-lg text-center bg-teal-500'}>

            <img src={service.img} alt={service.title} className="mx-auto mb-5 h-48 w-full object-cover" />
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-white mb-4">{service.description}</p>
            {index === 1 && <a href="#" className="text-blue-600 font-semibold">Read More →</a>}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;
