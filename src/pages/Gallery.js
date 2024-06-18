import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

const Gallery = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-screen bg-teal-50 dark:bg-zinc-900">
        <p className="text-lg font-semibold text-teal-600 dark:text-zinc-100 animate-pulse">
          Loading...
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
