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
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Etiam eu turpis molestieLorem ipsum dolor sit amet consectetur adipiscing elit.
                Etiam eu turpis molestieLorem ipsum dolor sit amet consectetur adipiscing elit.
                Etiam eu turpis molestieLorem ipsum dolor sit amet consectetur adipiscing elit.
                Etiam eu turpis molestieLorem ipsum dolor sit amet consectetur adipiscing elit.
                Etiam eu turpis molestie
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
