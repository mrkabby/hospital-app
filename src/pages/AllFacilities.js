import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

const facilities = [
  { title: 'Online Sessions', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Instant Operation', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Private & Secure', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Emergency Care', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50'},
  { title: 'Online Sessions', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Instant Operation', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Private & Secure', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Emergency Care', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Online Sessions', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Instant Operation', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Private & Secure', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
  { title: 'Emergency Care', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eu turpis molestie.', img: 'https://placehold.co/50x50' },
   
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
