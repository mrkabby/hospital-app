import React from 'react';

const AboutSection = () => {
  return (
    <div>
      <section id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <p className="mt-4 text-gray-600 text-lg">
              At 3 Angels Medical Center, we are committed to providing exceptional healthcare services to our community. With a team of skilled healthcare professionals and state-of-the-art facilities, we deliver comprehensive medical care tailored to meet the unique needs of each patient. Our mission is to promote health, prevent illness, and improve the quality of life for all those we serve. Whether you're visiting us for routine check-ups, specialized treatments, or emergency care, you can trust us to prioritize your well-being and deliver compassionate, patient-centered care every step of the way.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
